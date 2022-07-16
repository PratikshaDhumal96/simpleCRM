import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAccessGuard } from './admin-access.guard';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { PreferencesCheckGuard } from './preferences-check.guard';
import { SearchComponent } from './search/search.component';
import { SuperAdminGuard } from './super-admin.guard';
import { UnsavedGuard } from './unsaved.guard';

const routes: Routes = [
  { path:'clients', component:ClientsComponent,canActivate:[AuthGuard]},
  {path:'search',component:SearchComponent,canDeactivate:[UnsavedGuard]},
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
  { path: 'customer', loadChildren: () => import('./cutsomer/cutsomer.module').then(m => m.CutsomerModule) },
  { path: 'preferences',
  canLoad:[PreferencesCheckGuard],
  loadChildren: () => import('./preferences/preferences.module').then(m => m.PreferencesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
