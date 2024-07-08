let form = document.querySelector("form");
let sucDiv = document.querySelector(".suc-div");

function Ajax(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
     
        if(xhr.readyState === 4){
            
            sucDiv.style.display = "block";

        }

    }

    xhr.open('POST',sucDiv)
    xhr.send();
}


form.addEventListener("submit", (e) =>{
    e.preventDefault();
  Ajax();      
})