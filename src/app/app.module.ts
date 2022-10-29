import { JwtService } from './services/jwt.service';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { HttpClientModule } from '@angular/common/http';
import { TransactionListComponent } from './cmps/transaction-list/transaction-list.component';
import { TransactionPreviewComponent } from './cmps/transaction-preview/transaction-preview.component';
import { FormsModule } from '@angular/forms';
import { LineChartComponent } from './cmps/line-chart/line-chart.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppHeaderComponent,
    ContactAppComponent,
    LoginSignupComponent,
    DashboardComponent,
    ContactEditComponent,
    ContactDetailComponent,
    ContactListComponent,
    ContactPreviewComponent,
    TransactionListComponent,
    TransactionPreviewComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
  ],
  providers: [ApiService,JwtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
