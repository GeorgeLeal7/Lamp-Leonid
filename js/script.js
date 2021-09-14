//Palavra chave
"use strict"

const lampada = document.getElementById("lampada")
let idInterval 


function lampaInteira() {
    //Essa linha é pra quando a lampada for quebrada, para que ela não ligue e nem desligue
    return lampada.src.includes("ligada")
}

function ligarLampada() {
    //Essa estrutura de if é para declarar que a lampada está inteira e não quebrada
    if (lampaInteira()) {
        lampada.src = "img/ligada.jpg"
    }
}

function desligarLampada() {
    //Essa estrutura de if é para declarar que a lampada está inteira e não quebrada
    if(lampaInteira()) {
        lampada.src = "img/desligada.jpg"
    }
}

function lampadaQuebrada() {
    lampada.src = "img/quebrada.jpg"
}

function lampadaDesligada() {
    return lampada.src.includes("desligada") 
}

function trocarImagem() {
    if(lampadaDesligada()) {
        ligarLampada()
    } else {
        desligarLampada()
    }
}

function pararPiscar() {
    clearInterval(idInterval)
}

function piscarLampada() {

    const piscar = document.getElementById("piscar")
    if (piscar.textContent == "Piscar") {
        idInterval = setInterval(trocarImagem(), 1000)
        piscar.textContent = "Parar"
    } else {
        pararPiscar()
        piscar.textContent = "Piscar"
    }
    
}

// function lampadaParada() {
//     clearInterval(lampadaPiscada)
// }

//eventos
document.getElementById("ligar")
    .addEventListener("click",ligarLampada)
document.getElementById("desligar")
    .addEventListener("click",desligarLampada)
document.getElementById("piscar")
    .addEventListener("click",piscarLampada)


//Mouseouver é quando o mouse está sobe algo
//Mouseout é quando o mouse não está sobe algo
//dblclick seria o "duplo click" do mouse
//callback --------------------------
lampada.addEventListener("mouseover",ligarLampada)
lampada.addEventListener("mouseout",desligarLampada)
lampada.addEventListener("dblclick",lampadaQuebrada)

// lampada.addEventListener("click",lampadaPiscada)
