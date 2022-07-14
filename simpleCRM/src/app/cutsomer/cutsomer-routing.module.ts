import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CutsomerComponent } from './cutsomer.component';

const routes: Routes = [{ path: '', component: CutsomerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CutsomerRoutingModule { }
