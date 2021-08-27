let painel = document.getElementById("painel-top")
let botaoPedra = document.getElementById("pedra");
let botaoPapel = document.getElementById("papel");
let botaoTesoura = document.getElementById("tesoura");
let reinicia = document.getElementById("botao-reinicia")
let jogada = -1

botaoPedra.addEventListener("click", function(e){
    if(jogada === -1){
        jogada = 0
        atualizaPainel(jogada)
    }

});

botaoPapel.addEventListener("click", function(e){
    if(jogada === -1){
        jogada = 1
        atualizaPainel(jogada)
    }
    
});

botaoTesoura.addEventListener("click", function(e){
    if(jogada === -1){
        jogada = 2
        atualizaPainel(jogada)
    }
});

reinicia.addEventListener("click", function(e){
    jogada = -1
    start()
});

function start(){
    painel.innerHTML = "<p>?</p>"
}
start();

function numeroAleatorio(){
    return Math.floor(Math.random() * 3 )
}

// 0-pedra  1-tesoura 2-papel

// O eu do futuro dizendo pro eu do passado que isso ai ta muito feio kkkk.
// mas como ja tava quase pronto vai assim mesmo. 

function atualizaPainel(x){
    let random = numeroAleatorio()

    if(x === random){
        if(random === 0){painel.innerHTML = '<i class="far fa-hand-rock"><br><p>Empate</p>'}
        if(random === 1){painel.innerHTML = '<i class="far fa-hand-paper"><br><p>Empate</p>'}
        if(random === 2){painel.innerHTML = '<i class="far fa-hand-scissors"><br><p>Empate</p>'}
    }

    if(x === 0 && random === 1){
        painel.innerHTML = '<i class="far fa-hand-paper"><br><p>Perdeu</p>'
    }

    if(x === 0 && random === 2){
        painel.innerHTML ='<i class="far fa-hand-scissors"><br><p>Vitória</p>'
    }

    if(x === 1 && random === 0){
        painel.innerHTML = '<i class="far fa-hand-rock"><br><p>Vitória</p>'
    }

    if(x === 1 && random === 2){
        painel.innerHTML = '<i class="far fa-hand-scissors"><br><p>Perdeu</p>'
    }

    if(x === 2 && random === 0){
        painel.innerHTML = '<i class="far fa-hand-rock"><br><p>Perdeu</p>'
    }

    if(x === 2 && random === 1){
        painel.innerHTML = '<i class="far fa-hand-paper"><br><p>Vitória</p>'
    }
    
}



