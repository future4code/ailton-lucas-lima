// const frase = prompt("Escreva tres palavras")


// console.log (frase.toUpperCase())
// console.log (frase.replaceAll("o" , "i"))
// console.log (frase. length)

// EXERCICIOS DE HOJE

// let array
// console.log('a. ', array)

// array = null
// console.log('b. ', array)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i])

// array[i+1] = 19
// console.log('e. ', array)

// const valor = array[i+6]
// console.log('f. ', valor)

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// let Nome =prompt("Qual é o seu nome")
// let Email =prompt("Digite o seu email por favor ..")

// let Frase = (`O e-mail  ${Email} foi cadastrado com sucesso. 
// Seja bem-vinda(o) ${Nome}!`)

// console.log(Frase)



// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, 
// armazenado em uma variável. Em seguida, siga os passos:
    
//     a) Imprima no console o array completo
    
//     b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ",
//      seguida por cada uma das comidas, **uma embaixo da outra**.
    
//     c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
//     Troque a segunda comida da sua lista pela inserida pelo usuário. 
//     Imprima no consolea nova lista

let comidas = ["Pizza","salada","churrasco","pasta","hamburger"]
console.log (comidas)

// let comida1 = Number (comidas)


// comidas.splice(1,1)

let pergunta = prompt("Qual é a sua comida preferia")

comidas.splice(1,1)
comidas.push(pergunta)
console.log (comidas)


