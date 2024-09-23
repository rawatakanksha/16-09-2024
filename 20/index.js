if (typeof document !== 'undefined') { 
    const btn = document.querySelector('.button');
    console.log(btn);
    btn.style.display='block'
    btn.addEventListener('click',(e)=>{
        e.preventDefault();
        console.log("btn clicked");

        
        
        const input=document.getElementsByClassName('myInput')[0];
        const numberInput=input.value;
        console.log(numberInput);
        if(!numberInput || numberInput>20){

          alert("please eneter number between 0 to 20")

        }
       else{
        let output = '';
        let header=`<tr>
        <th>Multiplicand</th>
        <td></td>
        <th>Multiplier</th>
        <td></td>
        <th>Product</th>
        </tr>`
        const thead=document.querySelector('.head');
        thead.innerHTML=header;

        for(let i=1;i<=10;i++){

            output+=`
            <tr>
            <td>${i}</td>
            <td>*</td>
            <td>${numberInput}</td>
            <td>=</td>
            <td>${i*numberInput}</td>`
            const tab= document.querySelector('.body');
            tab.innerHTML=output;

            document.getElementsByClassName('output1')[0].style.display = 'block';
        }
        
      }

            
    })
   
  } else {
    console.log("This code is running in a non-browser environment (e.g., Node.js).");
  }
  


  // function validateForm() {

     
  //   var input = document.forms["myForm"]["myInput"].value;
    
  //   if (input === "") {
  //     alert("Field must not be empty");
  //     return false; // Prevent form submission
  //   }
    
  //   return true; // Allow form submission
  // }


//   output=`${i}*${numberInput}=${i*numberInput}`;
//   console.log(output);
//   const tab= document.querySelector('.tContent');
//   const innertab=document.createElement('table');
 
  // const rowCount=tab.rows.length;
  // const row=tab.inserRow(10);

  // const cell=row.insertCell(0);
  
//    const content= tab.appendChild(innertab);
//    innertab.appendChild(output)
  // tab.insertAdjacentElement('beforeend',innertab)


// var p_tables = document.getElementById('tContent').innerHTML = output;