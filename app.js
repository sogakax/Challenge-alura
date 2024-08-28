document.addEventListener("DOMContentLoaded", function() {
    const inputTexto = document.getElementById("input-texto");
    const resultadoVacio = document.getElementById("resultado-vacio");
    const resultadoLleno = document.getElementById("resultado-lleno");
    const resultadoDelEjercicio = document.getElementById("resultado-del-ejericio");

    function encriptarTexto(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function desencriptarTexto(texto) {
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    function copiarTexto() {
        resultadoDelEjercicio.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles");
    }

    function mostrarResultado(texto) {
        resultadoDelEjercicio.value = texto;
        resultadoVacio.classList.add("hidden");
        resultadoLleno.classList.remove("hidden");
    }

    document.getElementById("boton-encriptar").addEventListener("click", function() {
        let texto = inputTexto.value;
        let textoEncriptado = encriptarTexto(texto);
        mostrarResultado(textoEncriptado);
    });

    document.getElementById("boton-desencriptar").addEventListener("click", function() {
        let texto = inputTexto.value;
        let textoDesencriptado = desencriptarTexto(texto);
        mostrarResultado(textoDesencriptado);
    });

    document.getElementById("boton-copiar").addEventListener("click", copiarTexto);
});