let form = document.querySelector("form");
let sucDiv = document.querySelector(".suc-div");


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    sucDiv.style.display = "block";
    setInterval(function(){
        sucDiv.style.display = "none";
    },2700)
})