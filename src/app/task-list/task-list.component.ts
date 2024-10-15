import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [TaskItemComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [];
  categories = ['All', 'Groceries', 'College', 'Payments']; 
  selectedCategory = 'All';

  addTask(taskName: string, category: string) {
    if (taskName) {
      this.tasks.push({
        name: taskName,
        completed: false,
        category: category,
      });
    }
  }

  addCategory(categoryName: string) {
    if (categoryName && !this.categories.includes(categoryName)) {
      this.categories.push(categoryName);
    }
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}