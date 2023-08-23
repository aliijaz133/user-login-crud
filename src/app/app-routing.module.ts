import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCompComponent } from './list-comp/list-comp.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewComponentComponent } from './new-component/new-component.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user-login' },

  {
    path: 'user-login',
    component: UserLoginComponent,
  },

  {
    path: 'product-list',
    component: ListCompComponent,
  },
  {
    path: 'new-component',
    component: NewComponentComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
