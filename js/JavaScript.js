//FUNCIONES DEL NAVEGADOR

function iniciarSesion() {
    //  prompt("Ingresa tu usuario")

    swal("Inicia sesión con tu nombre de usuario", {
        content: 'input',
    })
        .then((value) => {
            swal("¡Bienvenido/a!", value, "success");
            document.getElementById('usuario').innerHTML = value;
            document.getElementById('cerrarSesion').style.display = 'block'

            localStorage.setItem('nombreUsuario', value)

            document.getElementById('usuario').style.display = 'block'
            document.getElementById('iniciar-Sesion').style.display = 'none'
        });
}

var usuario = localStorage.getItem('nombreUsuario')

if (usuario != null) {
    document.getElementById("usuario").innerHTML = usuario;
    document.getElementById("cerrarSesion").style.display = 'block';
    document.getElementById("iniciar-Sesion").style.display = 'none';
    console.log("si existe el usuario")
} else {
    console.log("no existe el usuario")
}

function cerrarSesion() {

    swal("Regrese Pronto!", localStorage.getItem('nombreUsuario'), "warning");
    localStorage.removeItem('nombreUsuario')
    document.getElementById("cerrarSesion").style.display = 'none';
    document.getElementById('usuario').innerHTML = ""
    document.getElementById("iniciar-Sesion").style.display = 'block';
}

//FUNCIONES DE CARTELERA.HTML