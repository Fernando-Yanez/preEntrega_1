let suma = 0;
let total = 0;
let opcion = '';
//Ciclo para invertir numero de la tarjeta

function invertirNumero(numero) {
    let numeroInvertido = '';

    for (let i = numero.length - 1; i >= 0; i--) {

        if (!numero[i].includes(' ')) {
            numeroInvertido += numero[i];
        }
    }

    return numeroInvertido;

}

function validadorNumero(numero) {
    let contador = 0;

    for (let x = numero.length - 1; x >= 0; x--) {
        let numeroTransformado = parseInt(numero[x]);
        if (isNaN(numeroTransformado)) {
            contador++;
        }


    }

    if (contador == 0) { return true }
    else { return false }

}


let salida = true;
do {
    opcion = prompt('Ingrese opcion a realizar \n 1 = validador de numero de tarjeta de credito  \n 2 = validador de rut chileno \n 3 = Salir')

    switch (opcion) {
        case '1':
            let numeroTarjeta = '';
            let numeroTarjetaInvertido = '';
            let termino = true;
            let multiplos = 0;
            let alternar = false;

            while (termino) {
                numeroTarjeta = prompt('Ingrese numero de tarjeta de credito');
                numeroTarjetaInvertido = invertirNumero(numeroTarjeta);

                if (numeroTarjetaInvertido.length == 16 && validadorNumero(numeroTarjetaInvertido))// Validacion de la cantidad de caracteres ingresado y que no aya letras
                {
                    suma = 0;
                    for (let y = 0; y <= 15; y++) {
                        multiplos = parseInt(numeroTarjetaInvertido[y]);

                        if (alternar) {

                            multiplos *= 2;


                            if (multiplos > 9) {

                                multiplos -= 9;
                            }


                        }
                        suma += multiplos;


                        alternar = !alternar;
                    }

                    if (suma % 10 === 0) {
                        console.log('Numero de tarjeta es correcto ');
                        termino = false;

                    }
                    else {
                        console.log('Numero de tarjeta es incorrecto ');


                    }
                } else { console.log('Numero de tarjeta invalido '); }

            }



            break;

        case '2':

            let rutValidador = prompt('Ingrese el rut \n Formato 00000000-0');
            let rut = '';
            let digitoVerificador = '';

            if (rutValidador.length > 8 && rutValidador.length < 11) // Validacion de formato
            {
                if (rutValidador[8] == '-' || rutValidador[9] == '-') { // validador de formato
                    for (let a = 0; a < rutValidador.length; a++) {
                        if (rutValidador[a] != '.' && rutValidador[a] != '-') //divicion de string en 2
                        {
                            rut += rutValidador[a];
                        } else {
                            digitoVerificador = rutValidador[a + 1];
                            break
                        }
                    }

                    while (true) {
                        if (rut.length < 8) {
                            rut = '0' + rut;
                        }
                        else { break; }

                    }
                    let suma = 0;
                    if (validadorNumero(rut)) {
                        let rutInvertido = invertirNumero(rut);
                        let multiplicador = 2;

                        for (let b = 0; b < rutInvertido.length; b++) {

                            let numero = parseInt(rutInvertido[b]);
                            suma += numero * multiplicador;
                            if (multiplicador == 7) {
                                multiplicador = 2;
                            }
                            else {
                                multiplicador++;
                            }
                        }
                        let resto = suma % 11;
                        let digitoVerificadorCalculado = 11 - resto;

                        if (digitoVerificadorCalculado == 10) {
                            digitoVerificadorCalculado = 'K';
                        }
                        else if (digitoVerificadorCalculado == 11) {
                            digitoVerificadorCalculado = '0';
                        }


                        if (digitoVerificador == digitoVerificadorCalculado) {
                            console.log('El rut ingresado es válido');
                        }
                        else {
                            console.log('El rut ingresado no es válido');
                        }



                    } else {
                        console.log('Rut invalido ');
                    }


                }
                else {
                    alert('Formato invalido');
                }


            }
            else {
                console.log('Rut invalido ');
            }

            break;
        case '3':

            salida = false;
            break;
        default:
            console.log('Opcion invalida ');
    }

}
while (salida)
