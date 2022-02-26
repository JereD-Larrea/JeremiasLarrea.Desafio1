let ingreseUnNumero = parseInt(prompt("Resuelva esta cuenta matemática para que comprobemos que no es un robot: 2+3"));


while (ingreseUnNumero != 5) {

    if (ingreseUnNumero >= 1 && ingreseUnNumero <= 10) {
        for (let i = 1; i <= ingreseUnNumero; i++) {
            console.log(i + " se repitió")

            if (ingreseUnNumero != 5) {
                alert("el numero ingresado es: " + ingreseUnNumero + " La respuesta es incorrecta, pero estuvo cerca!, aún no podemos validar su identidad");
                // alert(i + " se repitio")

            }
        }
    } else {
        alert("Para validar su identidad, debe ingresar la respuesta correcta. Recuerde que debe ser en valor numérico.");
    }
    ingreseUnNumero = parseInt(prompt("Desea intentarlo nuevamente? Ingrese la respuesta correcta (2+3) para ingresar"));
}
alert(ingreseUnNumero + " Bienvenido al fin del DESAFIO nº 1");