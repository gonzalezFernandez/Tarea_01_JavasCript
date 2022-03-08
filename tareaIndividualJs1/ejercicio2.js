function solicitudAlturas(n){
    let alturas = [] ;

    for (let index = 0; index < n; index++) {
        alturas[index] = parseFloat(prompt("Introduce la altura numero " + (index+1)));
    }
    return alturas;
}

function promedio(alturas){
    let total = 0;
    alturas.forEach(element => {
        total = total + element;
       // console.log(total);
    });

    let promedio = total/(alturas.length);
   // console.log(promedio);
    return promedio;
}

n = parseInt(prompt("Introduce el numero de alturas: "));
let alturas = solicitudAlturas(n);
console.log(alturas);
console.log("La media de las alturas introducidas es: " + promedio(alturas));