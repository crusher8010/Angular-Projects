import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './users.model';
import { CardComponent } from "../shared/card/card.component";
 
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  @Input({required: true}) user!: User;
  @Input() selected!: boolean;
  @Output() showTask: EventEmitter<any> = new EventEmitter<any>()


  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectedUser(){
    this.showTask.emit(this.user);
  }
}
