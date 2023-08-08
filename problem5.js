function canPay(changeArray, totalDue) {
    if(changeArray.length == 0){

        return "Empty Array!! Please Provide an Array of Number."
    }

    else{
        let sum = 0;
        for(let i = 0;i<changeArray.length;i++){
           let element = changeArray[i];
           sum = sum + element;
       }
     if(sum >= totalDue){
        return true;
     }

     else{
        return false;
     }
    }


}


const array = [7,0,3];
const chipsPrice = 10;
let isEnough = canPay(array, chipsPrice);
console.log(isEnough);