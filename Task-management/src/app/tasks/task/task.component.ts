import { Component, Input } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

import { TasksService } from '../tasks.service';

// interface Task {
//   id: string,
//   userId: string,
//   title: string,
//   summary: string,
//   dueDate: string
// }

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;

  constructor(
    private tasksService: TasksService
  ){}

  delete(id: string){
    this.tasksService.removeTask(id);
    // this.onDelete.emit(id);
  }
}
