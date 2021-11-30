
function capturar() {
    var capturando = "";
    var quadrado = [];
    capturando = document.getElementById("valor").value;
    for (let x = 0 ; x < capturando; x++){
        for (var i = 0; i < capturando; i++){
            quadrado.push("*");
            if (i === capturando-1){
                quadrado.push("<br>")
            }
        }
    }
    
    quadrado = quadrado.join("")
    document.getElementById("valorDigitado").innerHTML = quadrado
}