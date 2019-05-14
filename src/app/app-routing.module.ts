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
import { Maid2bhkComponent } from './maid2bhk/maid2bhk.component';
import { Maid3bhkComponent } from './maid3bhk/maid3bhk.component';
import { MaidcorporateComponent } from './maidcorporate/maidcorporate.component';
import { HousekeephomeformComponent } from './housekeephomeform/housekeephomeform.component';
import { HousekeepofficeformComponent } from './housekeepofficeform/housekeepofficeform.component';
import { HousekeepbulkformComponent } from './housekeepbulkform/housekeepbulkform.component';
import { CookweekdayformComponent } from './cookweekdayform/cookweekdayform.component';
import { Cook1dayformComponent } from './cook1dayform/cook1dayform.component';
import { CookmonthlyformComponent } from './cookmonthlyform/cookmonthlyform.component';
import { Bathroom1timeformComponent } from './bathroom1timeform/bathroom1timeform.component';
import { BathroomweeklyformComponent } from './bathroomweeklyform/bathroomweeklyform.component';
import { BathroomquickformComponent } from './bathroomquickform/bathroomquickform.component';
import { Elderly1dayformComponent } from './elderly1dayform/elderly1dayform.component';
import { ElderlyfulltimeformComponent } from './elderlyfulltimeform/elderlyfulltimeform.component';
import { ElderlyweekdayformComponent } from './elderlyweekdayform/elderlyweekdayform.component';
import { Babysitter1dayformComponent } from './babysitter1dayform/babysitter1dayform.component';
import { BabysittermonthlypartformComponent } from './babysittermonthlypartform/babysittermonthlypartform.component';
import { BabysittermonthlyfullformComponent } from './babysittermonthlyfullform/babysittermonthlyfullform.component';
import { Maid1dayformComponent } from './maid1dayform/maid1dayform.component';
import { Housekeep1dayformComponent } from './housekeep1dayform/housekeep1dayform.component';

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
  {path: 'maid1day-form', component:Maid1dayformComponent},
  {path: 'maid2bhk-form', component:Maid2bhkComponent},
  {path: 'maid3bhk-form', component:Maid3bhkComponent},
  {path: 'maidcorporate-form', component:MaidcorporateComponent},
  {path: 'housekeep1day-form', component:Housekeep1dayformComponent},
  {path: 'housekeephomeform', component:HousekeephomeformComponent},
  {path: 'housekeepofficeform', component:HousekeepofficeformComponent},
  {path: 'housekeepbulkform', component:HousekeepbulkformComponent},
  {path: 'cook1dayform', component:Cook1dayformComponent},
  {path: 'cookweekdayform', component:CookweekdayformComponent},
  {path: 'cookmonthlyform', component:CookmonthlyformComponent},
  {path: 'bathroom1timeform', component:Bathroom1timeformComponent},
  {path: 'bathroomweeklyform', component:BathroomweeklyformComponent},
  {path: 'bathroomquickform', component:BathroomquickformComponent},
  {path: 'elderly1dayform', component:Elderly1dayformComponent},
  {path: 'elderlyfulltimeform', component:ElderlyfulltimeformComponent},
  {path: 'elderlyweekdayform', component:ElderlyweekdayformComponent},
  {path: 'babysitter1dayform', component:Babysitter1dayformComponent},
  {path: 'babysittermonthlypartform',component:BabysittermonthlypartformComponent},
  {path: 'babysittermonthlypartform', component:BabysittermonthlyfullformComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
