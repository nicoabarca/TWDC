let runningApp = true;
const todoList = [];

while (runningApp) {
    let input = prompt('What would you like to do?');
    
    if (input === 'new'){
        let newInput = prompt('Enter new todo');
        todoList.push(newInput);
        console.log(`${newInput} added to list`);
    }
    else if (input === 'list'){
        console.log('##########');
        for (let todo of todoList){
            console.log(`${todoList.indexOf(todo)}: ${todo}`);
        }
        console.log('##########');
    }
    else if (input === 'delete') {
        let deleteInput = parseInt(prompt('Enter index of todo to delete'));
        todoList.splice(deleteInput,1);
        console.log('Todo Removed')
    }
    else if (input==='quit'){
        console.log('OK, you quit the App')
        break;
    }
}

