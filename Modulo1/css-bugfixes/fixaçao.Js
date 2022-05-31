function resultado(a,c,b) {
    
    let soma = (a + b + c)
     let calculo = (soma* 10 / 30)    
     if (calculo>9||calculo ===9){
       console.log("A")}
          else if (calculo<9||calculo === 7.5||calculo>7.5){
       console.log("B")}
          else if (calculo<7.5||calculo ===6||calculo>6){
       console.log("C")}
          else if (calculo < 6 ){
       console.log("D")
          }
          return calculo
        }
        console.log(resultado(nota1,nota2,nota3))