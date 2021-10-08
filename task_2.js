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
