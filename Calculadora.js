function saldo(){
let vitorias = 100
let derrotas = 4
let saldoRankeada = vitorias - derrotas;
console.log("Saldo Rankeada: " + saldo)}

function fNivel() {
    let rankeado = saldo
    let nivel = ""
    
    if (rankeado < 10){
   nivel = "Ferro"
   }
   else if (rankeado <= 20){
   nivel = "Bronze"
   } 
   else if (rankeado <= 50){
   nivel = "Prata"
   }
 else if (rankeado <= 80){
   nivel = "Ouro"
  }
  else if (rankeado <= 90){
   nivel = "Diamante"
   }
else if (rankeado <= 100){
   nivel = "Lendário"
   }
   else if (rankeado >= 101){
   nivel = "Imortal"
   }
   }
   console.log("O herói tem saldo de: " + rankeado + " e está no nível de: " + nivel)