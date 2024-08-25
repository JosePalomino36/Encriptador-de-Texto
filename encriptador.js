function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let toys = document.getElementById("toys");
    
    let textoCifrado = texto
        .replace(/e/ig,"enter")
        .replace(/i/ig,"imes")
        .replace(/a/ig,"ai")    
        .replace(/o/ig,"ober")
        .replace(/u/ig,"ufat");
    
        if(texto.length !=0){
            document.getElementById("texto").value = textoCifrado;
            tituloMensaje.textContent = "Texto encriptado con éxito";
            parrafo.textContent = "";
            toys.src = "./img/encriptado.jpg";
            } else {
                toys.src = "./img/toys.jpg";
                tituloMensaje.textContent = "Ningún Mensaje Encontrado";
                parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
                alert("Debes ingresar algún texto");
            }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let toys = document.getElementById("toys");

    let textoCifrado = texto
    .replace(/enter/ig,"e")
    .replace(/imes/ig,"i")
    .replace(/ai/ig,"a")    
    .replace(/ober/ig,"o")
    .replace(/ufat/ig,"u");

    if(texto.length !=0){
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        toys.src = "./img/desencriptado.jpg";
        } else {
            toys.src = "./img/toys.png";
            tituloMensaje.textContent = "Ningún Mensaje Encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            alert("Debes ingresar algún texto");
        }

}

