const recorrer_arreglo = () => {

    let nombre = ["pepe", "Juan", "Jose", "Jaime"];


    //forma 1
    nombre.forEach(element =>{
        console.log(element);
    });

}
const boton2 = document.querySelector("#btn_recorrer_arreglo")
boton2.addEventListener ("click", recorrer_arreglo)
