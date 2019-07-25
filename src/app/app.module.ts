import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ButtonColorDirective } from './email-page/button-color.directive';
import { SearchIconDirective } from './email-page/search-icon.directive';
import { BadgeDirective } from './email-page/badge.directive';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { MsgComponent } from './msg/msg.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserSelectComponent } from './user-select/user-select.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './services/email.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { EmailPageComponent } from './email-page/email-page.component';
import { EmailComponent } from './email-page/email/email.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home page!'
    },
    canActivate: [AuthGuardService]
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
    pathMatch: 'full',
  },
  {path: 'users', component: UserListComponent, children: [
    {path: '', component: UserSelectComponent},
    // : means you declare it as a parameter that can be called elsewhere
    {path: ':id', component: UserDetailComponent},
    {path: ':id/edit', component: UserEditComponent}
  ]},
  {path: 'email-page', component: EmailPageComponent, data:{title: 'Inbox'}},
  {path: 'msg', component: MsgComponent, data:{title: 'New Message'}}
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
    UserEditComponent,
    EmailPageComponent,
    EmailComponent,
    ButtonColorDirective,
    SearchIconDirective,
    BadgeDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    ReactiveFormsModule,
    FormsModule,
    LoginModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  // Called and Import the services here
  providers: [
    EmailService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
