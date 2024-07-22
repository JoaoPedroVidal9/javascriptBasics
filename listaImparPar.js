//Criando uma lista de números
let nums = [0,1,2,3,4,5,6,7,8,9];

for(let i=0;i<nums.length;i++){
    let num = nums[i];
    if(num%2===0){
        console.log('O número', num,'é Par!!')
    }else{
        console.log('O número', num,'é Ímpar!!')
    }
}