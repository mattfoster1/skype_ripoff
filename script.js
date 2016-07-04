if (typeof jQuery == 'undefined') {

alert("jQuery thumbsdown")

}


// var CBCont = document.getElementById("chkCont");

var checkBox = function() {
	var checkboxJS = document.getElementById("check_box");
	var CBCont = document.getElementById("chkCont");
	// console.log(checkboxJS.checked);

	if (checkboxJS.checked == false) {
		// checkboxJS.checked = true;
		// console.log(checkboxJS.checked);
		// CBCont.class = "checked";
		// console.log("Checking");
		// return;
	} else if (checkboxJS.checked == true) {
		// checkboxJS.checked = false;
		// console.log(checkboxJS.checked);
		// CBCont.class = "unchecked";
		// console.log("Unchecking");
		// return;
	} else {
		alert("nope");
	}
	// console.log(checkboxJS.checked);
}

// checkboxJS.onclick = checkBox();