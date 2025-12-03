const  findLargestNum = (numbers) => {
    if (numbers.length === 0) return undefined;

    let largest = numbers[0];

    for (let i=1;i<numbers.length;i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }

    return largest;
}

let myArray = [20, 5, 70, 9, 11];
let myArrayTwo = [];


console.log(findLargestNum(myArray));
console.log(findLargestNum(myArrayTwo));

