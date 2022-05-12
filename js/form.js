function valida_envia() {
    
    if (document.formulario.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre")
        return 0;
    } 

    if (document.formulario.email.value.length == 0) {
        alert("Tiene que escribir su email")
        return 0;
    } 

    if (document.formulario.fechaHoraNac.value.length == 0) {
        alert("Por favor, indíquenos su fecha y hora de nacimiento.")
        return 0;
    } 
    
    alert("¡Muchas gracias por enviar el formulario!");
   	document.formulario.boton.submit();
}