let nome = "Peter"
let xp = 10500

fNivel()

function fNivel() { 
    
    if (xp < 1000){
   console.log("O herói " + nome + " está no nível Ferro")
   }
   else if (xp <= 2000){
   console.log("O herói " + nome + " está no nível Bronze")
   } 
   else if (xp <= 5000){
   console.log("O herói " + nome + " está no nível Prata")
   }
  else if (xp <= 7000){
   console.log("O herói " + nome + " está no nível Ouro")
   } 
   else if (xp <= 8000){
   console.log("O herói " + nome + " está no nível Platina")
   }
   else if (xp <= 9000){
   console.log("O herói " + nome + " está no nível Ascendente")
   } 
   else if (xp <= 10000){
   console.log("O herói " + nome + " está no nível Imortal")
   }
   else if (xp >= 10001){
   console.log("O herói " + nome + " está no nível Radiante")
  }
 }