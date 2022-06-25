import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ride',
  templateUrl: './ride.component.html',
  styleUrls: ['./ride.component.scss']
})
export class RideComponent implements OnInit {
select:boolean = true;

  constructor() { }
  @Input() rideCount: any;
  @Output() cancel: EventEmitter<boolean> = new EventEmitter<boolean>();
  ngOnInit(): void {
  }
bookRide(){
  this.select = true;

}
cancelRide($event: any){
  this.cancel.emit(false); 
  this.select = false
  console.log( 'nishaaaaaaaaaaaa',this.cancel);

}
}
