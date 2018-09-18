import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
// import { Book } from '../Book';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
	
// public employees=[];
// books: Book[];
books=[];
   constructor(private _flightsService:FlightsService) {  }
check="hi";
  ngOnInit() {
  	// this._flightsService.getEmployees()
  	// 	.subscribe(data=>this.employees=data);
  	 //    this
    //   ._flightsService
    //   .getBooks()
    //   // .subscribe((data: Book[]) => {
    //   	.subscribe((data) => {
    //     this.books = data;
    // });
  }

}
