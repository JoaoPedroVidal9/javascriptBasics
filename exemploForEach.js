let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 99, 75, 92, 43, 25, 664, 7, 8, 6, 567, 0];

// Estrutura de repetição usando forEach

numbers.forEach((num) =>{
    if(num%2===0){
        console.log(`O número ${num} é PAR!!!`);
    }else{
        console.log(`O número ${num} é IMPAR!!!`);
    }
})