const palindrome=(str)=>{
    str=str.toLowerCase()
 const rev= str.split("").reverse().join("");
 if(rev===str){
    console.log("is palindrome")
 }
 else{
    console.log("not a palindrome");
    
 }
 
}

console.log(palindrome("racecar"));

// 
