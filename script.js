const fName = document.querySelector(".fName");
const fNameSmall = document.querySelector(".fNameSmall");
const lName = document.querySelector(".lName");
const lNameSmall = document.querySelector(".lNameSmall");
const email = document.querySelector(".emailAddress");
const emailSmall = document.querySelector(".emailAddressSmall");
const message = document.querySelector(".message");
const messageSmall = document.querySelector(".messageSmall");
const btn = document.querySelector(".btn")


function fNameFunc() {
  fName.addEventListener("keyup", () => {
    if (fName.value === "") {
      fNameSmall.textContent = "First Name is required";
    } else if (!fName.value.match(/^[A-Z][a-zA-Z0-9]*$/)) {
      fNameSmall.textContent = "Letters only and must be capital";
    } else {
      fNameSmall.textContent = "";
    }
  });
}

function lNameFunc() {
  lName.addEventListener("keyup", () => {
    if (lName.value === "") {
      lNameSmall.textContent = "Last Name is required";
    } else if (!lName.value.match(/^[A-Z][a-zA-Z0-9]*$/)) {
      lNameSmall.textContent = "Letters only and must be capital";
    } else {
      lNameSmall.textContent = "";
    }
  });
}

function emailFunc() {
  email.addEventListener("keyup", () => {
    if (email.value === "") {
      emailSmall.textContent = "This field is required";
    } else if (
      !email.value.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    ) {
      emailSmall.textContent = "A valid email is required";
    } else {
      emailSmall.textContent = "";
    }
  });
}

function messageFunc() {
  message.addEventListener("keyup", () => {
    if (message.value === "") {
      messageSmall.textContent = "This field is required";
    } else {
      emailSmall.textContent = "";
    }
  });
}


function buttonFunc() {
btn.addEventListener("click" , () =>{

	if(!fNameFunc() || !lNameFunc() || !emailFunc() || !messageFunc()){
		return false;
	}else{
		return true;
	}
	
})

}


fNameFunc();
lNameFunc();
emailFunc();
messageFunc();