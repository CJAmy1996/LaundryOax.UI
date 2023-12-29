import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { RegistrationComponent } from './registration/registration.component';
import { WashComponent } from './wash/wash.component';
import { SheetsComponent } from './sheets/sheets.component';
import { LaundryComponent } from './laundry/laundry.component';
import { AddorderComponent } from './addorder/addorder.component';
import { FormsModule } from '@angular/forms';
import { OrdersComponent } from './orders/orders.component';
import { DdMmYYYYDatePipe } from './dd-mm-yyyy-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    MainPageComponent,
    LoginComponent,
    AdminpanelComponent,
    RegistrationComponent,
    WashComponent,
    SheetsComponent,
    LaundryComponent,
    AddorderComponent,
    OrdersComponent,
    DdMmYYYYDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
