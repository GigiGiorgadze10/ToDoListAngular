import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from '../app.component';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CategoryListComponent } from '../category-list/category-list.component';

@NgModule({
    imports: [
      BrowserModule,
      FormsModule,
      AppComponent,         
      TaskListComponent,      
      TaskItemComponent,      
      CategoryListComponent  
    ],
    providers: [],
    bootstrap: [AppComponent] 
  })
  export class AppModule { }

  export interface Task {
    name: string;
    category: string;
    completed: boolean;
  }
  
  