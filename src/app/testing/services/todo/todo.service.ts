import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  add(todo) {
    return this.http.post('...', todo).pipe(
      map(r => r)
    );
  }

  getTodos() {
    return this.http.get('...').pipe(
      map(r => r)
    );
  }

  delete(id) {
    return this.http.delete('...').pipe(
      map(r => r)
    );
  }
}
