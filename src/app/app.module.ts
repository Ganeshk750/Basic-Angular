import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './testing/todo-form/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoteComponent } from './testing/event-emmiters/vote/vote.component';
import { TodoComponent } from './testing/services/todo/todo.component';
import { TodoService } from './testing/services/todo/todo.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    VoteComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
