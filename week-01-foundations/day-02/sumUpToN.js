const sumUpToN = (num) => {
    let parsedNum = parseInt(num);
    let sum = 0;

    if (isNaN(parsedNum) || parsedNum < 0) {
        return "Invalid Input";
    }

    for (let i=0; i<=parsedNum; i++) {
        sum = sum + i;
    }
    
    return sum;

}

console.log(sumUpToN("3"));
console.log(sumUpToN("J"));