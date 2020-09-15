var intentos = 4;
var contenidoAdivinanza = document.querySelector("#adivinanza");
var respuesta = document.querySelector("#respuesta");
var enviarRespuesta = document.querySelector("#enviarRespuesta");
var respCorrecta = 'business intelligence and data analytics';


function readIntentos() {
    var cantIntentos = document.querySelector("#cantIntentos strong");
    var paraNumero = document.createElement('strong');
    var numero = document.createTextNode(intentos);
    paraNumero.appendChild(numero);
    cantIntentos.parentElement.replaceChild(paraNumero, cantIntentos);
}

readIntentos();

function adivinanza() {

    if ((respuesta.value.toLowerCase()) === respCorrecta) {
        intentos--;
        enviarRespuesta.setAttribute('disabled', '');
        Swal.fire({
            icon: 'success',
            title: 'Excelente. Así se hace!',
            showConfirmButton: false,
            timer: 2500
          }) 
    } else {
        console.log(respuesta.value);
        intentos--;

        Swal.fire({
            icon: 'warning',
            title: 'Respuesta incorrecta',
            text: 'Pista: La primer palabra es business',
          })

        if (intentos === 2) {
            console.log(respuesta.value);
            Swal.fire({
                icon: 'warning',
                title: 'Respuesta incorrecta',
                text: 'Ojo con el ingles!',
              })

        } else if (intentos === 1) {
            console.log(respuesta.value);
            Swal.fire({
                icon: 'warning',
                title: 'Respuesta incorrecta',
                text: 'Pista: la ultima es analytics',
              })
        } else if (intentos === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops se acabaron tus intentos',
                text: 'Carga la página de nuevo si quieres volver a intentarlo'
              })
            enviarRespuesta.setAttribute('disabled', '');
        }

    }
    readIntentos();

}


