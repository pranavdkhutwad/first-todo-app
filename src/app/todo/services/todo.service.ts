import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../interfaces/todo.interface';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {}

  addTask(task: Task) {
    //   it returns observable.
    return this.http.post(
      'https://todo-app-24ba7-default-rtdb.firebaseio.com/todos.json',
      task
    );
  }

  getTask() {
    return this.http.get(
      'https://todo-app-24ba7-default-rtdb.firebaseio.com/todos.json'
    );
  }

  convertObjToArray(obj: any) {
    let tempArr = [];
    for (let key in obj) {
      tempArr.push({ id: key, ...obj[key] });
    }

    return tempArr;
  }

  filterByPriority(arr: any) {
    const highPriorities = arr.filter((task: any) => task.priority === 1);
    const mediumPriorities = arr.filter((task: any) => task.priority === 2);
    const lowPriorities = arr.filter((task: any) => task.priority === 3);

    return {
      highPriorities,
      mediumPriorities,
      lowPriorities,
    };
  }
}
