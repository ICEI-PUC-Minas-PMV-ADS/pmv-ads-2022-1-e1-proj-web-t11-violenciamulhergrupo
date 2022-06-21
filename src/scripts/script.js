let btnMenuLateral = document.getElementById("menu");
let menuLateral = document.querySelector(".nav-bottom");

console.log("oi")


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



// Adiciona instituições cadastradas no Card
// const instName = document.getElementById("cardname")
// const instUrl = document.getElementById("insturl")
// const instImagem = document.getElementById("instimage")
// const instDescr = document.getElementById("instdescr")
// let cadastro = localStorage.getItem("cadastro")
// const objCadastro = JSON.parse(cadastro)
// console.log(objCadastro)
// instName.innerText = `Nome: ${objCadastro.nome}`
// instUrl.innerText = `URL: ${objCadastro.url}`
// //objCadastro.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKagCUurnUxAeJnxXXsZVY329SkiIsiGqa_Q&usqp=CAU"
// instImagem.src = objCadastro.image
// instDescr.innerText = objCadastro.descricao;