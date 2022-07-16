import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchComponent } from './search/search.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<SearchComponent> {

  canDeactivate(component: SearchComponent) {

    if(component.isDirty){
      console.log(component.isDirty)
      return window.confirm('You have some unsaved changes,Are you sure to leave.')
    }
    console.log(component.isDirty)
    return true;
  }
  
}
