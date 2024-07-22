const n1 = -2;
const n2 = 0;
const n3 = Math.sqrt(64);

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