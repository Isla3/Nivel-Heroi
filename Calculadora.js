let resultado = saldo(100,5)

function saldo(vitorias, derrotas){
let saldoRankeada = vitorias - derrotas
return saldoRankeada}

fNivel()
function fNivel() {
    
    if (resultado < 10){
   console.log ("O herói tem saldo de: "+resultado+ " e está no nível Ferro")
   }
   else if (resultado <= 20){
   console.log ("O herói tem saldo de: "+resultado+ " e está no nível Bronze")
   } 
   else if (resultado <= 50){
   console.log ("O herói tem saldo de: "+resultado+ " e está no nível Prata")
   }
   else if (resultado <= 80){
   console.log ("O herói tem saldo de: "+resultado+ " e está no nível Ouro")
   }
   else if (resultado <= 90){
   console.log ("O herói tem saldo de: "+resultado+ " e está no nível Diamante")
   }
   else if (resultado <= 100){
   console.log ("O herói tem saldo de: "+resultado+ " e está no nível Lendário")
   }
   else if (resultado >= 101){
   console.log ("O herói tem saldo de: "+resultado+ " e está no nível Imortal")
   }
   }