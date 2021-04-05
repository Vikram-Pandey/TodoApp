let MainTodoContainer=document.querySelector('.todo-input-container');
let input=document.getElementById('newitem');
let addButton=document.getElementById('addbtn');
let deleteButton=document.getElementById('delbtn');

addButton.addEventListener('click',function(e){
 if(input.value.trim()){
    var ulTag=document.createElement('ul'); 
    ulTag.classList.add('todo-list-container');

    var todoList=document.createElement('div');
    todoList.classList.add('todo-list');

    var liTag=document.createElement('li');
    liTag.innerHTML =input.value;
    liTag.classList.add('todo-item');
     
    var buttonDiv=document.createElement('div');
    buttonDiv.classList.add('button-div');

    var editbtnForList=document.createElement('button');
    editbtnForList.classList.add('edit-btn-list');
    editbtnForList.innerHTML='<i class="fas fa-edit"></i>';
    editbtnForList.onclick=function(){
       editWorking(liTag)
    };

    var delbtnForList=document.createElement('button');
    delbtnForList.classList.add('del-btn-list');
    delbtnForList.innerHTML='<i class="fas fa-trash"></i>';

    var completedbtn=document.createElement('button');
    completedbtn.classList.add('completed');
    completedbtn.innerHTML='<i class="fas fa-check"></i>';

    ulTag.appendChild(todoList);
    todoList.appendChild(liTag);
    todoList.appendChild(buttonDiv);
    buttonDiv.appendChild(completedbtn);
    buttonDiv.appendChild(editbtnForList);
    buttonDiv.appendChild(delbtnForList);
    
    

    MainTodoContainer.appendChild(ulTag);
    
    todoList.addEventListener('click',function(e){
    let items=e.target;
    console.log("Output");
    console.log(e.target);
    
      if(items.classList[0]==="completed"){
         let todo=items.parentElement;
         console.log(todo);
         let todoParent=todo.parentElement;
         console.log(todoParent);
         todoParent.classList.add('line_through');
       }

       else if(items.classList[0]==="del-btn-list"){
         let todo=items.parentElement;
         let todoParent=todo.parentElement;
         let todoGrandParent=todoParent.parentElement;
         todoGrandParent.classList.add('fall');
         todoGrandParent.addEventListener('transitionend',()=>{
           todoGrandParent.remove();
         

       });
    
      }

      

    });

    input.value='';
    console.log(ulTag);
  
    
 }

 else if(input.value===''){
   alert("Please enter a value");
}
});

function editWorking(e){
  let editvalue=prompt("Edit the selected item",e.firstChild.nodeValue);
  e.firstChild.nodeValue=editvalue;
}


function deleteAllElements(){
   var getUITag=document.querySelectorAll('.todo-list-container');

   for(var i=0;i<getUITag.length;i++){
      getUITag[i].remove();
   }
}