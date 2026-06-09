// ✅ REGISTRAR
function registrar(){
    let user = document.getElementById("nuevoUsuario").value;
    let pass = document.getElementById("nuevoPassword").value;

    console.log("Registrando:", user, pass);

    if(user === "" || pass === ""){
        document.getElementById("mensaje").innerText = "⚠️ Completa todos los campos";
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    let existe = usuarios.find(u => u.user === user);

    if(existe){
        document.getElementById("mensaje").innerText = "❌ Usuario ya existe";
        return;
    }

    usuarios.push({ user, pass });

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    document.getElementById("mensaje").innerText = "✅ Usuario creado correctamente";

    console.log("Usuarios guardados:", usuarios);

    setTimeout(() => {
        window.location.href = "login.html";
    }, 1200);
}


// ✅ LOGIN
function login(){
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;

    console.log("Intento de login:", user, pass);

    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    console.log("Usuarios en sistema:", usuarios);

    if(usuarios.length === 0){
        document.getElementById("error").innerText = "⚠️ No hay usuarios registrados";
        return;
    }

    let valido = usuarios.find(u => u.user === user && u.pass === pass);

    if(valido){
        localStorage.setItem("usuario", user);

        console.log("Login correcto ✅");

        window.location.href = "index.html";
    } else {
        console.log("Login incorrecto ❌");

        document.getElementById("error").innerText = "❌ Usuario o contraseña incorrectos";
    }
}