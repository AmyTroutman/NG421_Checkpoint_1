import { Component, OnInit, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
 todos: ITodo[];

  constructor(private todoService: TodoService, private cdRef: ChangeDetectorRef) { }
//   ngAfterViewChecked() {
//     this.cdRef.detectChanges();
//  }
  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      event.item.data(t => t.status = event.container);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
}
