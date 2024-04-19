// Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente

    // Obtener los valores de los campos de entrada
    var nombre = document.forms["form"]["nombre"].value;
    var email = document.forms["form"]["email"].value;
    var asunto = document.forms["form"]["asunto"].value;
    var mensaje = document.forms["form"]["mensaje"].value;

    // Validar que todos los campos estén llenos
    if (nombre == "" || email == "" || asunto == "" || mensaje == "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert("Por favor, introduzca una dirección de correo electrónico válida.");
        return false;
    }

    // Si todos los campos están llenos y el correo electrónico es válido, enviar el formulario
    alert("¡Formulario enviado correctamente!");
    // Aquí podrías agregar código adicional para enviar el formulario a un servidor
}

// Agregar el evento submit al formulario
document.forms["form"].addEventListener("submit", validarFormulario);
