
function crip() {
    let input = document.getElementById("hento").value;
    let output = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("henti").value = output;
}


function descri() {
    let input = document.getElementById("hento").value;
    let output = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("henti").value = output;
}


function copy() {
    let copyText = document.getElementById("henti");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Texto copiado: " + copyText.value);
}


function limpa() {
    document.getElementById("hento").value = "";
    document.getElementById("henti").value = "";
}
