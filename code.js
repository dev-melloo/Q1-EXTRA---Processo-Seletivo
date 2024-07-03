positivos = 0
for (i=0;i<6;i++){
    num = parseInt(prompt("Digite um numero!"))
    if (num > 0){
    // não considerei o "0" um numero positivo
        positivos++
    }
}
console.log("O total de valores positivos digitados foram " + positivos + " valores!")
