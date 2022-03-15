import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { NewsSearchComponent } from './news-search/news-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../shared/filter.pipe';
import { AuthGuard } from '../guards/auth.guard';


@NgModule({
  declarations: [
    NewsListComponent,
    NewsDetailsComponent,
    NewsSearchComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    ReactiveFormsModule
  ]
})
export class NewsModule { }
