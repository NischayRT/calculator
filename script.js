const inp = document.getElementById("disp");
function add(x) {
	inp.value += x;
	console.log("Enter add\n");
}
function fact() {
	console.log("factorial!\n");
	if (inp.value == 0) {
		return 1;
	} else if (inp.value > 0) {
		inp.value = factorial(inp.value);
		return inp.value;
	} else {
		inp.value = "negative value cannot be factorized";
		return inp.value;
	}
}
function factorial(x) {
	if (x == 0 || x == 1) return 1;
	return x * factorial(x - 1);
}
function del() {
	inp.value = inp.value.substr(0, inp.value.length - 1);
	console.log("delete value\n");
}
function clr() {
	inp.value = " ";
	console.log("clear screen\n");
}
function equal() {
	inp.value = eval(inp.value);
	console.log("evaluating...\n");
}
