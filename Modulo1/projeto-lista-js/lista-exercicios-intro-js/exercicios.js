// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógicanum1: 1

      soma (num1+num2)

      

  return 3
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt("hola mundo")

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo( a , b ) {
  // implemente sua lógica aqui
  let calculaAreaRetangulo =  a * b
// let altura  =prompt("coloque uma altura do restangulo ")
//  let largura  =prompt("coloque uma largura do retangulo ")
// let altura1=Number(altura)
// let largura1=Number(largura)
let altura1 = 3
let largura1 = 5

let resultado = calculaAreaRetangulo( altura1 , largura1 )
console.log (resultado)



} 

// EXERCÍCIO 02
function imprimeIdade( a , b) {
  // implemente sua lógica aqui

  let imprimeIdade =   a - b
let nascimento = (1967)
let anoAtual =(2021) 

let resultado = imprimeIdade (nascimento , anoAtual)

console.log (resultado)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let AlturaUsuario =prompt("sua altura")
  let PesoDoUsuario =prompt(" seu peso ") 

  let peso1 =Number(PesoDoUsuario)
  let altura1= Number(AlturaUsuario)

   let calculaIMC = (altura * altura)  / peso 
   
   let imc = calculaIMC (altura1,altura1,peso1)
console.log (imc)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email ) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt(" Qual é o sue nome ?")
let idade = prompt("Qual é a sua idade ?")
let email = prompt("Qual é o seu email ")

let frase = imprimeInformacoesUsuario ( `Meu nome é ${nome},
 tenho ${idade} anos, e o meu email é ${email}.`)

console.log(frase)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1,cor2,cor3) {
  // implemente sua lógica aqui
let cor1=prompt("Digite uma cor")
let cor2=prompt("Digite outra cor")
let cor3=prompt("Digite uma terceira cor")
 let cores= imprimeIdade [cor1,cor2,cor3]
 console.log (cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
let retornaStringEmMaiuscula = string.toUppercase()
let palavra= ( "palavra" )

console.log (retornaStringEmMaiuscula (palavra))

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
   calculaAreaRetangulo = (custo / valorIngresso) 

let ingresso = 100 
let espetaculo= 3000

let resultado = calculaIngressosEspetaculo (espetaculo, ingresso)
console.log (resultado)
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
checaStringsMesmoTamanho = string1.length()===string2.length() 

let palavra1 = ("casa")
let palavra2 = ("maca")

let resultado =checaStringsMesmoTamanho (palavra1,palavra2)

console.log (resultado)

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
retornaPrimeiroElemento = array [0]

let numeros = [1,2,3,4,5]
let resultado = retornaUltimoElemento (numeros)

console.log (resultado)
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
retornaUltimoElemento = array [6]

let numeros = [1,2,3,4,5,6]
let resultado = retornaUltimoElemento (numeros)

console.log (resultado)

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array1, array2, array3) {
  // implemente sua lógica aqui
trocaPrimeiroEUltimo = array1 [0] = [5]
                        


let perros = [pudle , putbull , york ]
let perrosNumero = Number(perros)

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

 checaStringsMesmoTamanho = string1.length , string2.length , string1 !== string2

let tamanho1= (palavra)
let tamanho2 = (palavra2)

let resultado = checaStringsMesmoTamanho(tamanho1,tamanho2)

console.log (resultado)
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}