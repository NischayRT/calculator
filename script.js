const inp = document.getElementById("disp");
function add(x) {
	inp.value += x;
	console.log("Enter add\n");
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
