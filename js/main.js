function validateForm(){
	
	//Nombre
	//var nombre= document.getElementById("name").value;
	var nombre= $('#name').val();
	//Co$mprueba nombre vacio
	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre)) {
  		//alert("El nombre debe ser ingresado");
		//var contenedorNombre = document.getElementsByClassName('name-container')[0];
		//var error = document.createElement("span"); 
		//var mensajeError = document.createTextNode("¡Debe ingresar su nombre!"); 
		//error.appendChild(mensajeError);
		//contenedorNombre.appendChild(error);
		//return false;
		$("#name").parent().append("<span>¡Debe ingresar su nombre!</span>");

	//Comprueba que ingrese nombre en caracteres letras
	}else if(/^[a-zA-Z]*$/.test(nombre)===false){
		//alert("Nombre mal ingresado, pruebe nuevamente");
		//var contenedorNombre = document.getElementsByClassName('name-container')[0];
		//var error = document.createElement("span"); 
		//var mensajeError = document.createTextNode("¡Debe ingresar su nombre solo con letras!"); 
		//error.appendChild(mensajeError);
		//contenedorNombre.appendChild(error);
		//return true;
		$("#name").parent().append("<span>¡Debe ingresar su nombre solo con letras!</span>");

	//Comprueba que primera letra sea mayuscula
	}else if (nombre.charAt(0).toUpperCase()!==nombre.charAt(0)){
		//alert("La primera letra del nombre debe ser mayuscula");
		//var contenedorNombre = document.getElementsByClassName('name-container')[0];
		//var error = document.createElement("span"); 
		//var mensajeError = document.createTextNode("¡La primera letra debe ser mayuscula!"); 
		//error.appendChild(mensajeError);
		//contenedorNombre.appendChild(error);	
		//return false;
		$("#name").parent().append("<span>¡La primera letra debe ser mayuscula!</span>");
	}

	//Apellido
	//var apellido= document.getElementById("lastname").value;
	var apellido=$('#lastname').val();

	// Comprueba apellido vacio
	if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
  		//alert("El apellido debe ser ingresado");
  		//var contenedorApellido = document.getElementsByClassName('lastname-container')[0];
		//var error = document.createElement("span"); 
		//var mensajeError = document.createTextNode("¡Debe ingresar su apellido!"); 
		//error.appendChild(mensajeError);
		//contenedorApellido.appendChild(error);
		//return false;
		$("#lastname").parent().append("<span>¡Debe ingresar su apellido!</span>");

	//Comprueba que apellido sea ingresado en caracteres letras
	} else if (/^[a-zA-Z]*$/.test(apellido)===false){
		//alert("Apellido mal ingresado, pruebe nuevamente");
		//var contenedorApellido = document.getElementsByClassName('lastname-container')[0];
		//var error = document.createElement("span"); 
		//var mensajeError = document.createTextNode("¡Debe ingresar su apellido solo con letras!"); 
		//error.appendChild(mensajeError);
		//contenedorApellido.appendChild(error);
		//return true;
		$("#lastname").parent().append("<span>¡Debe ingresar su apellido solo con letras!</span>");

	// Comprueba que primera letra del apellido sea ingresada con letra mayuscula
	} else if (apellido.charAt(0).toUpperCase()!==apellido.charAt(0)){
		//alert("La primera letra del apellido debe ser mayuscula");
		//var contenedorApellido = document.getElementsByClassName('lastname-container')[0];
		//var error = document.createElement("span"); 
		//var mensajeError = document.createTextNode("¡La primera letra debe ser mayuscula!"); 
		//error.appendChild(mensajeError);
		//contenedorApellido.appendChild(error);
		//return false;
		$("#lastname").parent().append("<span>¡La primera letra debe ser mayuscula!</span>");
	}

	//Mail
	//var mail=document.getElementById("input-email").value;
	var mail=$('#input-email').val();
	var verificarMail=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

	// Compruema que campo e-mail no este vacio
	if (mail == null || mail.length == 0) {
		//alert("El mail debe ser ingresado");
		//var contenedorMail = document.getElementsByClassName('email-container')[0];
		//var error = document.createElement("span");
		//var mensajeError = document.createTextNode("¡Debe ingresar su correo electronico!"); 
		//error.appendChild(mensajeError);
		//contenedorMail.appendChild(error);
		//return false;
		$("#input-email").parent().append("<span>¡Debe ingresar su correo electronico no vacio!</span>");

	} else if( verificarMail.test(mail)) {
  		//alert("Correo ingresado correctamente");
  		return true;
  	}else{
  		//alert("ingresa correo correctamente");
  		//var contenedorMail = document.getElementsByClassName('email-container')[0];
		//var error = document.createElement("span");
		//var mensajeError = document.createTextNode("¡Debe ingresar su correo electronico!"); 
		//error.appendChild(mensajeError);
		//contenedorMail.appendChild(error);
		//return false;
		$("#input-email").parent().append("<span>¡Debe ingresar su correo electronico!</span>");
  	}

  	// Clave
  	//var password=document.getElementById("input-password").value;
  	var password=$('#input-password').val();
  	// Comprueba que campo clave no este vacio
  	if (password == null || password.length == 0 || /^\s+$/.test(password)) {
		//alert("La contraseña debe ser ingresada");
		//var contenedorPass = document.getElementsByClassName('form-group')[0];
		//var error = document.createElement("span");
		//var mensajeError = document.createTextNode("¡Debe ingresar su clave!"); 
		//error.appendChild(mensajeError);
		//contenedorPass.appendChild(error);
		//return false;
		$("#input-password").parent().append("<span>¡Debe ingresar su clave!!</span>");

	// Comprueba que clave sea al menos de 6 caracte//res
	}else if (password.length<=5){
		//alert("La clave debe ser de al menos 6 caracteres");
		//var contenedorPass = document.getElementsByClassName('form-group')[0];
		//var error = document.createElement("span");
		//var mensajeError = document.createTextNode("¡Debe ingresar su clave de al menos 6 caracteres"); 
		//error.appendChild(mensajeError);
		//contenedorPass.appendChild(error);
		//return false;
		$("#input-password").parent().append("<span>¡Debe ingresar su clave de al menos 6 caracteres!</span>");


	// Comprueba que clave no sea igual a 123456, 098754 y a password
	}else if(password==="123456" || password==="098754" || password==="password") {
		//alert("Debe ingresar clave diferente");
		//var contenedorPass = document.getElementsByClassName('form-group')[0];
		//var error = document.createElement("span");
		//var mensajeError = document.createTextNode("¡Debe una clave diferente!"); 
		//error.appendChild(mensajeError);
		//contenedorPass.appendChild(error);
		//return false;
		$("#input-password").parent().append("<span>¡Debe ingresar una clave diferente!</span>");

	}else{
		return true;
	}

	//Lista de Bicis
	//var seleccionBici=document.querySelector("select").selectedIndex;
	var seleccionBici=$('select').val();

	if(seleccionBici == null || seleccionBici == 0){
  		//alert("Debe elegir un tipo de bicicleta de la lista");
  		//var listaBicis = document.getElementsByClassName('form-group input-box')[1].classList.add('seleccion');
		//var error = document.createElement("span");
		//var mensajeError = document.createTextNode("Debe seleccionar una opcion de la lista!");
		//error.appendChild(mensajeError);
		//mensajeError.appendChild(error);											
		//return false;
		$('select').parent().append("<span>Debe seleccionar una opcion de la lista!</span>");
  		
		}
}

	
	
	






