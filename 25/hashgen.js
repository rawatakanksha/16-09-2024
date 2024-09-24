const hash=(str)=>{

    if(str.length>280 || str.trim().length===0){
        return false;
    }
  word= str.split(" ")
  word.map((curr)=>
  curr.replace(curr[0], curr[0].toUpperCase())
  );
  
 word=word.join("");
  return word;
}

console.log(hash("hi my name is"));
