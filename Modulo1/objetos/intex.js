// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])
// ...........................................................................




// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)


// ...........................................................................


// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// .....................................................................

// A_ a) Crie um objeto. Ele deve conter duas propriedades:
//  nome (string) e apelidos (um array que sempre terá exatamente três apelidos).
//   Depois, escreva uma função que recebe 
// como entrada um objeto e imprime uma mensagem no modelo abaixo:


// let Objeto = {
// Nome: "lauro",
// Apelidos : ["cantor","capivara","patu"]   
// }


// function nomes (obj) {
//     console.log(`Eu sou ${obj.Nome}, mas pode me chamar de:${obj.Apelidos[0]},
//     ${obj.Apelidos[1]},${obj.Apelidos[2]}`)

// }
// nomes(Objeto)



// let objeto2 = {
// ...Objeto,
// Apelidos : ["guga","japo","parceiro"]
// }
// nomes(objeto2)



// ------------------------------------------------------

// let irmao = {
//     nome: "guilherme",
//     idade:  30,
//     profissao: "medico"
// }
// let irma = {
//     nome: "carol",
//     idade:26,
//     profissao: "professora"
// }

// function resultado(obj1) {
//     array = obj1
//     console.log ([`${array.nome}, ${array.nome.length}, ${array.idade},${array.profissao.length} `])
//     return resultado
// }

// resultado(irma)

// ..............................................................................................
 
let carrinho = []

let objeto1 = {
nome : "morango",
disponibilidade : true
}
let objeto2= {
    nome : "manga",
    disponibilidade: "false"
}
let objeto3 = {
nome: "uva",
disponibilidade: true
}

function repartir(fruta) {
    carrinho.push(fruta)
return repartir
}

repartir(objeto1)
repartir(objeto2)
repartir(objeto3)
 console.log(carrinho)