const finMax=(arr)=>{
 let max= arr.reduce((acc,curr)=> acc>curr?acc:curr) 

return max;

}

console.log(finMax([1,2,3,4,77,88]));
