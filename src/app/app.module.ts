import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/MainComponents/navbar/navbar.component';
import { FooterComponent } from './Components//MainComponents/footer/footer.component';
import { HomeComponent } from './Components//Pages/home/home.component';
import { DetailComponent } from './Components//Pages/detail/detail.component';
import { BrandComponent } from './Components/Pages/brand/brand.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    DetailComponent,
    BrandComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
