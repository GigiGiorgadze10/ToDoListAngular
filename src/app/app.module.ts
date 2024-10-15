import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // <-- Import this
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],  // <-- Add FormsModule here
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
