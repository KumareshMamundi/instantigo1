
import { Component, OnInit , OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlightsService } from '../../flights.service';
import { BookRound } from '../../BookRound';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Router } from '@angular/router'; 

export interface Class {
  value: string;
} 


@Component({
  selector: 'app-roundtrip',
  templateUrl: './roundtrip.component.html',
  styleUrls: ['./roundtrip.component.css']
})
export class RoundtripComponent implements OnInit {
  
classes: Class[] = [
    {value: 'economy'},
    {value: 'premiumeconomy'},
    {value: 'business'}
  ];
  public className="";
  check="";
  checkReturn="";
  public adult="";
  public children="";
  public infants="";
  public details=[];
  books=[];
    books1=[];
   posts: BookRound[] = [];
  private postsSub: Subscription;
    posts1: BookRound[] = [];
  private postsSub1: Subscription;
 
  constructor(public flightsService: FlightsService, public router: Router) { }


  ngOnInit() {
    
  }

  
  searchingDetails(form:NgForm){ 
    if (form.invalid) {
      return;
    }
   this.className=form.value.class;
   this.adult=form.value.adult;
    this.children=form.value.children;
    this.infants=form.value.infants;
   this.check=form.value.date;
   this.checkReturn=form.value.returnDate;

        this.flightsService.getFlightsForRoundtrip(
            form.value.from,
            form.value.to,
            form.value.date,
            form.value.returnDate,
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

   this.flightsService.getGreenAirFlightsForRoundtrip (
            form.value.from,
            form.value.to,
            form.value.date,
            form.value.returnDate,
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

   this.flightsService.getBlueAirFlightsForRoundtrip(
            form.value.from,
            form.value.to,
            form.value.date,
            form.value.returnDate,
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
       
    this.flightsService.getFlightsForRoundtripReturn(
            form.value.from,
            form.value.to,
            form.value.date,
            form.value.returnDate,
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
            var a=this.checkReturn.charAt(0).concat(this.checkReturn.charAt(1));
            var b=this.checkReturn.charAt(2).concat(this.checkReturn.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkReturn.charAt(6); 
            }else{
              var month=this.checkReturn.charAt(5).concat(this.checkReturn.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkReturn.charAt(9);
            }else{
              var day=this.checkReturn.charAt(8).concat(this.checkReturn.charAt(9));
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

   this.flightsService.getGreenAirFlightsForRoundtripReturn (
            form.value.from,
            form.value.to,
            form.value.date,
            form.value.returnDate,
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
            var a=this.checkReturn.charAt(0).concat(this.checkReturn.charAt(1));
            var b=this.checkReturn.charAt(2).concat(this.checkReturn.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkReturn.charAt(6); 
            }else{
              var month=this.checkReturn.charAt(5).concat(this.checkReturn.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkReturn.charAt(9);
            }else{
              var day=this.checkReturn.charAt(8).concat(this.checkReturn.charAt(9));
            }
                  
            
            var year=a.concat(b);
            // console.log(this.checkReturn);
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

   this.flightsService.getBlueAirFlightsForRoundtripReturn(
            form.value.from,
            form.value.to,
            form.value.date,
            form.value.returnDate,
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
            var a=this.checkReturn.charAt(0).concat(this.checkReturn.charAt(1));
            var b=this.checkReturn.charAt(2).concat(this.checkReturn.charAt(3));
            if(parseInt(this.check.charAt(5))===0){
              var month=this.checkReturn.charAt(6); 
            }else{
              var month=this.checkReturn.charAt(5).concat(this.checkReturn.charAt(6)); 
            }
            if(parseInt(this.check.charAt(8))===0){
              var day=this.checkReturn.charAt(9);
            }else{
              var day=this.checkReturn.charAt(8).concat(this.checkReturn.charAt(9));
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
   

   this.posts = this.flightsService.getPosts1();
    this.postsSub = this.flightsService.getPostUpdateListener1()
      .subscribe((posts: BookRound[]) => {
        this.posts = posts;
      });

       this.posts1 = this.flightsService.getPosts2();
    this.postsSub1 = this.flightsService.getPostUpdateListener2()
      .subscribe((posts: BookRound[]) => {
        this.posts1 = posts;
      });

    
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
    this.postsSub1.unsubscribe();
  }

  
}
