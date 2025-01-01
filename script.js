var inp = document.getElementById("disp");
function add(x) {
	inp.value = inp.value + x;
}
function del() {
	inp.value = substr(0, inp.value.length - 1);
}
function clr() {
	inp.value = "";
}
function equal() {
	inp.value = eval.inp.value;
}
