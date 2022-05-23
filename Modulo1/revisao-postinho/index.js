
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 3));

// function checarIgualdade(a, b) {
//      return (a === b)   
// }
// console.log (checarIgualdade(1,2));

// function verificaSeEMaior(a,b) {
//     return (a > b)
// }
// console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= faslse
// c-) 'a'==='b'= false
// d-) 'b'>'a'=  defined
// e-) 0!==null= null


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

// const cadastro = () => {

//     let usuario = [] 
//     let nomeDousuario= prompt("Qual é o seu nome?")
//     let anoNacimento= +prompt("Em qual ano voce nasceu?")
//     let nacionalidade = prompt("Qual é a sua nascionalidade?")
//     let senhaDoUsuario =+prompt("Digite una senha de 6 digitos ")
//     let idade =(2021 - anoNacimento)
//     if (idade >= 18) { usuario.push(idade) }
//     else if (senhaDoUsuario.length === 6) {usuario.push(senhaDoUsuario) }
//     else if (nacionalidade.toLocaleLowerCase >= 18) {usuario.push(brasileira) }
//     else {console.log("voce nao pode concluir o cadastro por falta de pre-requesitos")}
//     usuario.push(nomeDousuario)
// console.log (usuario)



// Exercício 4-----------------------------------------------------------------------------------------------
// function login() {
//     let PedirSenha = prompt("digite uma senha")
//     let PedirSenha1= prompt ("confirme a tua senha ")
//     if (PedirSenha === PedirSenha1){ console.log ("Usuario logado")}
//     else{console.log("Senha Inválida")}
// }
// console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {
   

// let nome = prompt("Qual é o teu nome ?")
// let vacina = prompt(" Qual a  vacina que voce tomou Pfizer,Astrazenica,Coronavac ?")
// let tempoVac = 28
// let dataVac = ( "29/08/2021")

// let tempoAstra = 30
// let dataAstra = ( "30/08/2021")

// let tempoPizer = 30
// let dataPizer = ( "30/08/2021")

// if (vacina === "Coronavac"){
//  console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempoVac} dias. 
//  Compareça no posto na data ${dataVac}.`)}

//  else if (vacina === "Astrazenica"){
//  console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempoAstra} dias. 
//  Compareça no posto na data ${dataAstra}.`)}

//  else if (vacina === "Pfizer"){
//     console.log(`Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempoPizer} dias. 
//     Compareça no posto na data ${dataPizer}.`)}
// else {console.log ("vacina nao encontrada")}
// return primeiraDose()        
// }

// console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
    const cambioDeEstado = segundaDose.map((estado) => {
		return {...estado, imunizacao: estado.imunizacao }

    })
}

console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());