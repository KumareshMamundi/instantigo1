import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatToolbarModule,
         MatMenuModule,
         MatInputModule,
         MatCardModule

         } from '@angular/material';






@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatChipsModule,
    MatSnackBarModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
