import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './components/customers/customers-list/customers-list.component';
import {MainPageComponent} from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path: 'main-page',
    component: MainPageComponent
},
{
  path: 'customers',
  component: CustomersListComponent
},

{ path: 'login',
  component: LoginComponent
},
{ path: 'admin',
  component:AdminpanelComponent},

  { path: 'registration',
  component:RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
