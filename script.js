function add(){


    let itemName = document.getElementById('taskName').value; //Get the name of the task the user inputs

    let newItem = document.createElement('p'); //create a new p element

    newItem.classList.add('listItem'); //add the class 'list' to the new p element

    let newItemText = document.createTextNode(itemName); //The name of the task will be according to what the user wants


    //Creation of the delete Button for the new item in the list
    let newItemButton = document.createElement('button');

    //create Text for the button
    let newItemButtonText = document.createTextNode('X');

    newItemButton.classList.add('btn');

    newItemButton.classList.add('delete');

    //adding a function to the button
    newItemButton.addEventListener('click', removeItem);
    
    //adding the text to the button
    newItemButton.appendChild(newItemButtonText);


    //Creation of the cross Button for the new item in the list
    let newItemCross = document.createElement('button');

    let newItemCrossText = document.createTextNode('✔');

    newItemCross.classList.add('btn');

    newItemCross.classList.add('check');

    newItemCross.addEventListener('click', crossItem);

    newItemCross.appendChild(newItemCrossText);


    //adding text to the new p item element
    newItem.appendChild(newItemText);

    newItem.appendChild(newItemCross);

    //adding the delete button to the new p element
    newItem.appendChild(newItemButton);

    //getting the container to store the list items
    let container = document.getElementById('container');

    //add the new p element to the container
    container.appendChild(newItem);

    emptyInput();

}

function removeItem(){

    this.parentNode.style.display = 'none';

}

function crossItem(){

    this.parentNode.style.textDecoration = 'line-through';

}

function emptyInput(){

    let input = document.getElementById('taskName');

    input.value = '';

}


