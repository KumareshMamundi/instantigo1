import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

// import { IEmployee } from './employee';
import { Book } from './Book';
import { User } from './User';
import { BookRound } from './BookRound';
import { Observable } from 'rxjs';
// import { BehaviorSubject } from 'rxjs';

// import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlightsService implements OnInit{
   public searching=[];
   public cls="economy";
   public postData;
   public postData1="";
	 public urlFlight = '/flight/';
   public urlGreenFlight='/greenAirflight/';
   public urlBlueFlight='/blueAirflight/';
   private search= [];
     private posts: Book[] = [];
  private postsUpdated = new Subject<Book[]>();
       private posts1: BookRound[] = [];
  private postsUpdated1 = new Subject<BookRound[]>();
        private posts2: BookRound[] = [];
  private postsUpdated2 = new Subject<BookRound[]>();
       private posts3: Book[] = [];
  private postsUpdated3 = new Subject<Book[]>();
        private posts4: Book[] = [];
  private postsUpdated4 = new Subject<Book[]>();
        private posts5: Book[] = [];
  private postsUpdated5 = new Subject<Book[]>();
      private posts6: Book[] = [];
  private postsUpdated6 = new Subject<Book[]>();
      private posts7: Book[] = [];
  private postsUpdated7 = new Subject<Book[]>();

  //  private messageSource = new BehaviorSubject('business');
  // currentMessage = this.messageSource.asObservable();

  constructor(public http: HttpClient,public router: Router) { }
  ngOnInit(){

  }
  // search(detail: string){
  //   this.classes=detail;
  // }
  //   searchingDetail(classes: string){

  //   this.postData1= classes;
  // }

  // changeMessage(message: string) {
  //   this.messageSource.next(message);
  //   console.log("chenge:"+this.messageSource._value);
  // }
  getPosts() {
    return [...this.posts];
  }
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }


   getFlights(from: string,to: string,date: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from,
      to: to, 
      date: date, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlFlight+this.posts[0].from+"/"+this.posts[0].to+"/"+this.posts[0].date+"/"+this.posts[0].classes);
  }
   getGreenAirFlights(from: string,to: string,date: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from,
      to: to, 
      date: date, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlGreenFlight+this.posts[0].from+"/"+this.posts[0].to+"/"+this.posts[0].date+"/"+this.posts[0].classes);
  }
   getBlueAirFlights(from: string,to: string,date: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from,
      to: to, 
      date: date, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlBlueFlight+this.posts[0].from+"/"+this.posts[0].to+"/"+this.posts[0].date+"/"+this.posts[0].classes);
  }


  
   // getFlights() {
   //  console.log(this.cls);
   //  console.log(this.posts.from);
   //  console.log(this.postsUpdated.from);
   //  return this
   //          .http
   //          // .get(`${this.url}`);
   //          .get(this.urlFlight+this.cls);
   //          // .get(`${this.url}/flight`)
            
   //      }
    // getGreenAirFlights() {
    //     return this.http.get(this.urlGreenFlight);
    //  }
    //  getBlueAirFlights() {
    //     return this.http.get(this.urlBlueFlight);
    //  }

