import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import {dummyTasks} from '../dummy-tasks';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CommonModule, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input() target: any;
  selectedTasks: any;
  isAddingTask: boolean = false;
  
  constructor(
    private tasksService: TasksService
  ){}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.target.id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }
}
