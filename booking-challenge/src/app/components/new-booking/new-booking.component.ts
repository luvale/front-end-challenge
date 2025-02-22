import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { availableHours } from '../constants';

@Component({
  selector: 'app-new-booking',
  templateUrl: './new-booking.component.html',
  styleUrls: ['./new-booking.component.scss']
})
export class NewBookingComponent implements OnInit {
  hours = availableHours;
  newBooking: FormGroup = this.fb.group({
    origin: ['', Validators.required],
    destination: ['', Validators.required],
    numPassengers: [1, [Validators.required, Validators.min(1), Validators.max(10)]],
    date: ['', Validators.required],
    hour: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }
  saveForm(){
    const myBookings = localStorage.getItem("myBookings");
    if (myBookings) {
      const newBookings = JSON.parse(myBookings);
      newBookings.push(this.newBooking.value)
      localStorage.setItem("myBookings", JSON.stringify(newBookings));
    } else {
      localStorage.setItem("myBookings", JSON.stringify([this.newBooking.value]));  
    }
    this.goTo('booking-list');
  }
  goTo(route:string) {
    this.router.navigate([route]);
  }
}
