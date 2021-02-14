import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  add(todo): Observable<any> {
    return this.http.post<any>('...', todo).pipe(
      map(r => r)
    );
  }

  getTodos(): Observable<any[]> {
    return this.http.get<any[]>('...').pipe(
      map(r => r)
    );
  }

  delete(id): Observable<any> {
    return this.http.delete<any>('...').pipe(
      map(r => r)
    );
  }
}
