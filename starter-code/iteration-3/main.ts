// Add the reference to the interface

import { TodoItemInterface, TodoListInterface } from "./interfaces";
// Create class TodoItem that implements the corresponding interface
class TodoItem implements TodoItemInterface {
  status: boolean = false;
  updatedAt: Date;
  constructor(public title: string) {
    this.updatedAt = new Date();
  }
  toggleStatus(): void {
    if (this.status == false) {
      this.status = true;
    } else {
      this.status == true;
    }
  }
}
// Create class TodoList that implements the corresponding interface

class TodoList implements TodoListInterface {
  TodoItems: Array<string> = [];
  addTask(TodoItem): void {
    this.TodoItems.push(TodoItem);
  }
  listAllTasks(): void {
    this.TodoItems.forEach(element => {
      console.log(element.title);
    });
  }
  deleteTask(TodoItem): number {
    let place = this.TodoItems.indexOf(TodoItem);
    this.TodoItems.splice(place, 1);
    return this.TodoItems.length;
  }
}

// Execution
let task1 = new TodoItem("This is our first task");
let task2 = new TodoItem("Eat pizza 🍕 yummy!!!");
let task3 = new TodoItem("Finish this iteration 1!! 🤓");
let task4 = new TodoItem("Finish this iteration 2!! 🤓");
let task5 = new TodoItem("Finish this iteration 3!! 🤓");

let myTodos = new TodoList();

console.log("Number of items:", myTodos.addTask(task1));
console.log("Number of items:", myTodos.addTask(task2));
console.log("Number of items:", myTodos.addTask(task3));
console.log("Number of items:", myTodos.addTask(task4));
console.log("Number of items:", myTodos.addTask(task5));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask(task3));
console.log("Number of items:", myTodos.deleteTask(task4));
console.log("Number of items:", myTodos.deleteTask(task5));
// myTodos.listUncomplete();
