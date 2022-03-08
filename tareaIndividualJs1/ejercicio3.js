 
 function solicitudEmpleados(n){
    let empleados = [] ;

    for (let index = 0; index < n; index++) {
        do{
        empleados[index] = parseInt(prompt("Introduce el sueldo del empleado numero " + (index+1)+ " (entre 100 y 500)"));
        }while (empleados[index]<100 || empleados[index] > 500);
    }
    return empleados;
}

function countEmpleados(empleados){
    let mayorQueTrescientos = 0;
    empleados.forEach(element => {
        if(element < 300){
            mayorQueTrescientos++;
        }
    });
    console.log("Empleados que cobran entre 100 y 300: "+ (empleados.length - mayorQueTrescientos)
    +"\nEmpleados que cobran más de 300: "+ mayorQueTrescientos);
}

function importeTotal(empleados){
    let total = 0;
    empleados.forEach(element => {
        total = total + element;
    });

    return total;
}

n = parseInt(prompt("Introduce el numero de empleados: "));
let empleados = solicitudEmpleados(n);
console.log(empleados);
countEmpleados(empleados);
console.log("El gasto total de la empresa en sueldos es de: "+importeTotal(empleados));
