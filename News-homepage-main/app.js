const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const links = document.querySelector(".nav-links")

openBtn.addEventListener("click", function(){
    links.classList.add("show-links")
})

closeBtn.addEventListener("click", function(){
    links.classList.remove("show-links")
})