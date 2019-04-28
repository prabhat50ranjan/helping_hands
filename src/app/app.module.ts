import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { PricingComponent } from './pricing/pricing.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { MaidsComponent } from './maids/maids.component';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';
import { CookComponent } from './cook/cook.component';
import { BathroomCleanerComponent } from './bathroom-cleaner/bathroom-cleaner.component';
import { ElderlyCareComponent } from './elderly-care/elderly-care.component';
import { BabySitterComponent } from './baby-sitter/baby-sitter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { LoggingService } from './logging.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    PricingComponent,
    AboutComponent,
    ProductsComponent,
    FaqComponent,
    ContactComponent,
    MaidsComponent,
    HousekeepingComponent,
    CookComponent,
    BathroomCleanerComponent,
    ElderlyCareComponent,
    BabySitterComponent,
    BookingFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
