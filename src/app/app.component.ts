import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface ToDoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todolist-app';
  todoList: ToDoItem[] = [];
  newTask: string = '';

  addTask(): void {
    if (this.newTask.trim() !== '') {
      const newToDoItem: ToDoItem = {
        id: Date.now(),
        task: this.newTask,
        completed: false
      }
      this.todoList.push(newToDoItem);
      console.log(newToDoItem);
      this.newTask = '';
    }
  }

  deleteTask(id: number): void {
    if (id != null) {
      this.todoList = this.todoList.filter(item => item.id !== id);
    }
  }

  toggleCompleted(index: number): void {
    console.log(index);
    this.todoList[index].completed = !this.todoList[index].completed;
    console.log(this.todoList);
  }

  deleteCompletedTasks(): void {
    this.todoList = this.todoList.filter(item => !item.completed);
  }
}
