import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  // check if form is having dirty fields
  isDirty:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
