
/*Este código tem a mesma função que o código abaixo.
Esta é uma função sem parametros */
/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function verificarChute(){
    console.log('O botão foi clicado')
}
*/

/* Esta é uma funçao com parametros. */

let listaDeNumerosSortesdos = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

exibirMensagemInicial();

/* O console.log é uma função do JavaScript que serve para imprimir mensagens
no console do navegador ou da ferramenta de desenvolvimento.
É uma ferramenta muito utilizada para depurar código, monitorar erros e solucionar problemas.*/

function verificarChute() {
    /* criando um input dentro da função */
    let chute = document.querySelector('input').value;
    /* Exibi um resultado na tela */
    console.log('O botão foi clicado!');
    console.log(numeroSecreto);
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto){
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas >1? 'tentativas':'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        /* Pega o elemento do html pelo id */
        /* Através do (.) é possivel acessar os elementos que podemos manipular.*/
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        /*chama a Função limpar campo */
        limparCampo();


    }
    /* */
}

/*  */

/* Função gerar número aleatório. */
function gerarNumeroAleatorio(){
    //return parseInt(Math.random() * 10 + 1);
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSortesdos.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSortesdos = [];
    }

    if (listaDeNumerosSortesdos.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSortesdos.push(numeroEscolhido);
        console.log(listaDeNumerosSortesdos);
        return numeroEscolhido;
    }
}
 /*Função limpa campo */
function limparCampo(){
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}