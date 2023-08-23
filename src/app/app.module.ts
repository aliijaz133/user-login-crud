import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListCompComponent } from './list-comp/list-comp.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormVisibilityDirective } from './list-comp/form-visibility.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewComponentComponent } from './new-component/new-component.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ListCompComponent,
    UserLoginComponent,
    // FormVisibilityDirective,
    PageNotFoundComponent,
    NewComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
