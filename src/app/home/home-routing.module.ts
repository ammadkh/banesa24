import { AuthGuard } from './../guards/auth.guard';
import { RegisterComponent } from './../auth/register/register.component';
import { LoginComponent } from './../auth/login/login.component';
import { BillingComponent } from './../create-ad/billing/billing.component';
import { GeneralComponent } from './../create-ad/general/general.component';
import { PackageComponent } from './../create-ad/package/package.component';
import { CreateAdComponent } from './../create-ad/create-ad.component';
import { WatchListComponent } from './../watch-list/watch-list.component';
import { MyAdsComponent } from './../my-ads/my-ads.component';
import { ProfileComponent } from './../profile/profile.component';
import { AuthComponent } from './../auth/auth.component';
import { SearchComponent } from './../search/search.component';
import { ContactComponent } from './../contact/contact.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
      {path: 'contact', component: ContactComponent},
      {path: 'about', component: AboutComponent},
      {path: 'search', component: SearchComponent},
      {path: 'search/:searchMode', component: SearchComponent},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
      {path: 'myads', component: MyAdsComponent, canActivate: [AuthGuard]},
      {path: 'watch-list', component: WatchListComponent, canActivate: [AuthGuard]},
      {path: 'create-ad', component: CreateAdComponent, canActivate: [AuthGuard], children: [
        {path: '', component: GeneralComponent},
        {path: 'package', component: PackageComponent, canActivate: [AuthGuard]},
        {path: 'billing', component: BillingComponent, canActivate: [AuthGuard]},
      ]},
      {path: 'authentication', component: AuthComponent, children: [
        { path: '', component: LoginComponent},
        { path: 'register', component: RegisterComponent},
      ]},
      {path: '', redirectTo: '/search', pathMatch: 'full'},
      {path: '**', component: SearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
