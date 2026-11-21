//Funciones para calcular talles
function calcularPorDiametro(){
    let valor = parseFloat(document.getElementById('diametro').value);
    let elResultado = document.getElementById("resultadoDiametro");
    if (isNaN(valor)) {
        elResultado.innerText = "Ingresa un valor válido";
        elResultado.className = "resultado-error";
        return;
    }

    let talle = 'Su talle es: ' + ((valor * 3.1416) - 40).toFixed(1);
    elResultado.innerText = talle;
    elResultado.className = "resultado-destacado";
}

function calcularPorCircunferencia() {
    let valor = parseFloat(document.getElementById('circunferencia').value);
    let elResultado = document.getElementById("resultadoCircunferencia");
    if (isNaN(valor)) {
        elResultado.innerText = "Ingresa un número válido";
        elResultado.className = "resultado-error";
        return;
    }
    let talle = 'Su talle es: ' + (valor - 40).toFixed(1);
    elResultado.innerText = talle;
    elResultado.className = "resultado-destacado";
}