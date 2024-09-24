// Interactive To-Do List: Create a simple to-do list app that allows users to add, remove, and mark tasks as completed.






const list=document.querySelector('.listItems');
let tasks=JSON.parse(localStorage.getItem("listItems"))
function populateList(tasks=[],list){
    list.innerHTML= tasks.map((tasks,i)=>{
     return `<li><input type="checkbox" data-index=${i} id="tasks${i}"
     ${tasks.done?"checked":""}/>
     <label for="tasks${i}">${tasks.text}</label></li>`
    }).join("");
 }

 function toggle(e){
    if(!e.target.matches("input")) return;
    const element=e.target;
    const index=element.dataset.index;
    tasks[index].done=!tasks[index].done;
    localStorage.setItem("tasks",JASON.stringify(tasks))
    populateList(tasks,listItem)
    
 }
const btn=document.querySelector('.button');
const listItem=document.createElement('li');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    const input= document.querySelector('.taskField');
    const taskInput=input.value;
    if(taskInput.length===0){
        alert('please enter a task')
    }
  else{

    
    
    listItem.textContent=taskInput;

    
    

   

    // const checkbox=document.createElement('input');
    // checkbox.type='checkbox';
    // listItem.appendChild(checkbox);

    list.appendChild(listItem);
    input.value='';
    populateList(tasks,listItem)

    document.getElementsByClassName('listContainer')[0].style.display='block';

//     document.querySelector('.listItems').innerHTML= 
//     ` 
//    <li> ${taskInput}</li>
//    <input type="checkbox">   
//     </div>`;


}
// document.getElementsByClassName('listContainer')[0].style.display='block';

})
list.addEventListener("click",toggle);
// populateList(tasks,listItem);
