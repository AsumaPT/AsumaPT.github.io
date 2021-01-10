var altura = 0
var largura = 0
var vidas = 1
var tempo = 30
var intervalo = undefined
var nivel = window.location.search
nivel = nivel.replace('?', '')
if(nivel == 'facil') {
    intervalo = 1500
} else if(nivel == 'normal') {
    intervalo = 1000
} else if(nivel == 'dificil') {
    intervalo = 500
}
function ajustartela() {
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)

}
ajustartela()
var cronometro = setInterval(function() {
    tempo -= 1
    if(tempo <= 0) {
        clearInterval(cronometro)
        clearInterval(maingame)
        window.location.href = "vitoria.html"
    }
    document.getElementById('tempo').innerHTML = tempo
}, 1000)
function posrandom() {

    //remover mosquito
    if(document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if(vidas > 3) {
            window.location.href = "gameover.html"
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
            vidas++
        }
    }
    //sistema randomico
    var x = Math.floor(Math.random() * largura) -90
    var y = Math.floor(Math.random() * altura) -90
    x = x < 0 ? 0 : x
    x = x < 90 ? 90 : x
    y = x < 0 ? 0 : y
    y = y < 90 ? 90 : y
    console.log(x,y)
    //criar o mosquito
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamrandom() + lado()
    mosquito.style.top = y + 'px'
    mosquito.style.left = x + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }
    document.body.appendChild(mosquito)
    tamrandom()
    lado()
}
function tamrandom() {
    var classe = Math.floor(Math.random() * 3)
    switch(classe) {
        case 0:
            return 'mosca1'
        case 1:
            return 'mosca2'
        case 2:
            return 'mosca3'
    }
}
function lado(){
    var lado = Math.floor(Math.random() * 2)
    switch(lado) {
        case 0:
            return ' ladoA'
        case 1:
            return ' ladoB'
    }
}

