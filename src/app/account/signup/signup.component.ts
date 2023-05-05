import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  mainForm: FormGroup | any;
  isFormSubmitted: boolean = false;
  constructor(private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d](?=.*[#_^@$!%*?&])[A-Za-z\d#_^@$!%*?&]{5,}$/;

    this.mainForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(passwordPattern)]]
    })
  }
  onSubmit() {
    this.isFormSubmitted = true;
    if (this.mainForm.invalid) {
      return;
    }
    this.spinner.show();
    this.authService.register(this.mainForm.value).subscribe(res => {
      this.spinner.hide();
      if (res.status == 'success') {
        localStorage.setItem('userToken', JSON.stringify(res.authorisation.token));
        this.authService.saveCurrentToken();
        this.router.navigate(['/home'])
      }
      else if (res.status == 'error') {
        this.toastr.error(res.message)
      }
    }, err => {
      this.spinner.hide();
      this.toastr.error('General Error Happened');
      console.log(err)
    })
  }
}
