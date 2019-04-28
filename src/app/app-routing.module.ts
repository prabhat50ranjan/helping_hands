import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
import { BookingFormComponent } from './booking-form/booking-form.component';

const routes: Routes = [
  {path:'',redirectTo: '/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'pricing',component:PricingComponent},
  {path: 'about', component:AboutComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'maids', component:MaidsComponent},
  {path: 'housekeeping', component:HousekeepingComponent},
  {path: 'cook', component:CookComponent},
  {path: 'bathroom-cleaner', component:BathroomCleanerComponent},
  {path: 'elderly-care', component:ElderlyCareComponent},
  {path: 'baby-sitter', component:BabySitterComponent},
  {path: 'booking-form', component:BookingFormComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
