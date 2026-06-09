// 🔐 PROTEGER LA PÁGINA
if(!localStorage.getItem("usuario")){
    window.location.href = "login.html";
}

// 📦 LISTA DE PEDIDOS
let pedidos = [];
let pinGenerado = null;

// 📲 GENERAR PEDIDO
function generarPIN(producto){

    pedidos.push(producto);

    let lista = document.getElementById("listaPedidos");
    lista.innerHTML = "";

    pedidos.forEach(p => {
        let item = document.createElement("li");
        item.textContent = p;
        lista.appendChild(item);
    });

    // Generar PIN solo una vez
    if(!pinGenerado){
        pinGenerado = Math.floor(1000 + Math.random() * 9000);
    }

    document.getElementById("pin").innerText = pinGenerado;

    document.getElementById("mensaje").innerText =
        "✅ Pedido agregado. Tu PIN es: " + pinGenerado;
}

// 🚪 CERRAR SESIÓN
function logout(){
    localStorage.removeItem("usuario");
    window.location.href = "login.html";
}