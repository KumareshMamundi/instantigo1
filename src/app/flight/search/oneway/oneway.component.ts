import { Component, OnInit , OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlightsService } from '../../flights.service';
import { Book } from '../../Book';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Router } from '@angular/router'; 

export interface Class {
  value: string;
} 

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit,OnDestroy {

 
classes: Class[] = [
    {value: 'economy'},
    {value: 'premiumeconomy'},
    {value: 'business'}
  ];
  check="";
  public className="";
  public adult="";
  public children="";
  public infants="";
  details=[];
  books=[];
   posts: Book[] = [];
  private postsSub: Subscription;
   // message:string;
  // public massage="chennai";
  // @Output() searchDetails = new EventEmitter();
  constructor(public flightsService: FlightsService, public router: Router) { }


  ngOnInit() {
    // this.flightsService.currentMessage.subscribe(message => this.message = message)
  }

  // newMessage() {
  //   this.flightsService.changeMessage("Hello from Sibling")
  // }
  searchingDetails(form:NgForm){ 
    if (form.invalid) {
      return;
    }
    this.className=form.value.class;
    this.adult=form.value.adult;
    this.children=form.value.children;
    this.infants=form.value.infants;
    this.check=form.value.date;
    // const detail={
    //   from: form.value.from,
    //   to: form.value.to,
    //   date: form.value.date,
    //   adult: form.value.adult,
    //   children: form.value.children,
    //   infants: form.value.infants,
    //   class: form.value.class
    // }   
    // this.details.push(form.value.from,form.value.to,form.value.date,form.value.adult,form.value.children,form.value.infants,form.value.class);    
    // this.details.push(detail);    

    // // this.check.push(form.value.from);
    // // // const search = {
    // // //   from:form.value.from,
    // // //   to:form.value.to
    // // // };
    // // this.searchDetails.emit(details);
      
    // set data(this.details[6]: string) { 
    // this.flightsService.postData1="business";

        this.flightsService.getFlights(
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
        this.flightsService.getGreenAirFlights(
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
        this.flightsService.getBlueAirFlights(
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
            if(parseInt(this.check.charAt(5))===0){
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

       
    //   this
    //   .flightsService
    //   .getFlights()
    //     .subscribe((data) => {
    //       // this.books = data;
    //     this.books.push(data);
    // });

    //    this
    //   .flightsService
    //   .getGreenAirFlights()
    //    .subscribe((data) => {
    //     this.books.push(data);
    //   });
    //    this
    //   .flightsService
    //   .getBlueAirFlights()
    //    .subscribe((data) => {
    //     this.books.push(data);
    //     // this.className=data[0].class[0].classType;
    //   }); 

   this.posts = this.flightsService.getPosts();
    this.postsSub = this.flightsService.getPostUpdateListener()
      .subscribe((posts: Book[]) => {
        this.posts = posts;
      });

      // function predicateBy(prop){
      //    return function(a,b){
      //       if( a[prop] > b[prop]){
      //           return 1;
      //       }else if( a[prop] < b[prop] ){
      //           return -1;
      //       }
      //       return 0;
      //    }
      // }
      // this.books.sort( predicateBy("price") );
        form.resetForm();

    
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

  
}
