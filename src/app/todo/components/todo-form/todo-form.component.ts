import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent {
  // to create custom event
  @Output() taskEvent: EventEmitter<any> = new EventEmitter<any>();
  task: Task = {
    name: '',
    description: '',
    priority: null,
  };

  constructor(private todoService: TodoService) {}

  addTask() {
    // to raise custom event
    // this.taskEvent.emit(this.task);
    this.todoService.addTask(this.task).subscribe(() => {
      this.todoService.getTask().subscribe((data) => {
        const list = this.todoService.convertObjToArray(data);
        this.taskEvent.emit(list);
      });
    });
  }
}
