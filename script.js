//alert("Hola este es mi Javascript");
//let nombre="Martha";
//const nombre1 ="jesus";
//var nombre2 =" yosmar";

//console.log(nombre);
//c0nsole.log(nombre1);
//console.log(nombre2);

//seleccionar elementos
//let contenidoparrafo1= "Nombre"
//let parrafo1 = document.querySelector(".logo.fuente.size")
//parrafo1.innerHTML =contenidoparrafo1;

//condicionales 

//let textotitulo = titulo.innertext;
//console.log(textotitulo);

//f(textotitulo=="nombre"){
//titulo.innertext="otro"
//}
   // else{
        //console.log("no se cumple")

    //}

    let menu_responsive = document.querySelector(".checkbtn");

    menu_responsive.onclick = function () {

      navBar = document.querySelector(".navbar");

      navBar.classList.toggle("active");

    };
