import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './containers/create/create.component';
import { EditComponent } from './containers/edit/edit.component';
import { NewsInfoComponent } from './containers/news-info/news-info.component';
import { NewsListComponent } from './containers/news-list/news-list.component';
import { NewsCheckGuard } from './guards/news-check.guard';
import { SourceCheckGuard } from './guards/source-check.guard';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: '', pathMatch: 'full', redirectTo: 'my_news' },
  {
    path: ':sourceID',
    canActivate: [SourceCheckGuard],
    children: [
      {
        path: '',
        component: NewsListComponent,
      },
      {
        path: ':newsID',
        canActivate: [NewsCheckGuard],
        children: [
          {
            path: '',
            component: NewsInfoComponent,
          },
          {
            path: 'edit',
            component: EditComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
