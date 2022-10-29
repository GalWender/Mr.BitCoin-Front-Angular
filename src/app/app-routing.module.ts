import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'contact',
    component: ContactAppComponent,
  },
  {
    path: 'contact/edit',
    component: ContactEditComponent,
  },
  {
    path: 'contact/edit/:id',
    // pathMatch:'full',
    component: ContactEditComponent,
  },
  {
    path: 'contact/:id',
    component: ContactDetailComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginSignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
