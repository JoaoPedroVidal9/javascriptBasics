const age = -1
if(age < 0){
    console.log(`Idade Incorreta!`)
}else if(age < 13){
    console.log(`Alguém com ${age} ano(s) é criança!`)
}else if(age < 18){
    console.log(`Alguém com ${age} anos é adolescente!`)
}else if(age < 65){
    console.log(`Alguém com ${age} anos é adulto!`)
}else{
    console.log(`Alguém com ${age} anos é idoso!`)
}