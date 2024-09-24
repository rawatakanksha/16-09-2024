// Interactive To-Do List: Create a simple to-do list app that allows users to add, remove, and mark tasks as completed.

const btn=document.querySelector('.button');
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    
    const input= document.querySelector('.taskField');
    const taskInput=input.value;
    if(taskInput.length===0){
        alert('please enter a task')
    }
  else{

    const list=document.querySelector('.listItems');
    const listItem=document.createElement('li');
    listItem.textContent=taskInput;

    const checkbox=document.createElement('input');
    checkbox.type='checkbox';
    listItem.appendChild(checkbox);

    list.appendChild(listItem);
    input.value='';

//     document.querySelector('.listItems').innerHTML= 
//     ` 
//    <li> ${taskInput}</li>
//    <input type="checkbox">   
//     </div>`;
}
document.getElementsByClassName('listContainer')[0].style.display='block';

})
