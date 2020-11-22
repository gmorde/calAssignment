import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  signInForm;
  registerForm;

  constructor(private formBuilder: FormBuilder) {
    this.signInForm = this.formBuilder.group({
      email: '',
      password: ''
    });

    this.registerForm = this.formBuilder.group({
      email: '',
      password: '',
      confirmPassword: '',
      signUp: false
    });
  }

  ngOnInit(): void {}

  onSubmitSignInForm() {
    this.signInForm.reset();
  }

  onSubmitRegisterForm() {
    this.registerForm.reset();
  }


}
