import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FilterpageComponent } from './filterpage/filterpage.component';
import { FooterpageComponent } from './footerpage/footerpage.component';
import { SignupComponent } from './signup/signup.component';
import { CountrypageComponent } from './countrypage/countrypage.component';
import {NgxPageScrollModule} from 'ngx-page-scroll';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FilterpageComponent,
    FooterpageComponent,
    SignupComponent,
    CountrypageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
