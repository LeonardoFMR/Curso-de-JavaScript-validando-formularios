export default function esMayorDeEdad(campo) {
    const fechaNacimiento = new Date (campo.value);
    if(!validarEdad(fechaNacimiento)){
        campo.setCustomValidity("Eres muy morrillo")
    }
}

function validarEdad(fecha){
    const fechaActual = new Date();
    const fechaMas18 = new Date(fecha.getUTCFullYear()+18, fecha.getUTCMonth(), fecha.getUTCDate());
  
    return fechaActual >= fechaMas18;
}