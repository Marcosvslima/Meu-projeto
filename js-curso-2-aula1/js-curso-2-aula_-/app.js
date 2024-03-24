let numeroSorteados = []
let maxTentativas = 50
let NumeroSecreto = gerarNumeroSecreto()
let tentativas = 1

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2})
}
function exibirMensagemInicial(){
    exibirTexto('h1','jogo do numero secreto')
    exibirTexto('p','escolha um numero entre 1 e 10')
}
exibirMensagemInicial()

function verificarChute(){
    let chute = document.querySelector('input').value
    let mensagem = tentativas > 1 ? ' tentativas ' : ' tentativa '
    let mensagemDoParagrafo =`voce descubrio o numero secreto com ${tentativas} ${mensagem}`
    
    if(NumeroSecreto == chute){
        exibirTexto('h1','Acertou')
        exibirTexto('p',mensagemDoParagrafo)
        document.getElementById('reiniciar').removeAttribute('disabled')


        //exibirTexto('p','voce descubrio o numero secreto com '+ tentativas + mensagem)
       // exibirTexto('p',`voce descubrio o numero secreto com ${tentativas} ${mensagem}`)

    }else{
        if(chute > NumeroSecreto  ){
            exibirTexto('p','o numero secreto e menor')
        }else{
            exibirTexto('p','o numero secreto e maior')
        }
        tentativas++
        limparCampo()
    }
}
 
function gerarNumeroSecreto() {
   numeroEscolhido = parseInt(Math.random() * maxTentativas + 1)
   let tamanhoDaLista = numeroSorteados.length
   if(tamanhoDaLista == maxTentativas){
    numeroSorteados= []  }
  
    if(numeroSorteados.includes(numeroEscolhido)){
       return gerarNumeroSecreto()
    }else{
       numeroSorteados.push(numeroEscolhido)
       console.log(numeroSorteados)
       return numeroEscolhido
   }
   
}
function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}
function reiniciarJogo(){
    NumeroSecreto = gerarNumeroSecreto()
    tentativas = 1
    limparCampo()
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}















/*---atividades---



function Tabuada(numero){
    c = 1
    while(c <= 10){
      let tabuada = numero * c
        
     console.log(`${numero}x${c}=${tabuada}`)
     c++
    }
    return tabuada
}
console.log(Tabuada(9))


function CalcularPerimetroAriaDoCircolo(raio){
  perimetro = 2 * 3.14 * raio
  area = 3.14 * (raio**2)
  retorno = `${area} ${perimetro}`
  return retorno
}
console.log(CalcularPerimetroAriaDoCircolo(3))

function CalcularAriaPerimetro(altura,largura){
    let perimetro =( largura + altura )* 2
    let area = altura * largura
    var mensagem = `perimetro:${perimetro} area: ${area}`
    return  mensagem
    
}
console.log(CalcularAriaPerimetro(4,8))

function ConverterDolorParaReais(valorEmDolar){
    let totalEmReais = valorEmDolar * 4.80
     return totalEmReais
}
 
totalEmDolar = 100 
console.log(`${totalEmDolar} dolares equivalen a `+ parseInt(ConverterDolorParaReais(totalEmDolar)) + ` reais`)
   

function Fatorial(numero){
    c=1   
    fatorial = 1
    while (numero >= c){    
     fatorial *= c
     c++
    }
    return fatorial
   }  
   
let numero1 = 5
   
 console.log(`o fatorial de ${numero1} e `+ Fatorial(numero1))
 


function Imc(peso,altura){
    return  imc = peso/(altura**2)
}
console.log(Imc(70,1.70))



function anonima
let saudacao = function(){
    'ola mundo'
}
console.log(saudacao)

1-function s(nome){
   return `ola ${nome}`
}
console.log(s("marco"))

2-function DobraNumero(numero){
   return numero += numero
}
console.log(DobraNumero(-5))
3-function media(numero1 ,numero2,numero3){ 
    let calcMedia = (numero1 + numero2 + numero3)/3
    return calcMedia
}
console.log(media(5,5,5))
4-function MaiorNumero(a,b){
    let maior
    if (a>b){
        maior = a
    }else{
        maior = b
    }
    return maior
}
console.log(MaiorNumero(9,6))
function MultiplicacaoDoNumero(numero){
  return  numero *= numero
}
console.log(MultiplicacaoDoNumero(6))*/
