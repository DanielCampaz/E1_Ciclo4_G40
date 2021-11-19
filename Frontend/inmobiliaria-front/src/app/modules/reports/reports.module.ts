import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { SortByComponent } from './sort-by/sort-by.component';
import { PublishForFreeComponent } from './publish-for-free/publish-for-free.component';
import { OutstandingComponent } from './outstanding/outstanding.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AdvancedSearchComponent,
    SortByComponent,
    PublishForFreeComponent,
    OutstandingComponent,
    RecommendationsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
