import { Component } from '@angular/core';
import {FormGroup, FormControl,  Validators} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  LoginForm = new FormGroup({
    name: new FormControl('', [Validators.required,  Validators.pattern('[a-zA-Z ] + $')]),
    // email: new FormControl('',[Validators.required,Validators.email]),
    email: new FormControl('',[Validators.required,]),
    phone: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(8)])
    
  })

  LoginUser(){

    console.warn(this.LoginForm.value)
  }

   get nameValidator(){
    return this.LoginForm.get('name')
  }
  get emailValidator(){
    return this.LoginForm.get('email')
  }
  get phoneValidator(){
    return this.LoginForm.get('phone')
  }
  get passwordValidator(){
    return this.LoginForm.get('password')
  }

  }