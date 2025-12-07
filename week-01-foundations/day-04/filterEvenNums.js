const filterEvenNumbers = (numbers) => {
    if (!Array.isArray(numbers) || numbers.length === 0) return undefined;

    if (!numbers.every(item => typeof item === "number")) return "All value should be numbers!";

    return numbers.filter(num => num % 2 === 0 );
}

const array1 = [3, 6, 5, 8];
console.log(filterEvenNumbers(array1));