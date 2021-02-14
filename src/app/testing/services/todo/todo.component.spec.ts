import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;
  let service: TodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoComponent ],
      providers: [TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    service = new TodoService(null);
    component = new TodoComponent(service);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should set todo property with the items returned from the service', () =>{
    let todos = [1,2,3];
    spyOn(service, 'getTodos').and.callFake(() =>{
      return Observable.arguments([todos])
    });
    component.ngOnInit();
    expect(component.todos.length).toBeGreaterThan(0);
  })

});
