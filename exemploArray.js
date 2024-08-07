let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 88, 11, 22, 31, 42];
for(let i = 0; i < numeros.length; i++){
    num = numeros[i];
    if(num % 2 === 0){
        //Par
        console.log(`O número ${num} é PAR!!!`);
    }else{
       //Impar
       console.log(`O número ${num} é IMPAR!!!`);
    }
}
