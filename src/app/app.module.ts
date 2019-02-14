import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditComponent } from './containers/edit/edit.component';
import { NewsListComponent } from './containers/news-list/news-list.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { NavComponent } from './containers/nav/nav.component';
import { SourceSelectComponent } from './components/source-select/source-select.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { NewsInfoComponent } from './containers/news-info/news-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EditComponent,
    NewsListComponent,
    NewsItemComponent,
    UserLoginComponent,
    SectionHeaderComponent,
    NavComponent,
    SourceSelectComponent,
    SearchFormComponent,
    NewsInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }