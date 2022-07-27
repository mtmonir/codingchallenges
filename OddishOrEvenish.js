function additionofdigits(number){
    let sum = 0;
    let strArr = number.toString().split('');
    for (let i = 0; i < strArr.length; i++){
        sum += Number(strArr[i]);
    }
    return sum;
}

function oddishOrEvenish(number){
    let sum = additionofdigits(number)
    return sum%2==0?"Evenish":"Oddish";
}


console.log("The number 45 is "+oddishOrEvenish(45));
console.log("The number 48 is "+oddishOrEvenish(48));