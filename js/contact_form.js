// Esta función valida los campos obligatorios
function valida_form () {
    
    fc = document.fcontact;
    nombre = fc.name.value;
    
    //Valida el campo Nombre
    if (fc.name.value == "") {
        alert("Debe ingresar el Nombre");
        fc.name.focus();
        return 0;
    }
    //Valida el campo Apellido
    if (fc.lastname.value == "") {
        alert("Debe ingresar el Apellido");
        fc.lastname.focus();
        return 0;
    }
    //Valida el campo Nacionalidad
    if (fc.country.value == "Escoge una opción...") {
        alert("Debe ingresar la Nacionalidad");
        fc.country.focus();
        return 0;
    }
    //Valida el campo Email
    if (fc.email.value == "") {
        alert("Debe ingresar el email");
        fc.email.focus();
        return 0;
    }
    //Valida el campo Mensaje
    if (fc.message.value == "") {
        alert("Debe ingresar un mensaje");
        fc.message.focus();
        return 0;
    }

    fc.submit();
}
