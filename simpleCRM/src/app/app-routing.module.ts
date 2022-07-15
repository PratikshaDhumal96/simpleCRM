import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { SuperAdminGuard } from './super-admin.guard';

const routes: Routes = [
  { path:'clients', component:ClientsComponent,canActivate:[AuthGuard]},
  {path:'admin',
   canActivate:[SuperAdminGuard],
   children:[
            {path:'',component:AdminComponent},
            {path:'',
            canActivateChild:[AdminAccessGuard],
            children:[
              {path:'manage',component:AdminManageComponent},
              {path:'edit',component:AdminEditComponent},
              {path:'delete',component:AdminDeleteComponent}
            ]
            },
            ]
},
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'customer', loadChildren: () => import('./cutsomer/cutsomer.module').then(m => m.CutsomerModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
