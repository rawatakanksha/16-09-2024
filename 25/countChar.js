const countChar=(str, char)=>{
 
    const upper=str.toLowerCase();
    const charU=char.toLowerCase();
    total=upper.split("");
    total.reduce((acc, curr)=> {
        if(curr===charU){
            acc++;
        }
        return acc;
    },0);
    
        return total;

}

console.log(countChar("MississaIpi","I"));
