import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSelectComponent } from './user-select/user-select.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
    {path: 'users', component: UserListComponent, children: [
        {path: '', component: UserSelectComponent},
        // : means you declare it as a parameter that can be called elsewhere
        {path: ':id', component: UserDetailComponent},
        {path: ':id/edit', component: UserEditComponent}
    ]},
    {path: '', redirectTo: 'users', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}