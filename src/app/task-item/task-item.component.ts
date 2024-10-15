import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../models/task.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: any; // Define task input
  @Output() deleteTask = new EventEmitter<void>();

  onDelete() {
    this.deleteTask.emit();
  }
}