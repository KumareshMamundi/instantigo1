
import { Component, OnInit , OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlightsService } from '../../flights.service';
import { Book } from '../../Book';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Router } from '@angular/router'; 

import * as $ from 'jquery';

export interface Class {
  value: string;
}

@Component({
  selector: 'app-multicity',
  templateUrl: './multicity.component.html',
  styleUrls: ['./multicity.component.css']
})
export class MulticityComponent implements OnInit {
  Arr = Array; //Array type captured in a variable
  num:number = 1;
 
  public className="";
  public adult="";
  public children="";
  public infants="";
  check="";
  checkDate1="";
  checkDate2="";
  checkDate3="";
  checkDate4="";
  public details=[];
  books=[];
  books1=[];
  books2=[];
  books3=[];
  books4=[];
    posts: Book[] = [];
  private postsSub: Subscription;
    posts1: Book[] = [];
  private postsSub1: Subscription;
    posts2: Book[] = [];
  private postsSub2: Subscription;
    posts3: Book[] = [];
  private postsSub3: Subscription;
    posts4: Book[] = [];
  private postsSub4: Subscription;


  constructor(public flightsService: FlightsService, public router: Router) { }
   
  public ngOnInit() {
  	 $(document).ready(function(){
				    $(".addfield").on("click",".remove_field", function(e){ 
				        $(this).parent('div').remove(); 
				    })
		    });

  }
  classes: Class[] = [
    {value: 'economy'},
    {value: 'premiumeconomy'},
    {value: 'business'}
  ];
  onclickevent(){
  this.num+=1;
 }
 deleteEvent(){
  this.num-=1;
 }
 


searchingDetails(form:NgForm){ 

   // if(this.num==0)
 // {
 //  this.details.push(form.value.from,form.value.to,form.value.date,form.value.adult,form.value.children,form.value.infants,form.value.class);     
 // }else if(this.num==1){
 //  this.details.push(form.value.from,form.value.to,form.value.date,form.value.from1,form.value.to1,form.value.date1,form.value.adult,form.value.children,form.value.infants,form.value.class);    
 // }else if(this.num==2){
 //  this.details.push(form.value.from,form.value.to,form.value.date,form.value.from1,form.value.to1,form.value.date1,form.value.from2,form.value.to2,form.value.date2,form.value.adult,form.value.children,form.value.infants,form.value.class);    
 // }else if(this.num==3){
 //  this.details.push(form.value.from,form.value.to,form.value.date,form.value.from1,form.value.to1,form.value.date1,form.value.from2,form.value.to2,form.value.date2,form.value.from3,form.value.to3,form.value.date3,form.value.adult,form.value.children,form.value.infants,form.value.class);      
 // }else if(this.num==4){
 //  this.details.push(form.value.from,form.value.to,form.value.date,form.value.from1,form.value.to1,form.value.date1,form.value.from2,form.value.to2,form.value.date2,form.value.from3,form.value.to3,form.value.date3,form.value.from4,form.value.to4,form.value.date4,form.value.adult,form.value.children,form.value.infants,form.value.class);      
 // }searchingDetails(form:NgForm){ 
    if (form.invalid) {
      return;
    }
   this.className=form.value.class;

    this.adult=form.value.adult;
    this.children=form.value.children;
    this.infants=form.value.infants;

   this.check=form.value.date;
   


        this.flightsService.getFlightsForMulticity(
            form.value.from,
            form.value.to,
            form.value.date,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
                // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.check.charAt(0).concat(this.check.charAt(1));
            var b=this.check.charAt(2).concat(this.check.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.check.charAt(6); 
            }else{
              var month=this.check.charAt(5).concat(this.check.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.check.charAt(9);
            }else{
              var day=this.check.charAt(8).concat(this.check.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books.push(data[i]);
                  }
              }
            }
          }
    });

   this.flightsService.getGreenAirFlightsForMulticity (
            form.value.from,
            form.value.to,
            form.value.date,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
               // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.check.charAt(0).concat(this.check.charAt(1));
            var b=this.check.charAt(2).concat(this.check.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.check.charAt(6); 
            }else{
              var month=this.check.charAt(5).concat(this.check.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.check.charAt(9);
            }else{
              var day=this.check.charAt(8).concat(this.check.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books.push(data[i]);
                  }
              }
            }
          }
    });

   this.flightsService.getBlueAirFlightsForMulticity(
            form.value.from,
            form.value.to,
            form.value.date,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
                // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.check.charAt(0).concat(this.check.charAt(1));
            var b=this.check.charAt(2).concat(this.check.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.check.charAt(6); 
            }else{
              var month=this.check.charAt(5).concat(this.check.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.check.charAt(9);
            }else{
              var day=this.check.charAt(8).concat(this.check.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books.push(data[i]);
                  }
              }
            }
          }
    });

  




