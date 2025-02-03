import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CompaniesComponent } from './components/companies/companies.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesComponent,
    AddUserComponent,
    ContactsComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
