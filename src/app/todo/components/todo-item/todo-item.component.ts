import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/todo.interface';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() item?: Task;
}
