import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { HeaderComponent } from "./header/header.component";
import { UsersComponent } from "./users/users.component";
import { CommonModule } from '@angular/common';
import { TasksComponent } from "./tasks/tasks.component";
import { User } from './users/users.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UsersComponent, CommonModule, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  target: any;

  showSelectedUser(event: User){
    this.target = event;
  }
}
