function sortMaker(arr) {
    for(let i = 0; i<2 ;i++){
        if(arr[i] < 0  || arr[i+1] < 0 ){
            return "Invalid Input";
        }

        else if(arr[i] == arr[i+1]){
            return "Equal";

        }
        else{
            if(arr[i] < arr [i+1]){
                let swap = arr[0];
                arr[i] = arr[i+1];
                arr[i+1] = swap;
            }
            return arr;
        }
    }

}

const array = [5,7];
let sort = sortMaker(array);
console.log(sort);