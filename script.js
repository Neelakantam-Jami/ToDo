let addBtn=document.querySelector("#add_btn");
let parentList=document.querySelector("#parentList");

addBtn.addEventListener("click",addTask);

//Adding a task when Add button is clicked
function addTask(e){
    //Removing empty msg before adding a task if present
    if(parentList.children[0].className=="emptyMsg"){
        parentList.children[0].remove();
    }

    let currentBtn=e.currentTarget;
    let currentInput=currentBtn.previousElementSibling;

    //Creating a new list item for new Task
    let newLi = document.createElement("li");
    newLi.className="list-group-item d-flex justify-content-between";
    newLi.innerHTML=`<h3 class="flex-grow-1">${currentInput.value}</h3> 
            <button class=" btn btn-warning mx-3" onclick="editTask(this)">Edit</button> 
            <button class=" btn btn-danger" onclick="removeTask(this)">Remove</button>`;

    parentList.appendChild(newLi);

    //Making current input value empty make sure to enter new Task easily
    currentInput.value="";
}

//function for removing a Task
function removeTask(currTask){
    currTask.parentElement.remove();
    
    //Displaying empty msg if no Task is present
    if(parentList.children.length<=0){
        let newEmptyMsg=document.createElement("h3");
        newEmptyMsg.classList.add("emptyMsg");
        newEmptyMsg.innerText="Please Add a Task";
        parentList.append(newEmptyMsg);
    }
}


//function for editing a Task if entered wrong 
function editTask(currElement){
    if (currElement.innerText == "Done") {
        //Edit button when Done is clicked
        currElement.innerText="Edit";
        let currTaskName = currElement.previousElementSibling.value;
        let currHeading=document.createElement("h3");
        currHeading.className="flex-grow-1";
        currHeading.innerText=currTaskName;
        currElement.parentElement.replaceChild(currHeading,currElement.previousElementSibling);
    } else {
        //Done button when Edit is clicked
        currElement.innerText="Done";
        let currTaskName = currElement.previousElementSibling.innerText;
        let currInput=document.createElement("input");
        currInput.type="text";
        currInput.placeholder="Task";
        currInput.classList.add("form-control");
        currInput.value = currTaskName;
        currElement.parentElement.replaceChild(currInput,currElement.previousElementSibling);
    }
}