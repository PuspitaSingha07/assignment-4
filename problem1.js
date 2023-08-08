

function cubeNumber(number){
    if(typeof number !== "number"){
        return "ERROR! Please Provide a Positive Number."
    }
    else{
      let cube = Math.pow(number , 3);
          return cube;
   }
  

}

const result = cubeNumber(2)
console.log(result)


