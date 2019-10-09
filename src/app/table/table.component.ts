import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 
  constructor() { }
   
   Students : Student [] = [
    {id: 1, firstname: 'Mary', lastname: 'Taylor', age: 24, image: "pic3"},
    {id: 2, firstname: 'Peter', lastname: 'Smith', age: 18, image:"pic2"},
    {id: 3, firstname: 'Lauren', lastname: 'Taylor', age: 31, image: "pic1"}
   ]

  ngOnInit() {
  }

}
