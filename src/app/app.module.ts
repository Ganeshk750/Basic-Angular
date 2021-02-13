import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoFormComponent } from './testing/todo-form/todo-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VoteComponent } from './testing/event-emmiters/vote/vote.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    VoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
