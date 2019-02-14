import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './containers/news-list/news-list.component';
import { NewsInfoComponent } from './containers/news-info/news-info.component';
import { EditComponent } from './containers/edit/edit.component';

const routes: Routes = [
  { path: 'create', component: EditComponent, data: { isEdit: false }  },
  { path: ':sourceID', component: NewsListComponent },
  { path: ':sourceID/:newsID', component: NewsInfoComponent },
  { path: ':sourceID/:newsID/edit', component: EditComponent, data: { isEdit: true } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
