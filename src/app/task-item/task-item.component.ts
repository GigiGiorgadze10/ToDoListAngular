import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input()
  task!: Task;
  @Output() deleteTask = new EventEmitter<number>();

  delete() {
    this.deleteTask.emit(this.task.id);
  }
}
