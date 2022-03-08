function solicitudNotas(){
    let notas = [] ;

    for (let index = 0; index < 10; index++) {
        notas[index] = parseInt(prompt("Introduce la nota numero "+(index+1)));
    }
    return notas;
}

function mayorMenorQueSiete(notas){
    let contadorMayor = 0;
    notas.forEach(element => {
        if(element>=7){
            contadorMayor++;
        }
    });

    console.log("Notas mayores o iguales que 7: "+contadorMayor+"\nNotas menores que 7: "+(notas.length - contadorMayor));
}

let notas = solicitudNotas();
console.log(notas);
mayorMenorQueSiete(notas);