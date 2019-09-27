var todos = ["but new apple watch"];

var input = prompt("What would you like to do?")

while(input !== "quit"){
  //handle input
  if (input === "list"){
    listTodo();

  } else if (input==="new"){
      addTodo();

  }else if (input === "delete"){
    deleteTodo();
  }
  //ask again for new input
 input = prompt("What would you like to do?")
}

console.log("OK, You quit the app");

function listTodo(){

      console.log("**********************");
      todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
      });

      console.log("**********************");
}

function addTodo(){
  //ask for new todo
  var newTodo = prompt("Enter new todo");
//add to todos Array
  todos.push(newTodo);
  console.log("Added Todo");
}

function deleteTodo(){
  //ask for index of todo to be deleted
  var index = prompt("Enter index of todo to delete");

  //delete that todo
  //splice()
  todos.splice(index,1);
  console.log("Deleted Todo");
}
