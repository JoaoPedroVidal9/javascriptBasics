// Definindo alcançe 
const limit = 100;

console.log("Exibindo os números primos até:",limit)

for(let i = 2; i<=limit; i++){

    if(primos(i)){
        console.log(i)
    }
}

// Criando a função para verificar se um número é ou não primo
function primos(num){
    for(let i = 2; i<= Math.sqrt(num); i++){
        if(num % i === 0){
            /* Se um número(num) é divisível por qualquer número(i) entre 2 e a raíz dele(num), 
            ele não é primo*/
            return false;
        }
    }
    return true; // Se ele for primo, retorna verdadeiro(true)
}