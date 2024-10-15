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
  tasks: Task[] = []; // Define tasks as an array of Task objects
  categories = ['All', 'Groceries', 'College', 'Payments']; // Example categories
  selectedCategory = 'All'; // Default selected category

  // Add task function
  addTask(taskName: string, category: string) {
    if (taskName) {
      this.tasks.push({
        name: taskName,
        completed: false,
        category: category,
      });
    }
  }

  // Add category function
  addCategory(categoryName: string) {
    if (categoryName && !this.categories.includes(categoryName)) {
      this.categories.push(categoryName);
    }
  }

  // Function to select a category
  selectCategory(category: string) {
    this.selectedCategory = category;
    // Optionally, filter tasks by selected category here
  }

  // Delete task function
  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}