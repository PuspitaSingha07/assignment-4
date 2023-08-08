function matchFinder(string1, string2){
    if( typeof string1 !== 'string' || typeof string2 !== 'string'){
        return "ERROR! Please Provide Two Valid String."
    }
    else{
        if(string1.includes(string2)){
            return true;
        }
        else
           return false;
    }

}

let string1 = "Peter Parker";
let string2 = "Pet";

let isMatch = matchFinder (string1, string2);
console.log(isMatch)