// pop->from last index, changes original array

const arr=['a','b','c','d'];
const newarr=arr.pop();
console.log(arr);

// shift-> from 1st endex changes original array

const newarr1=arr.shift();
console.log(arr);

// splice-> from the index mentioned, changes original array

const newarr2=arr.splice(1,1)
console.log(arr);

// filter->to remove elements based on condition


const arr2=[1,2,3,4,5,6]


const even=arr2.filter((value)=> value%2===0)


console.log('even',even);

// delete-> leves an empty space

let deleted=delete arr2[3];
console.log(arr2);

// map-> does not change original array
const number=[1,2,3,4,5];
const maps=number.map((num) => num*2)
console.log(maps);
// 
const products=[
    {
        name:'laptop',
        price:1000,
        counnt:5
    },

    {
        name:'laptop',
        price:2000,
        counnt:5
    },

    {
        name:'laptop',
        price:3000,
        counnt:15
    }
];

const totalProducts= products.map((items)=>items.price*items.counnt);
console.log(totalProducts);
// let a=''
// let arr3=[1,2,3,4];
// do{
// a=prompt("enter a number");
// a=Number.parseInt(a)
// arr.push(a);} while(a!=0);
// console,log(arr)
// 

let squares=[3,4,5,6,7];
const newSquare=squares.map((a)=> a*a);
console.log(newSquare);

// REDUCE

let sarr=[1,2,3,4,5]
const sumarr= sarr.reduce((acc,curr)=>acc+curr);
console.log(sumarr);

// REVESERSE ARRAY

const newfunc=(arr)=>{
   return arr.reverse();
}
console.log(newfunc([1,2,3,4,5,6]))

//using for loop
let revarr2=[];
const revfunc=(arr)=>{
    for(let i=arr.length-1;i<=arr[0];i--){
        revarr2.push(arr[i]);
    
    }
    console.log(revarr2)
}
revfunc([1,2,3,4,7,8,9]);

// using reduce


// const newfunc1=(arr)=>{
//     arr.reduce((accum,currValue)=>)
// }
//  console.log(newfunc1([1,2,3,4,5,6]))
