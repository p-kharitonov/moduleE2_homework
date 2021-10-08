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
