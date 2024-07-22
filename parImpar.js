const n1 = -2;            //Número 1
const n2 = 0;             //Número 2
const n3 = Math.sqrt(64); //Número 3

function parImpar(num){
    if(num%2 === 0){
        return "Par";
    }else{
        return "Impar";
    }
}

console.log("O número 1 é", parImpar(n1));
console.log("O número 2 é", parImpar(n2));
console.log("O número 3 é", parImpar(n3));