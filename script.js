const fName = document.querySelector(".fName");
const fNameSmall = document.querySelector(".fNameSmall");
const lName = document.querySelector(".lName");
const lNameSmall = document.querySelector(".lNameSmall");

const email = document.querySelector(".email");
const emailSmall = document.querySelector(".emailSmall");

function fNameFunc() {
	fName.addEventListener("keypress", () => {
		if ((fName.value = "")) {
			fNameSmall.textContent = "First Name is required";
		} else if (!fName.value.match(/^[a-zA-Z]+$/)) {
            fNameSmall.textContent = "Letters only";
		}else{
            fNameSmall.textContent = "";
        }
	});
}

fNameFunc();