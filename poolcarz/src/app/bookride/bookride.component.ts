import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookride',
  templateUrl: './bookride.component.html',
  styleUrls: ['./bookride.component.scss']
})
export class BookrideComponent implements OnInit {
  isUse = false;
  result = 'string'
  
seatsList =[
 {id: 1, name: 'Sentence 1', offerId : 3,car : 'volvo',seatsLeft:6,pickUp:'fromOffice',destination:'toOffice'},
  {id: 2, name: 'Sentence 2', offerId : 3, car : "volvo",seatsLeft:6,pickUp:'lalghati',destination:'coastalride'},
  {id: 3, name: 'Sentence 3', offerId : 3 ,car : "volvo",seatsLeft:6,pickUp:'fromOffice',destination:'toOffice'},
  {id: 4, name: 'Sentenc4 ',  offerId : 3, car : "volvo",seatsLeft:6,pickUp:'lalghati',destination:'shahpura'},

];

rideList(){
 var result = this.seatsList.filter((tr) => {
  return tr.pickUp === 'fromOffice' && tr.destination ==='toOffice';
 });
 console.log (result);
}
// newList(){
//   this.seatsList = this.seatsList.filter((pickUp) => seatsList.pickUp === 'Accepted')
// }

  constructor() {
  
   
   }

  //  filteredPeople = this.seatsList.filter(function (currentElement) {
  //   // the current value is an object, so you can check on its properties
  //   if( currentElement.pickUp === "fromOffice" && currentElement.destination === "tooffice"){
  //     return true;
  //   }
    
  
  
 
  ngOnInit(): void {
  }
  choose(){
    this.isUse =! this.isUse;
  }
 
}
