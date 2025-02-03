import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './components/companies/companies.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';
import { AddUserComponent } from './components/add-user/add-user.component';

const routes: Routes = [
  { path: '', component: CompaniesComponent },
  { path: 'companies', component: CompaniesComponent },
  { path: 'contacts/:companyId', component: ContactsComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'add-user', component: AddUserComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
