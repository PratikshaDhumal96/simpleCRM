import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRolesComponent } from './roles/user-roles/user-roles.component';
import { ListUsersComponent } from './users/list-users/list-users.component';

const routes: Routes = [
  {path:'',component:ListUsersComponent},
  {path:'users',component:ListUsersComponent},
  {path:'roles',component:UserRolesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
