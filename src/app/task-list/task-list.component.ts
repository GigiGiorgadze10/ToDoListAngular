import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [ TaskItemComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  // Array of tasks
  tasks: Task[] = [
    { name: 'Get a new helmet', category: 'Uncategorized', completed: false },
    { name: 'Purchase Milk & Corn Flakes', category: 'Groceries', completed: false },
    { name: 'Pay mortgage', category: 'Payments', completed: false },
    { name: 'Complete Assignments', category: 'College', completed: false },
    { name: 'Replace laptop`s screen', category: 'Uncategorized', completed: false }
  ];

  deleteTask(taskToDelete: Task) {
    this.tasks = this.tasks.filter(task => task !== taskToDelete);
  }

  addTask(taskName: string, category: string) {
    if (taskName) {
      this.tasks.push({ name: taskName, category: category, completed: false });
    }
  }
}