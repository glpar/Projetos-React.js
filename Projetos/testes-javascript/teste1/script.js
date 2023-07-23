/* Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F
*/

function notas (nota) {

let notaf

if(nota >= 90){
    notaf = "A"
}

else if(nota >= 80 && nota <= 89){
    notaf = "B"
}

else if(nota >= 70 && nota <= 79){
    notaf = "C"
}

else if(nota >= 60 && nota <= 69){
    notaf = "D"
}

else if(nota < 60){
    notaf = "F"
};

    console.log(notaf)
}

notas(80)
notas(55)
