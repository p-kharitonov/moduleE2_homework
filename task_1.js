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
