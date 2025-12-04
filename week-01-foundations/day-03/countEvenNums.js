const countEvenNums = (arry) => {
    if (!Array.isArray(arry) || arry.length === 0) return undefined;

    let count = 0;

    for (let i=0;i<arry.length;i++) {
        if (arry[i] % 2 === 0) {
            count++;
        }
    }

    return count;
}

const myArray = [2, 45, 34, 25, 85, 12];
const myArray2 = "Trial";
const myArray3 = [];

console.log(countEvenNums(myArray));   //3
console.log(countEvenNums(myArray2));  //undefined
console.log(countEvenNums(myArray3));  //undefined
