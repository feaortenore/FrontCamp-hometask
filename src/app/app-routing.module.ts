import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './containers/news-list/news-list.component';
import { NewsInfoComponent } from './containers/news-info/news-info.component';
import { EditComponent } from './containers/edit/edit.component';
import { CreateComponent } from './containers/create/create.component';
import { SourceCheckGuard } from './guards/source-check.guard';
import { NewsCheckGuard } from './guards/news-check.guard';

const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: '', pathMatch: 'full', redirectTo: 'my_news' },
  {
    path: ':sourceID',
    canActivate: [SourceCheckGuard],
    children: [
      {
        path: '',
        component: NewsListComponent
      },
      {
        path: ':newsID',
        canActivate: [NewsCheckGuard],
        children: [
          {
            path: '',
            component: NewsInfoComponent
          },
          {
            path: 'edit',
            component: EditComponent
          },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
