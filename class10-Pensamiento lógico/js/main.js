// Sumar

document.getElementById('button').onclick = () => {
    console.log("Capturo el click")
    document.getElementById('demo').innerHTML = Date()
}

// Introduccion a los Eventos JS

document.getElementById('button').addEventListener( 'click', function(){
    console.log("Hola mundo dedsde EventListener")
    document.getElementById('demo').innerHTML = Date()
})

document.getElementById('button_color').addEventListener( 'click', function(){
    document.body.style.background = '#ff0000'
})

document.getElementById('button_default').addEventListener( 'click', function(){
    document.body.style.background = '#fff'
})

let parrafo = document.getElementsByClassName('parrafo')

for (let i = 0; i < parrafo.length; i++) {
    parrafo[i].style.background = 'green'
}