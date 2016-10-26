function validateForm(){
	
	//Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
    var letra = document.getElementById('name').value;
    if (letra.length <=2 || /^\s+$/.test(letra) || /^[a-zA-Z]*$/.test(letra) == false) {
        alert ("Ingresa un carácter valido");
        return false;
    }

    //Validar que el campo email tenga un formato válido
    var correo = document.getElementById('input-email').value;
    if (correo == null || correo.length < 0||/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correo) != true){
        alert ("Ingresa un correo electrónico válida");
        return false;  
   }

   //El campo password debe tener al menos 6 caracteres
    var caracteres = document.getElementById('input-password').value;
    if (caracteres == null || caracteres.length<6) {
        alert ("Tu contraseña debe tener por lo menos 6 caracteres")
        return false;
    }
    //El campo password no puede ser igual a "password" ó "123456" ó "098754"
    else if (caracteres == '123456'|| caracteres =='098754' || caracteres == 'password'){
        alert ("Contraseña invalida");
        return false;
    }

    //El valor seleccionado de bicis, debe ser una de las opciones presentadas
    var bicis = document.querySelector('select').value;
    if (bicis == 0) {
        alert("Elige bicis entre estas opciones");
        return false;
    }

    

	
}