import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  // to create custom event
  @Output() taskEvent: EventEmitter<Task> = new EventEmitter<Task>();
  task: Task = {
    name: '',
    description: '',
    priority: null,
  };

  addTask() {
    // to raise custom event
    this.taskEvent.emit(this.task);
  }
}
