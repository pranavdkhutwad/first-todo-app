import { Component } from '@angular/core';
import { Task } from './interfaces/todo.interface';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  highPriorityList: Task[] = [];
  mediumPriorityList: Task[] = [];
  lowPriorityList: Task[] = [];

  receiveTask(task: Task) {
    switch (task.priority) {
      case 1: {
        this.highPriorityList = [...this.highPriorityList, { ...task }];
        break;
      }
      case 2: {
        this.mediumPriorityList = [...this.mediumPriorityList, { ...task }];
        break;
      }
      case 3: {
        this.lowPriorityList = [...this.lowPriorityList, { ...task }];
        break;
      }
      default: {
        console.log('Invalid case...');
      }
    }
  }
}
