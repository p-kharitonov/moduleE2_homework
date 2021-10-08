// Задание 1

value = prompt("Введите число", "");
value = (value == null || value == "") ? NaN : +value;
if (!isNaN(value)) {
	if (value%2==0) {
		console.log(value + " четное число.");
	} else {
		console.log(value + " нечетное число.");
	}

} else {
	console.log("Упс, кажется, вы ошиблись");
}


// Задание 2

let x = "fdf";
switch (typeof x){
	case "number":
		console.log("Переменная X является числом")
		break;
	case "string":
		console.log("Переменная X является строкой");;
		break;
	case "boolean":
		console.log("Переменная X является логической переменной");
		break;
	default:
		console.log("Тип X не определён");
}


// Задание 3

let str = "Hello";
let newStr = str.split("").reverse().join("");
console.log(newStr);


// Задание 4

let min = 1;
let max = 100;
let num = Math.floor(Math.random() * (max - min + 1)) + min;


// Задание 5

let arr = [1, 5, 7, "h", true, null, NaN, 0];
console.log(arr.length);
arr.forEach(function(item, index, array) {
	console.log(item);
});


// Задание 6

let result = true
let arr = [1, 5, 7, "h", true, null, NaN, 0];
for (let i=1; i < arr.length; i++) {
	if (arr[i] != arr[i-1]) {
		result = false;
		break;
	}
}
console.log(result);


// Задание 7

let arr = [1, 5, 7, "h", true, 10, null, NaN, 0, 4];
let countEven = 0;
let countOdd = 0;
let countZero = 0;
arr.forEach(function(item, index, array) {
	if (typeof item == "number" && !isNaN(item)) {
		if (item == 0) {
			countZero++;
		}
		if (item%2 == 0) {
			countEven++;
		} else {
			countOdd++;
		}
	}
});
console.log("Четных: " + countEven);
console.log("Не четных: " + countOdd);
console.log("Нулей: " + countZero);


// Задание 8

let map = new Map();
map.set("1", "string");
map.set(1, "number");
map.set(true, "boolean");
for (const[key, val] of map) {
	console.log(`Ключ — ${key}, значение — ${val}`);
}
