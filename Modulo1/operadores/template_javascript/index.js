// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)

// RESULTADO DO EXERCICIO   (aFALSE) (bFALSE) (cTRUE) (TYPEOF d = BOLEAN)

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// let Numero1 = Number (primeiroNumero)
// let numero2 = Number (segundoNumero)
// const soma = Numero1 + numero2

// console.log(soma)

// obs: A SOLUCAO PARA QUE O PROGRAMA FAÇA A SOMA DOS DOIS NUMEROS INSERIOS PELO USUARIO
// SERIA A MUDANÇA DO (primeiroNumero E segundoNumero) DO ESTADO DE STRING PARA 
// NUMBER PARA ASSIM REALIZAR A SOMA DOS DOIS 


// let idade1 = prompt("Idade do usuario")
// let idade2 = prompt("Coloque a idade do seu melhor amigo")

// let usuario = Number (idade1)
// let amigo = Number (idade2)

// let idade = usuario > amigo
// let calculo = usuario - amigo 
// console.log ("A sua idade é maior que a do seu amigo ? t/F = ", idade,)
// console.log("A diferença de idade é de", calculo,"anos de idade " )


// let usuario = prompt ("Insira um numero par")
// let NUMEROS = Number (usuario)

// let divisao = NUMEROS / 2
// let resto = NUMEROS % 2

// console.log ("A resposta dividida por dois é",divisao, "e o resto é", resto,)

// console.log ("todos os numeros par sao divisies por 2 e o resultado do restante sera sempre 0")



// let usuario = prompt ("Qual é a tua idade ?")
// let numero = Number (usuario)

// let meses = numero * 12 
// let dias = numero * 365
// let horas = 24 * dias

// console.log("Voce ja viveu ",numero,"anos", meses ,"meses" ,dias,"dias",horas,"horas de vida")

let NumeroA = prompt ("Insira o primeiro numero")
let NUMEROB = prompt ("Insira o segundo numero")

let primeiro = Number (NumeroA)
let segundo = Number (NUMEROB)

let a = primeiro > segundo
let b = primeiro === segundo
let c = primeiro % segundo === 0
let d = segundo % primeiro === 0




console.log ("O primeiro numero é maior que segundo?",a,) 
console.log ("O primeiro numero é igual ao segundo?",b,) 
console.log ("O  primeiro numero é divisível pelo segundo?",c,) 
console.log ("O segundo numero é divisível pelo primeiro?",d,) 

// obs: O true ou false vai depender dos números inseridos e do resultado das operações.