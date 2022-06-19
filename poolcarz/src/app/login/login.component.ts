import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // loginForm :any ;
  
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
