import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface User{
  isLogin: boolean
  email?: string
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent{

  currentUser: User = {isLogin: false};

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.minLength(5),
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('', [Validators.required] )
  })

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  onLogin(){
    this.currentUser = {
      isLogin: true,
      email: this.loginForm.value.email
    }
  }
}