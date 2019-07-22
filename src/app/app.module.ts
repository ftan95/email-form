import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { MsgComponent } from './msg/msg.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSelectComponent } from './user-select/user-select.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home page!'
    }
  },
  {
    path: 'login',
    data: {
      title: 'login page'
    },
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      title: 'Sign up page'
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    MsgComponent,
    UserListComponent,
    UserSelectComponent,
    UserComponent,
    UserDetailComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    RouterModule.forRoot(routes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
