import { Component } from '@angular/core';
import { Task } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  task: Task = {
    name: '',
    description: '',
    priority: null,
  };

  addTask() {
    console.log('task ==>', this.task);
  }
}
