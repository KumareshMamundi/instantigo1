import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './flight/auth/login/login.component';
import { SignupComponent } from './flight/auth/signup/signup.component';
import { AuthComponent } from './flight/auth/auth.component';
import { FlightComponent } from './flight/flight.component';
import { HotelComponent } from './hotel/hotel.component';
import { CabComponent } from './cab/cab.component';
import { SearchComponent } from './flight/search/search.component';
import { OnewayComponent } from './flight/search/oneway/oneway.component';
import { RoundtripComponent } from './flight/search/roundtrip/roundtrip.component';
import { MulticityComponent } from './flight/search/multicity/multicity.component';
import { BookingComponent } from './flight/booking/booking.component';
import { TestComponent } from './flight/test/test.component';
import { ForgetComponent } from './flight/auth/forget/forget.component';



const routes: Routes = [
	{ path: '', component: OnewayComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignupComponent },
	{ path: 'flight', component: OnewayComponent },
	{ path: 'hotel', component: HotelComponent },
	{ path: 'cab', component: CabComponent },
	{ path: 'flight/oneway', component: OnewayComponent },
	{ path: 'flight/roundtrip', component: RoundtripComponent },
	{ path: 'flight/multicity', component: MulticityComponent },
	{ path: 'flight/flightDetails/booking', component: BookingComponent },
	{ path: 'test', component: TestComponent },
	{ path: 'forget', component: ForgetComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [
		LoginComponent,
		SignupComponent,
		AuthComponent,
		FlightComponent,
	    HotelComponent,
	    CabComponent,
	    SearchComponent,
	    OnewayComponent,
	    RoundtripComponent,
	    MulticityComponent,
	    BookingComponent,
	    TestComponent,
	    ForgetComponent
	]
