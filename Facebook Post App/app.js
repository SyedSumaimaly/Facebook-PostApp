const container = document.querySelector(".container");
privacy = container.querySelector(".privacy");
arrowBack = container.querySelector(".arrow_back");

privacy.addEventListener("click", e => {
    container.classList.add("active");
});

arrowBack.addEventListener("click", () => {
    container.classList.remove("active");
});

var val = document.querySelector("#text")
var post = document.getElementById('post')
var textContent = document.getElementById('textContent');
var post = document.getElementById('post')
function postingInputValue() {
    if (val.value === "") {
        swal("Empty Post")
    }
    else {
        post.style.visibility = "visible"
        textContent.innerHTML = val.value;
        val.value = "";
    }
}

function deletepost(){
    post.remove()
}








