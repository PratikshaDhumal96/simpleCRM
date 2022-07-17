import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRolesComponent } from './user-roles/user-roles.component';



@NgModule({
  declarations: [
    UserRolesComponent
  ],
  imports: [
    CommonModule
  ],
  // exports:[
  //   UserRolesComponent
  // ]
})
export class RolesModule { }
