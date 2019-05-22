import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormNewsComponent } from './components/form-news/form-news.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { SourceSelectComponent } from './components/source-select/source-select.component';
import { CreateComponent } from './containers/create/create.component';
import { EditComponent } from './containers/edit/edit.component';
import { NavComponent } from './containers/nav/nav.component';
import { NewsInfoComponent } from './containers/news-info/news-info.component';
import { NewsListComponent } from './containers/news-list/news-list.component';
import { FilterNewsPipe } from './pipes/filter-news.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EditComponent,
    CreateComponent,
    NewsListComponent,
    NewsItemComponent,
    SectionHeaderComponent,
    NavComponent,
    SourceSelectComponent,
    SearchFormComponent,
    NewsInfoComponent,
    FormNewsComponent,
    FilterNewsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
