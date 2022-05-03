let btnMenuLateral = document.getElementById("menu");
let menuLateral = document.querySelector(".nav-bottom");




// Elements Colors
let headerTag = document.querySelector(".header");
let navBottom = document.querySelector(".nav-bottom");
let bodyColor = document.querySelector("body")


let btnColorMode = document.querySelector("#colorMode");
btnColorMode.addEventListener("click", ()=>{
   console.log()
   headerTag.classList.toggle("headerDark")
   bodyColor.classList.toggle("bodyDark")
   navBottom.classList.toggle("nav-bottom-dark")
})









btnMenuLateral.addEventListener("click", () => {
   console.log(menuLateral.className)
   menuLateral.classList.toggle("nav-bottom-active");
})