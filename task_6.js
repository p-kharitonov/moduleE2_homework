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
