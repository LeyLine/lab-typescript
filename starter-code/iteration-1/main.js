let myList = [];
function addTask(task) {
    myList.push(task);
    return myList.length;
}
function listAllTasks() {
    console.log(myList);
}
function deleteTask(num) {
    let place = myList.indexOf(num);
    myList.splice(place, 1);
}
console.log("Number of items:", addTask("This is our first task"));
console.log("Number of items:", addTask("Eat pizza 🍕 yummy!!!"));
console.log("Number of items:", addTask("Finish this iteration 1!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 2!! 🤓"));
console.log("Number of items:", addTask("Finish this iteration 3!! 🤓"));
listAllTasks();
console.log("Number of items:", deleteTask("Finish this iteration 1!! 🤓"));
listAllTasks();
