import { Component, OnInit, Input } from '@angular/core';
import {ITodo} from '../interfaces/itodo';
import {TodoService} from '../services/todo.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  get todoList() {
    return this.todoService.getTodos(this.status);
  }
  @Input() status: any;
  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

}
