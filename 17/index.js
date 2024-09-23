

/*-----------------------EvENT Listener-------------------------------*/

// if (typeof document !== 'undefined') {
//     let button = document.querySelector('.btnContent')
const button=document.querySelector('.btnContent');
button.addEventListener('click',btnFun=()=>{
    console.log('Button is clicked');
    alert("CV Downloaded")
    // e.preventdefault();
});
const hire=document.querySelector('.hireBtn');
hire.addEventListener('click',hirebtn=()=>{
    console.log('hire button clicked')
});


/*--------------------------INNER HTML---------------------------------*/

const intro=document.querySelector('p')
intro.innerHTML="<p><b>I'm an Intern<b><p>"





const myDiv= document.querySelector('.lastDiv');
let newElem= document.createElement('p');
newElem.textContent="DOM manupluation practice";
myDiv.insertAdjacentElement('beforeend',newElem)


const para = document.createElement("p");  
const text = document.createTextNode("This is a dynamically added paragraph"); 
para.appendChild(text);  
document.body.appendChild(para);  



let elem=document.getElementsByClassName('lastDiv')[0];
elem.style.cssText="background-Color:Orange; paddind:0.5rem "
// elem.style.backgroundColor="blue"

 const footElem= document.querySelector('.unOrdered');
footElem.setAttribute('class','footElem');

footElem.setAttribute('style','background-Color:Orange')

function clickEvent(){
const btnPara= document.getElementById('buttonPar');
console.log(btnPara)
const value = btnPara.getAttribute("id")
alert("the value of 'id' attribute is" +value)
}

