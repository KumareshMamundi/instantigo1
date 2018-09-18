import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlightsService } from '../../flights.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	email="";
	pass="";
  constructor(public flightsService: FlightsService, public router: Router) { }

  ngOnInit() {
  }
  allowUser(form:NgForm){
  	if(form.invalid){
  		return;
  	}
  this.email=form.value.email;
  this.pass=form.value.password;
  this.flightsService.findUser(form.value.email, form.value.password)
    .subscribe((responseData)=>{
      // console.log(responseData.message);
      if(responseData.message=="login successfully"){
        console.log('login successfully');
        this.router.navigateByUrl('/flight/flightDetails/booking');
      }else{
        this.router.navigateByUrl('/login');
        alert("Enter valid email and password");
        form.resetForm();
      }
    });

  }

}
