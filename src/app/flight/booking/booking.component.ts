import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'; 

export interface Pay {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  
  
  constructor(private _formBuilder: FormBuilder,private router: Router) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    
  }
   payment: Pay[] = [
    {value: 'Credit card-0', viewValue: 'Credit card'},
    {value: 'Dedit card-1', viewValue: 'Dedit card'},
    {value: 'Netbanking-2', viewValue: 'Netbanking'}
  ];
  alt(){
  	alert("Your payment successfully done");
  }

  

}
