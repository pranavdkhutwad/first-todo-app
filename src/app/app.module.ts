import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoFormComponent } from './todo/components/todo-form/todo-form.component';
import { TodoListComponent } from './todo/components/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/components/todo-item/todo-item.component';

@NgModule({
  declarations: [AppComponent, TodoComponent, TodoFormComponent, TodoListComponent, TodoItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
