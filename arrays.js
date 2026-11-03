let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("Fruits:", fruits);

console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);

console.log("Length:", fruits.length);

fruits[1] = "Grapes";
console.log("Updated array:", fruits);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


let numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum:", sum);