//Addcity(1)
  this.checkDate1=form.value.date1;

    this.flightsService.getFlightsForMulticityAddcity1(
            form.value.from1,
            form.value.to1,
            form.value.date1,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
                // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.checkDate1.charAt(0).concat(this.checkDate1.charAt(1));
            var b=this.checkDate1.charAt(2).concat(this.checkDate1.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkDate1.charAt(6); 
            }else{
              var month=this.checkDate1.charAt(5).concat(this.checkDate1.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkDate1.charAt(9);
            }else{
              var day=this.checkDate1.charAt(8).concat(this.checkDate1.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books1.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books1.push(data[i]);
                  }
              }
            }
          }
    });

   this.flightsService.getGreenAirFlightsForMulticityAddcity1 (
            form.value.from1,
            form.value.to1,
            form.value.date1,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
               // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.checkDate1.charAt(0).concat(this.checkDate1.charAt(1));
            var b=this.checkDate1.charAt(2).concat(this.checkDate1.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkDate1.charAt(6); 
            }else{
              var month=this.checkDate1.charAt(5).concat(this.checkDate1.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkDate1.charAt(9);
            }else{
              var day=this.checkDate1.charAt(8).concat(this.checkDate1.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books1.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books1.push(data[i]);
                  }
              }
            }
          }
    });

   this.flightsService.getBlueAirFlightsForMulticityAddcity1(
            form.value.from1,
            form.value.to1,
            form.value.date1,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
                // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.checkDate1.charAt(0).concat(this.checkDate1.charAt(1));
            var b=this.checkDate1.charAt(2).concat(this.checkDate1.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkDate1.charAt(6); 
            }else{
              var month=this.checkDate1.charAt(5).concat(this.checkDate1.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkDate1.charAt(9);
            }else{
              var day=this.checkDate1.charAt(8).concat(this.checkDate1.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books1.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books1.push(data[i]);
                  }
              }
            }
          }
    });
       


//Addcity(2)
  this.checkDate2=form.value.date2;

    this.flightsService.getFlightsForMulticityAddcity2(
            form.value.from2,
            form.value.to2,
            form.value.date2,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
                // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.checkDate2.charAt(0).concat(this.checkDate2.charAt(1));
            var b=this.checkDate2.charAt(2).concat(this.checkDate2.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkDate2.charAt(6); 
            }else{
              var month=this.checkDate2.charAt(5).concat(this.checkDate2.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkDate2.charAt(9);
            }else{
              var day=this.checkDate2.charAt(8).concat(this.checkDate2.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books2.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books2.push(data[i]);
                  }
              }
            }
          }
    });

   this.flightsService.getGreenAirFlightsForMulticityAddcity2 (
            form.value.from2,
            form.value.to2,
            form.value.date2,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
               // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.checkDate2.charAt(0).concat(this.checkDate2.charAt(1));
            var b=this.checkDate2.charAt(2).concat(this.checkDate2.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkDate2.charAt(6); 
            }else{
              var month=this.checkDate2.charAt(5).concat(this.checkDate2.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkDate2.charAt(9);
            }else{
              var day=this.checkDate2.charAt(8).concat(this.checkDate2.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books2.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books2.push(data[i]);
                  }
              }
            }
          }
    });

   this.flightsService.getBlueAirFlightsForMulticityAddcity2(
            form.value.from2,
            form.value.to2,
            form.value.date2,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
                // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.checkDate2.charAt(0).concat(this.checkDate2.charAt(1));
            var b=this.checkDate2.charAt(2).concat(this.checkDate2.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkDate2.charAt(6); 
            }else{
              var month=this.checkDate2.charAt(5).concat(this.checkDate2.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkDate2.charAt(9);
            }else{
              var day=this.checkDate2.charAt(8).concat(this.checkDate2.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books2.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books2.push(data[i]);
                  }
              }
            }
          }
    });
       




//Addcity(3)
  this.checkDate3=form.value.date3;

    this.flightsService.getFlightsForMulticityAddcity3(
            form.value.from3,
            form.value.to3,
            form.value.date3,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
                // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.checkDate3.charAt(0).concat(this.checkDate3.charAt(1));
            var b=this.checkDate3.charAt(2).concat(this.checkDate3.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkDate3.charAt(6); 
            }else{
              var month=this.checkDate3.charAt(5).concat(this.checkDate3.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkDate3.charAt(9);
            }else{
              var day=this.checkDate3.charAt(8).concat(this.checkDate3.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books3.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books3.push(data[i]);
                  }
              }
            }
          }
    });

   this.flightsService.getGreenAirFlightsForMulticityAddcity3 (
            form.value.from3,
            form.value.to3,
            form.value.date3,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
               // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.checkDate3.charAt(0).concat(this.checkDate3.charAt(1));
            var b=this.checkDate3.charAt(2).concat(this.checkDate3.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkDate3.charAt(6); 
            }else{
              var month=this.checkDate3.charAt(5).concat(this.checkDate3.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkDate3.charAt(9);
            }else{
              var day=this.checkDate3.charAt(8).concat(this.checkDate3.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books3.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books3.push(data[i]);
                  }
              }
            }
          }
    });

   this.flightsService.getBlueAirFlightsForMulticityAddcity3(
            form.value.from3,
            form.value.to3,
            form.value.date3,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
                // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.checkDate3.charAt(0).concat(this.checkDate3.charAt(1));
            var b=this.checkDate3.charAt(2).concat(this.checkDate3.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkDate3.charAt(6); 
            }else{
              var month=this.checkDate3.charAt(5).concat(this.checkDate3.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkDate3.charAt(9);
            }else{
              var day=this.checkDate3.charAt(8).concat(this.checkDate3.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books3.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books3.push(data[i]);
                  }
              }
            }
          }
    });





