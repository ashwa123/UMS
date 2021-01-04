import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './routing/app-routing.module';
import { MaterialModule } from './shared/material/material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './features/Login/login.component';
import { UserDetailComponent } from './features/User/user-detail/user-detail.component';
import { EditUserComponent } from './features/User/edit-user/edit-user.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderInterceptor } from './shared/interceptor/header.interceptor';
import { UserViewComponent } from './features/User/user-view/user-view.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDetailComponent,
    EditUserComponent,
    NavbarComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [ 
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
