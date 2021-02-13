import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  form: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      name: ['', Validators.required],
      email: ['']
    })
  }

}
