const doubleNumbers = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length === 0) return undefined;

    if (!numbers.every(item => typeof item === "number")) return "All value should be numbers!";

    return numbers.map(num => num * 2);
}

const array1 = [2,3,4];
const array2 = ["2",3,4]

console.log(doubleNumbers(array1));
console.log(doubleNumbers(array2));
