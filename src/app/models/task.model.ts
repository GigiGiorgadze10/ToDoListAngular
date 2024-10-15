import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Make sure FormsModule is imported for ngModel to work

import { AppComponent } from '../app.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CategoryListComponent } from '../category-list/category-list.component';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      AppComponent,           // Import standalone components
      TaskListComponent,      // Import standalone components
      TaskItemComponent,      // Import standalone components
      CategoryListComponent   // Import standalone components
    ],
    providers: [],
    bootstrap: [AppComponent]  // Keep AppComponent in bootstrap
  })
  export class AppModule { }

export interface Task {
    id: number;
    title: string;
    category: string;
    completed: boolean;
  }
  