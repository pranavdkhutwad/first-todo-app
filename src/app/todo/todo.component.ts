import { Component } from '@angular/core';
import { Task } from './interfaces/todo.interface';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  highPriorityList: Task[] = [
    {
      name: 'Angular',
      description: 'Angular Description',
      priority: 1,
    },
    {
      name: 'React',
      description: 'React Description',
      priority: 1,
    },
  ];
  mediumPriorityList: Task[] = [
    {
      name: 'CSS',
      description: 'CSS Description',
      priority: 2,
    },
  ];
  lowPriorityList: Task[] = [
    {
      name: 'HTML',
      description: 'HTML Description',
      priority: 3,
    },
  ];
}
