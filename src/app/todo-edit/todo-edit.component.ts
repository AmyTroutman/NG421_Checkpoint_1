import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  modalInstance: NgbModalRef;
  todo: ITodo;
  newDescription: string;
  constructor() { }

  ngOnInit() {
  }
  edit() {
    this.modalInstance.close();
  }
  close() {
    this.modalInstance.close();
  }
}