//Roundtrip

        getPosts1() {
          return [...this.posts1];
        }
        getPostUpdateListener1() {
          return this.postsUpdated1.asObservable();
        }

      getPosts2() {
          return [...this.posts2];
        }
        getPostUpdateListener2() {
          return this.postsUpdated2.asObservable();
        }

    getFlightsForRoundtrip(from: string,to: string,date: Date,returnDate: Date,adult: number,children: number,infants: number,classes: string)
     {
    const post:BookRound = {
      from: from,
      to: to, 
      date: date,
      returnDate: returnDate, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts1.push(post);
    this.postsUpdated1.next([...this.posts1]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlFlight+this.posts1[0].from+"/"+this.posts1[0].to+"/"+this.posts1[0].date+"/"+this.posts1[0].classes);
  }


 getGreenAirFlightsForRoundtrip(from: string,to: string,date: Date,returnDate: Date,adult: number,children: number,infants: number,classes: string)
     {
    const post:BookRound = {
      from: from,
      to: to, 
      date: date,
      returnDate: returnDate, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts1.push(post);
    this.postsUpdated1.next([...this.posts1]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlGreenFlight+this.posts1[0].from+"/"+this.posts1[0].to+"/"+this.posts1[0].date+"/"+this.posts1[0].classes);
  }

 getBlueAirFlightsForRoundtrip(from: string,to: string,date: Date,returnDate: Date,adult: number,children: number,infants: number,classes: string)
     {
    const post:BookRound = {
      from: from,
      to: to, 
      date: date,
      returnDate: returnDate, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts1.push(post);
    this.postsUpdated1.next([...this.posts1]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlBlueFlight+this.posts1[0].from+"/"+this.posts1[0].to+"/"+this.posts1[0].date+"/"+this.posts1[0].classes);
  }


  getFlightsForRoundtripReturn(from: string,to: string,date: Date,returnDate: Date,adult: number,children: number,infants: number,classes: string)
     {
    const post:BookRound = {
      from: from,
      to: to, 
      date: date,
      returnDate: returnDate, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts2.push(post);
    this.postsUpdated2.next([...this.posts2]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlFlight+this.posts2[0].to+"/"+this.posts2[0].from+"/"+this.posts2[0].returnDate+"/"+this.posts2[0].classes);
  }


 getGreenAirFlightsForRoundtripReturn(from: string,to: string,date: Date,returnDate: Date,adult: number,children: number,infants: number,classes: string)
     {
    const post:BookRound = {
      from: from,
      to: to, 
      date: date,
      returnDate: returnDate, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts2.push(post);
    this.postsUpdated2.next([...this.posts2]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlGreenFlight+this.posts2[0].to+"/"+this.posts2[0].from+"/"+this.posts2[0].returnDate+"/"+this.posts2[0].classes);
  }

 getBlueAirFlightsForRoundtripReturn(from: string,to: string,date: Date,returnDate: Date,adult: number,children: number,infants: number,classes: string)
     {
    const post:BookRound = {
      from: from,
      to: to, 
      date: date,
      returnDate: returnDate, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts2.push(post);
    this.postsUpdated2.next([...this.posts2]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlBlueFlight+this.posts2[0].to+"/"+this.posts2[0].from+"/"+this.posts2[0].returnDate+"/"+this.posts2[0].classes);
  }


//Multicity
  getPosts3() {
    return [...this.posts3];
  }
  getPostUpdateListener3() {
    return this.postsUpdated3.asObservable();
  }
    getPosts4() {
    return [...this.posts4];
  }
  getPostUpdateListener4() {
    return this.postsUpdated3.asObservable();
  }
  getPosts5() {
    return [...this.posts5];
  }
  getPostUpdateListener5() {
    return this.postsUpdated5.asObservable();
  }
  getPosts6() {
    return [...this.posts6];
  }
  getPostUpdateListener6() {
    return this.postsUpdated6.asObservable();
  }
  getPosts7() {
    return [...this.posts7];
  }
  getPostUpdateListener7() {
    return this.postsUpdated6.asObservable();
  }


   getFlightsForMulticity(from: string,to: string,date: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from,
      to: to, 
      date: date, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts3.push(post);
    this.postsUpdated3.next([...this.posts3]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlFlight+this.posts3[0].from+"/"+this.posts3[0].to+"/"+this.posts3[0].date+"/"+this.posts3[0].classes);
  }
   getGreenAirFlightsForMulticity(from: string,to: string,date: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from,
      to: to, 
      date: date, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts3.push(post);
    this.postsUpdated3.next([...this.posts3]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlGreenFlight+this.posts3[0].from+"/"+this.posts3[0].to+"/"+this.posts3[0].date+"/"+this.posts3[0].classes);
  }
   getBlueAirFlightsForMulticity(from: string,to: string,date: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from,
      to: to, 
      date: date, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts3.push(post);
    this.postsUpdated3.next([...this.posts3]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlBlueFlight+this.posts3[0].from+"/"+this.posts3[0].to+"/"+this.posts3[0].date+"/"+this.posts3[0].classes);
  }

  //Addcity(1)

  getFlightsForMulticityAddcity1(from1: string,to1: string,date1: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from1,
      to: to1, 
      date: date1, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts4.push(post);
    this.postsUpdated4.next([...this.posts4]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlFlight+this.posts4[0].from+"/"+this.posts4[0].to+"/"+this.posts4[0].date+"/"+this.posts4[0].classes);
  }
   getGreenAirFlightsForMulticityAddcity1(from1: string,to1: string,date1: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from1,
      to: to1, 
      date: date1, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts4.push(post);
    this.postsUpdated4.next([...this.posts4]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlGreenFlight+this.posts4[0].from+"/"+this.posts4[0].to+"/"+this.posts4[0].date+"/"+this.posts4[0].classes);
  }
   getBlueAirFlightsForMulticityAddcity1(from1: string,to1: string,date1: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from1,
      to: to1, 
      date: date1, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts4.push(post);
    this.postsUpdated4.next([...this.posts4]);
    
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlBlueFlight+this.posts4[0].from+"/"+this.posts4[0].to+"/"+this.posts4[0].date+"/"+this.posts4[0].classes);
  }


 //Addcity(2)

  getFlightsForMulticityAddcity2(from2: string,to2: string,date2: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from2,
      to: to2, 
      date: date2, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts5.push(post);
    this.postsUpdated5.next([...this.posts5]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlFlight+this.posts5[0].from+"/"+this.posts5[0].to+"/"+this.posts5[0].date+"/"+this.posts5[0].classes);
  }
   getGreenAirFlightsForMulticityAddcity2(from2: string,to2: string,date2: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from2,
      to: to2, 
      date: date2, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts5.push(post);
    this.postsUpdated5.next([...this.posts5]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlGreenFlight+this.posts5[0].from+"/"+this.posts5[0].to+"/"+this.posts5[0].date+"/"+this.posts5[0].classes);
  }
   getBlueAirFlightsForMulticityAddcity2(from2: string,to2: string,date2: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from2,
      to: to2, 
      date: date2, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts5.push(post);
    this.postsUpdated5.next([...this.posts5]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlBlueFlight+this.posts5[0].from+"/"+this.posts5[0].to+"/"+this.posts5[0].date+"/"+this.posts5[0].classes);
  }


  //Addcity(3)

  getFlightsForMulticityAddcity3(from3: string,to3: string,date3: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from3,
      to: to3, 
      date: date3, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts6.push(post);
    this.postsUpdated6.next([...this.posts6]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlFlight+this.posts6[0].from+"/"+this.posts6[0].to+"/"+this.posts6[0].date+"/"+this.posts6[0].classes);
  }
   getGreenAirFlightsForMulticityAddcity3(from3: string,to3: string,date3: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from3,
      to: to3, 
      date: date3, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts6.push(post);
    this.postsUpdated6.next([...this.posts6]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlGreenFlight+this.posts6[0].from+"/"+this.posts6[0].to+"/"+this.posts6[0].date+"/"+this.posts6[0].classes);
  }
   getBlueAirFlightsForMulticityAddcity3(from3: string,to3: string,date3: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from3,
      to: to3, 
      date: date3, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts6.push(post);
    this.postsUpdated6.next([...this.posts6]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlBlueFlight+this.posts6[0].from+"/"+this.posts6[0].to+"/"+this.posts6[0].date+"/"+this.posts6[0].classes);
  }

  //Addcity(4)

  getFlightsForMulticityAddcity4(from4: string,to4: string,date4: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from4,
      to: to4, 
      date: date4, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts7.push(post);
    this.postsUpdated7.next([...this.posts7]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlFlight+this.posts7[0].from+"/"+this.posts7[0].to+"/"+this.posts7[0].date+"/"+this.posts7[0].classes);
  }
   getGreenAirFlightsForMulticityAddcity4(from4: string,to4: string,date4: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from4,
      to: to4, 
      date: date4, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts7.push(post);
    this.postsUpdated7.next([...this.posts7]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlGreenFlight+this.posts7[0].from+"/"+this.posts7[0].to+"/"+this.posts7[0].date+"/"+this.posts7[0].classes);
  }
   getBlueAirFlightsForMulticityAddcity4(from4: string,to4: string,date4: Date,adult: number,children: number,infants: number,classes: string)
   {
    const post:Book = {
      from: from4,
      to: to4, 
      date: date4, 
      adult: adult, 
      children: children,
      infants: infants, 
      classes: classes 
    };
    this.posts7.push(post);
    this.postsUpdated7.next([...this.posts7]);
    // this.postData=searchflight.classes;
    // console.log(searchflight.classes);
    return this.http.get(this.urlBlueFlight+this.posts7[0].from+"/"+this.posts7[0].to+"/"+this.posts7[0].date+"/"+this.posts7[0].classes);
  }


  //signUp

  addUser(firstName: string,lastName: string,email: string,password: string,mobileNo: number,address: string){
    const user: User = {
      firstName:firstName,
      lastName:lastName,
      email:email,
      password:password,
      mobileNo:mobileNo,
      address:address
    };
    return this.http
      .post<{message: string, userId: string }>("http://localhost:3001/home/signup", user);
      
  }

  //Login


  findUser(email: string, password: string){
    const user: User = {
      firstName:null,
      lastName:null,
      email:email,
      password:password,
      mobileNo:null,
      address:null
    };
     return this.http
      .post<{message: string, userId: string }>("http://localhost:3001/home/login", user);
  }

  //forgetPassword

  forgetPassword(email: string){
    console.log(email);
    const user: User = {
      firstName:null,
      lastName:null,
      email:email,
      password:null,
      mobileNo:null,
      address:null
    };
     return this.http
      .post<{message: string, userId: string }>("http://localhost:3001/home/forget", user);
  }


}