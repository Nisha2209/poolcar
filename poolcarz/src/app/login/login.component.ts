import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 registerForm!: FormGroup; 
 submitted!:boolean;
  loginForm :any ;
  
 user = [
    {
   "userName":"admin",
    "password":"admin"
    },
    {
      "userName":"nisha",
       "password":"nisha"
       }

  ];
  constructor( private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    })
    }
    
  loginUser(){
    if(this.user[0].userName == "nisha" && this.user[0].password == "nisha"){
      alert('login sucess')
    }
    else{
      alert('login fail')
    }
  }
  
}
