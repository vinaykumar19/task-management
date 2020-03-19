import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'login', component:LoginComponent, pathMatch:'full' },
      { path: '', redirectTo:'login',pathMatch:'full' },
      { path : 'sign-up', component : SignupComponent },
      { path: '*', component:LoginComponent },
      { path: '**', component:LoginComponent },
    

   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
