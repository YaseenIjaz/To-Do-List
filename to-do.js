const toDoObject = JSON.parse(localStorage.getItem('toDoObject')) || [{
    name:'Make Dinner',
    dueDate :'2024-11-26'
}];

function renderToDo(){
    let divElement = document.getElementById('toDoContainer');

    if(!divElement){
        divElement = document.createElement('div');
        divElement.id = 'toDoContainer';
        document.body.appendChild(divElement);
    }

    divElement.innerHTML = '';

    toDoObject.forEach((value,index) => {
        const {name,dueDate} = value;
        const newElement = document.createElement('div');
        newElement.className = 'toDoItems';
        divElement.appendChild(newElement);
        

        const child1 = document.createElement('span');
        child1.innerText = name;
        child1.className = 'toDoTask'
        newElement.appendChild(child1);
        const child2 = document.createElement('span');
        child2.innerText = dueDate;
        child2.className = 'toDoTask'
        newElement.appendChild(child2);

        const buttonContainer = document.createElement('div');
        buttonContainer.id = 'buttonContainer';
        newElement.appendChild(buttonContainer);

        const deleteButton = document.createElement('button');
        deleteButton.id = 'deleteButton';
        deleteButton.innerText = 'Delete'
        deleteButton.addEventListener('click',() =>{
            toDoObject.splice(`${index}`,1);
            return renderToDo()
        });
        buttonContainer.appendChild(deleteButton);

        const editButton = document.createElement('button');
        editButton.id = 'editButton';
        editButton.innerText = 'Edit';

        editButton.addEventListener('click', () => {
            document.getElementById('js-task-input').value = name;
            document.getElementById('js-date-input').value = dueDate;
            toDoObject.splice(index, 1); 
            renderToDo();
        });

        buttonContainer.appendChild(editButton);

    });
    localStorage.setItem('toDoObject',JSON.stringify(toDoObject))
}

renderToDo()

function addToDo(){

    const name = document.getElementById('js-task-input').value;
    const dueDate = document.getElementById('js-date-input').value;

    if(!name || !dueDate){
        alert("Task Name or it's due date is not given")
    }
    else{
        toDoObject.push(
            {
                name,
                dueDate
            }
        );
        document.getElementById('js-task-input').value ='';
        document.getElementById('js-date-input').value = '';
        renderToDo()
    }
    
    
};
