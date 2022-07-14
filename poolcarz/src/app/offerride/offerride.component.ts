import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder, FormControl, } from '@angular/forms';

@Component({
  selector: 'app-offerride',
  templateUrl: './offerride.component.html',
  styleUrls: ['./offerride.component.scss']
})
export class OfferrideComponent implements OnInit {
  registerForm!: FormGroup;
  submitted!: boolean;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: []      
      }),
      email: ['', [Validators.required]]
    });
  }
//   rideForm!: FormGroup; 
//   submitted!:boolean;
//   seats: any;
//   constructor(private formBuilder: FormBuilder,) { }
 

//   ngOnInit(): void {
//     this.rideForm = this.formBuilder.group({
//       name: ['', Validators.required],
//       Startlocation: ['', Validators.required],
//       destination:['', Validators.required],
//       car:['', Validators.required],
//       seats: ['',[Validators.required,this.seatsCh]]
//       })
      
//   }
//   seatsCh(c: FormControl):any{
//     if(c.value ! > 0 && c.value ! <9){
//       return {'seatsNuminvalid': true}
//     }
// return null;
//     }
 validateEmail(c: FormControl): any {
  let EMAIL_REGEXP = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return EMAIL_REGEXP.test(c.value) ? null : {
    emailInvalid: {
      message: "Invalid Format!"
    }
  };
  }
}
