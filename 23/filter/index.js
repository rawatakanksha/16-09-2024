const num=[1,2,3,4,5,6];
const even= num.filter(isEven)

function isEven(value){
    return value%2===0;
}

console.log(even)