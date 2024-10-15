import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [BrowserModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = [
    { id: 1, title: 'Get a new helmet', category: 'Uncategorized', completed: false },
    { id: 2, title: 'Purchase Milk & Corn Flakes', category: 'Groceries', completed: false },
    { id: 3, title: 'Pay mortgage', category: 'Payments', completed: false },
    { id: 4, title: 'Complete Assignments', category: 'College', completed: false },
    { id: 5, title: 'Replace laptop\'s screen', category: 'Uncategorized', completed: false },
  ];

  newTaskTitle = '';
  selectedCategory = 'Uncategorized';

  addTask() {
    if (this.newTaskTitle) {
      const newTask: Task = {
        id: this.tasks.length + 1,
        title: this.newTaskTitle,
        category: this.selectedCategory,
        completed: false
      };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}

