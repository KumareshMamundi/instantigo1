import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlightsService } from '../../flights.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {
email="";
  constructor(public flightsService: FlightsService, public router: Router) { }

  ngOnInit() {
  }
  sendMail(form:NgForm){
  	if(form.invalid){
  		return;
  	}
  	this.email=form.value.email;
  	this.flightsService.forgetPassword(form.value.email)
	  	.subscribe((responseData)=>{
      console.log(responseData.message);
      if(responseData.message=="Email sent"){
        alert('Password sent to your mail');
        this.router.navigateByUrl('/login');
      }else{
      	alert("Enter valid email");
        this.router.navigateByUrl('/forget');
        form.resetForm();
      }
    });
  }

}
