import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

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
import { LoggingService } from './logging.service';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { Maid2bhkComponent } from './maid2bhk/maid2bhk.component';
import { Maid3bhkComponent } from './maid3bhk/maid3bhk.component';
import { MaidcorporateComponent } from './maidcorporate/maidcorporate.component';
import { HousekeephomeformComponent } from './housekeephomeform/housekeephomeform.component';
import { HousekeepofficeformComponent } from './housekeepofficeform/housekeepofficeform.component';
import { HousekeepbulkformComponent } from './housekeepbulkform/housekeepbulkform.component';
import { Cook1dayformComponent } from './cook1dayform/cook1dayform.component';
import { CookweekdayformComponent } from './cookweekdayform/cookweekdayform.component';
import { CookmonthlyformComponent } from './cookmonthlyform/cookmonthlyform.component';
import { Bathroom1timeformComponent } from './bathroom1timeform/bathroom1timeform.component';
import { BathroomweeklyformComponent } from './bathroomweeklyform/bathroomweeklyform.component';
import { BathroomquickformComponent } from './bathroomquickform/bathroomquickform.component';
import { Elderly1dayformComponent } from './elderly1dayform/elderly1dayform.component';
import { ElderlyweekdayformComponent } from './elderlyweekdayform/elderlyweekdayform.component';
import { ElderlyfulltimeformComponent } from './elderlyfulltimeform/elderlyfulltimeform.component';
import { Babysitter1dayformComponent } from './babysitter1dayform/babysitter1dayform.component';
import { BabysittermonthlypartformComponent } from './babysittermonthlypartform/babysittermonthlypartform.component';
import { BabysittermonthlyfullformComponent } from './babysittermonthlyfullform/babysittermonthlyfullform.component';
import { Maid1dayformComponent } from './maid1dayform/maid1dayform.component';
import { Housekeep1dayformComponent } from './housekeep1dayform/housekeep1dayform.component';



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
    Maid2bhkComponent,
    Maid3bhkComponent,
    MaidcorporateComponent,
    HousekeephomeformComponent,
    HousekeepofficeformComponent,
    HousekeepbulkformComponent,
    Cook1dayformComponent,
    CookweekdayformComponent,
    CookmonthlyformComponent,
    Bathroom1timeformComponent,
    BathroomweeklyformComponent,
    BathroomquickformComponent,
    Elderly1dayformComponent,
    ElderlyweekdayformComponent,
    ElderlyfulltimeformComponent,
    Babysitter1dayformComponent,
    BabysittermonthlypartformComponent,
    BabysittermonthlyfullformComponent,
    Maid1dayformComponent,
    Housekeep1dayformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
