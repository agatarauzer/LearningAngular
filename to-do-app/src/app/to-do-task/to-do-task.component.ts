import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css']
})
export class ToDoTaskComponent implements OnInit {

  @Input()
  tasksList = [];

  @Output()
  emitDone = new EventEmitter<string>();

  @Output()
  emitRemove = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  remove(task: string) {
    this.emitRemove.emit(task);

  }

  done(task: string) {
    this.emitDone.emit(task);

  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
