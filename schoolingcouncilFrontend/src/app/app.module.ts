import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FlashMessagesModule} from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { UserserviceService } from './services/userservice.service';
import { ValidateserviceService } from './services/validateservice.service';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ActivationpageComponent } from './activationpage/activationpage.component';
import { ResendactivationpageComponent } from './resendactivationpage/resendactivationpage.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent,canActivate:[AuthGuard]},
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword/:token', component: ResetpasswordComponent },
  { path: 'activate/:token', component: ActivationpageComponent },
  { path: 'resendactivation', component: ResendactivationpageComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    ActivationpageComponent,
    ResendactivationpageComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [UserserviceService,ValidateserviceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