//Addcity(4)
  this.checkDate4=form.value.date4;

    this.flightsService.getFlightsForMulticityAddcity4(
            form.value.from4,
            form.value.to4,
            form.value.date4,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
                // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.checkDate4.charAt(0).concat(this.checkDate4.charAt(1));
            var b=this.checkDate4.charAt(2).concat(this.checkDate4.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkDate4.charAt(6); 
            }else{
              var month=this.checkDate4.charAt(5).concat(this.checkDate4.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkDate4.charAt(9);
            }else{
              var day=this.checkDate4.charAt(8).concat(this.checkDate4.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books4.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books4.push(data[i]);
                  }
              }
            }
          }
    });

   this.flightsService.getGreenAirFlightsForMulticityAddcity4 (
            form.value.from4,
            form.value.to4,
            form.value.date4,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
               // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.checkDate4.charAt(0).concat(this.checkDate4.charAt(1));
            var b=this.checkDate4.charAt(2).concat(this.checkDate4.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkDate4.charAt(6); 
            }else{
              var month=this.checkDate4.charAt(5).concat(this.checkDate4.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkDate4.charAt(9);
            }else{
              var day=this.checkDate4.charAt(8).concat(this.checkDate4.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books4.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books4.push(data[i]);
                  }
              }
            }
          }
    });

   this.flightsService.getBlueAirFlightsForMulticityAddcity4(
            form.value.from4,
            form.value.to4,
            form.value.date4,
            form.value.adult,
            form.value.children,
            form.value.infants,
            form.value.class
          )
        .subscribe((data) => {
          // this.books = data;
          // console.log(data.length);
        for(var i=0;i<data.length;i++){
                // console.log(data[i].departureTime);
            var currentdate = new Date();
            
            var depart = parseInt(data[i].departureTime);
            // console.log(form.value.date);
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth()+1);
            console.log(currentdate.getFullYear());
            var a=this.checkDate4.charAt(0).concat(this.checkDate4.charAt(1));
            var b=this.checkDate4.charAt(2).concat(this.checkDate4.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkDate4.charAt(6); 
            }else{
              var month=this.checkDate4.charAt(5).concat(this.checkDate4.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkDate4.charAt(9);
            }else{
              var day=this.checkDate4.charAt(8).concat(this.checkDate4.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.check);
            // console.log(year);
            // console.log(month);
            // console.log(day);
            
            if(currentdate.getFullYear()<=parseInt(year)){
              if((currentdate.getMonth()+1)<=parseInt(month)){
                if(currentdate.getDate()===parseInt(day)){
                   if(depart>currentdate.getHours() ){
                         this.books4.push(data[i]);
                    }
                  }else if(currentdate.getDate()<parseInt(day)){
                    this.books4.push(data[i]);
                  }
              }
            }
          }
    });


    this.posts = this.flightsService.getPosts3();
    this.postsSub = this.flightsService.getPostUpdateListener3()
      .subscribe((posts: Book[]) => {
        this.posts = posts;
      });
    this.posts1 = this.flightsService.getPosts4();
    this.postsSub1 = this.flightsService.getPostUpdateListener4()
      .subscribe((posts: Book[]) => {
        this.posts1 = posts;
      });


    this.posts2 = this.flightsService.getPosts5();
    this.postsSub2 = this.flightsService.getPostUpdateListener5()
      .subscribe((posts: Book[]) => {
        this.posts2 = posts;
      });


    this.posts3 = this.flightsService.getPosts6();
    this.postsSub3 = this.flightsService.getPostUpdateListener6()
      .subscribe((posts: Book[]) => {
        this.posts3 = posts;
      });

       this.posts4 = this.flightsService.getPosts7();
    this.postsSub4 = this.flightsService.getPostUpdateListener7()
      .subscribe((posts: Book[]) => {
        this.posts4 = posts;
      });


    
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.postsSub1.unsubscribe();
    this.postsSub2.unsubscribe();
    this.postsSub3.unsubscribe();
    this.postsSub4.unsubscribe();
  }


		        
}
