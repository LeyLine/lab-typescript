class Todo {
    constructor() {
        this.list = [];
    }
    addTask(task) {
        this.list.push(task);
        return this.list.length;
    }
    listAllTasks() {
        this.list.forEach(element => {
            console.log(element);
        });
    }
    deleteTask(num) {
        let place = this.list.indexOf(num);
        this.list.splice(place, 1);
        return this.list.length;
    }
}
myTodos = new Todo();
console.log("Number of items:", myTodos.addTask("This is our first task"));
console.log("Number of items:", myTodos.addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", myTodos.addTask("Finish this iteration 3!! 🤓"));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", myTodos.deleteTask("Finish this iteration 2!! 🤓"));
myTodos.listAllTasks();
