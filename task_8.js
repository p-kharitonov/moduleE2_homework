// Задание 8

let map = new Map();
map.set("1", "string");
map.set(1, "number");
map.set(true, "boolean");
for (const[key, val] of map) {
	console.log(`Ключ — ${key}, значение — ${val}`);
}
