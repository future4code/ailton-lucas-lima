
// Exercício 0A

function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Insira a altura"))
  const largura = Number(prompt("Insira a largura"))
  console.log(altura * largura)
}

//Exercício 2

function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Insira o ano atual"))
  const anoNascimento = Number(prompt("Insira seu ano de nascimento"))
  console.log(anoAtual - anoNascimento)
}

//Exercício 3

function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

//Exercício 4

function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const nome = prompt("Insira seu nome")
  const idade = prompt("Insira sua idade")
  const email = prompt("Insira seu email")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

//Exercício 5

function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Insira sua primeira cor favorita")
  const cor2 = prompt("Insira sua segunda cor favorita")
  const cor3 = prompt("Insira sua terceira cor favorita")
  console.log([cor1, cor2, cor3])
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()
}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// Exercício 9

function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// Exercício 10

function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = retornaPrimeiroElemento(array)
  const ultimo = retornaUltimoElemento(array)

  array[0] = ultimo
  array[array.length - 1] = primeiro

  return array
}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase()
}

// Exercício 13

function checaRenovacaoRG() {
  // implemente sua lógica aqui
 const anoAtual = +prompt("qual é o ano atual ?")
 const nascimento = +prompt("Em qual ano voce nasceu?")
 const AnoDeEmissao = +prompt("Ano de emissao do seu RG ?")

 const idade = anoAtual - nascimento
 const Rg = anoAtual - AnoDeEmissao

 let con1 = idade <= 20 && Rg >= 5   
 let con2 = idade <= 50 && idade > 20 && Rg >= 10  
 let con3 = idade > 50 && Rg >= 15
 
 console.log (con1||con2||con3)



}

// Exercício 14

function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
let Condiçao1 = ano % 400 === 0 
let consiçao2 = (ano % 4 === 0) && ( ano % 100 !== 0)

return (Condiçao1 || consiçao2)


}

// Exercício 15

function checaValidadeInscricaoLabenu() {
const maiorDeDezoito= prompt("Voce tem mais de 18 anos ?")
const ensinoMedioCompleto=prompt("voce possui ensino medio completo ?")
const disponibilidade= prompt("Voce dispoe de tempo para o curso?")



console.log (maiorDeDezoito==="sim"&& ensinoMedioCompleto==="sim"&& disponibilidade==="sim")

}