import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlightsService } from '../../flights.service';
import {MatSnackBar} from '@angular/material';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
// f="";
// l="";
// email="";
// pass="";
// m="";
// a="";
result="";
  constructor(public flightsService: FlightsService, public snackBar: MatSnackBar, public router: Router) { }

  ngOnInit() {
  }
  createUser(form:NgForm){
  	if(form.invalid){
  		return;
  	}
  // 	this.f=form.value.firstName;
  // 	this.l=form.value.lastName;
  // this.email=form.value.email;
  // this.pass=form.value.password;
  // this.m=form.value.mobileNo;
  // this.a=form.value.address;
  this.flightsService.addUser(
      form.value.firstName,
	  form.value.lastName,
	  form.value.email,
	  form.value.password,
	  form.value.mobileNo,
	  form.value.address
	  ).subscribe((responseData) => {
        this.result=responseData.message;
      	if(this.result=="Registered successfully"){
      		this.snackBar.open(form.value.firstName, this.result, {
      		duration: 3000,});
	        this.router.navigateByUrl('/login');
	        
	      }else{
	        this.router.navigateByUrl('/signup');
	        form.resetForm();
	      }
      	
      });
	  
  }


}
