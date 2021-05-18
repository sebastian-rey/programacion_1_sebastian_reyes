const recorrer_objetos =() => {

    let misobjetos =[

        {
            nombre:"Pepe",
            apellido:"Apellido",
        },


        {
            nombre:"Juan",
            Apellido:"Perez"
        }

    ];
    misobjetos.forEach(element =>{
        console.log(` 
        Mi nombre es: ${element.nombre}
        Mi apellido es: ${element.apellido}
        `);
    })
}



//alternativa a document.querySelector()
const boton3 = document.getElementById("btn_recorrer_objetos")
boton3.addEventListener ("click", recorrer_objetos)