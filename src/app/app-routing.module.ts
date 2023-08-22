import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCompComponent } from './list-comp/list-comp.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
