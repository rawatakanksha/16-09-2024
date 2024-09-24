const longest=(str)=>{
    if(str.trim().length===0){return false;}
  let strArr= str.split(" ");
   console.log(strArr);
   

   strArr= strArr.sort((a,b)=>b.length-a.length);
   
   return strArr.at(0);
}
console.log(longest("hello how are you"));

// using reduce
const Long=(str)=>{

    let strArr=str.split(" ");
return strArr.reduce((acc,curr)=> (curr.length>acc.length? curr:acc),"");
}
console.log(Long("heeeelooo how areee youu"));
