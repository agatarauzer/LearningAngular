import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-to-do-task',
  templateUrl: './to-do-task.component.html',
  styleUrls: ['./to-do-task.component.css']
})
export class ToDoTaskComponent implements OnInit {

  tasksList: Array<Task> = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks.filter(t => t.isDone === false);
    });
  }

  ngOnInit() {
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }

  done(task: Task) {
    this.tasksService.done(task);
  }
}
