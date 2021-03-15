import { LoginComponent } from './../auth/login/login.component';
import { CreateAdComponent } from './../create-ad/create-ad.component';
import { WatchListComponent } from './../watch-list/watch-list.component';
import { MyAdsComponent } from './../my-ads/my-ads.component';
import { ProfileComponent } from './../profile/profile.component';
import { AuthComponent } from './../auth/auth.component';
import { SearchModule } from './../search/search.module';
import { AboutModule } from './../about/about.module';
import { HomeRoutingModule } from './home-routing.module';
import { ContactModule } from './../contact/contact.module';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PackageComponent } from '../create-ad/package/package.component';
import { GeneralComponent } from '../create-ad/general/general.component';
import { BillingComponent } from '../create-ad/billing/billing.component';



@NgModule({
  declarations: [
    HomeComponent,
    AuthComponent,
    ProfileComponent,
    MyAdsComponent,
    CreateAdComponent,
    PackageComponent,
    GeneralComponent,
    BillingComponent,
    LoginComponent,
    WatchListComponent],
  imports: [
    CommonModule,
    ContactModule,
    FormsModule,
    ReactiveFormsModule,
    SearchModule,
    AboutModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
