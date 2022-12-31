// Sumar

document.getElementById('sumar').addEventListener( 'click', (e) => {
    e.preventDefault()
    const numero1 = Number(document.getElementById('numero1').value)
    console.log("El valor del numero 1 es: "+ numero1)
    const numero2 = Number(document.getElementById('numero2').value)
    console.log("El valor del numero 2 es: "+ numero2)
    sowInDom(numero1,numero2)
})

function sowInDom(numero1,numero2){
    document.getElementById('contenedor-resultado').style.display = 'block'
    document.getElementById('parrafo').innerHTML = numero1 + numero2
}


console.log(parseInt('6b3e3e'))
console.log(Number('6b3e3e'))


// JSON - API

let usuario = { // objeto
    "nombre": "Bruno",
    "edad": 20,
    "nacionalidad": "ARG",
}

const persona = '{"nombre":"John", "edad":30, "nacionalidad":"ARG"}'
const obj = JSON.parse(persona);
document.getElementById("json-persona").innerHTML = obj.nombre + ", " + obj.edad + ", " + obj.nacionalidad;



// consumir el json que quiero
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))