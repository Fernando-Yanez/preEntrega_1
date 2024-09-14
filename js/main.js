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
    opcion = prompt('Ingrese opcion a realizar \n 1 = validador de numero de tarjeta de credito  \n 2 = validador de IMEI \n 3 = Salir')

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
                
                if(numeroTarjetaInvertido.length == 16 && validadorNumero(numeroTarjetaInvertido))
                { suma = 0;
                    for(let y = 0; y<=15; y++)
                    { 
                        multiplos = parseInt(numeroTarjetaInvertido[y] );

                        if(alternar)
                        {
                            
                            multiplos *= 2;


                            if(multiplos > 9){
                                
                                multiplos -= 9;
                            }


                        }
                        suma += multiplos;

                        
                        alternar = !alternar;
                    }

                    if(suma % 10 === 0 )
                    {
                        console.log('Numero de tarjeta es correcto ');
                        termino = false;
                        
                    }
                    else
                    {
                        console.log('Numero de tarjeta es incorrecto ');
                        
                        
                    }
                }else{console.log('Numero de tarjeta invalido ');}

            }



            break;

        case '2':
            let imei = prompt('Ingrese IMEI');
            let imeIvertido = invertirNumero(imei);
            console.log('En contruccion')
            break;
        case '3':

            salida = false;
            break;
        default:
            console.log('Opcion invalida ');
    }

}
while (salida)
