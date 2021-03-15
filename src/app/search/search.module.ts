import { CategoriesComponent } from './../categories/categories.component';
import { PromoComponent } from './../promo/promo.component';
import { AdvertisementComponent } from './../advertisement/advertisement.component';
import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SearchComponent, AdvertisementComponent, PromoComponent, CategoriesComponent],
  imports: [
    CommonModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
