function additionofdigits(number){
    let sum = 0;
    let strArr = number.toString().split('');
    for (let i = 0; i < strArr.length; i++){
        sum += Number(strArr[i]);
    }
    return sum;
}

console.log(additionofdigits(45));