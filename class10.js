function mostrarResultado(total){
    let resultado = document.getElementById("resultado");
    resultado.value = total;
    return total;
}

function sumar(){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    
    
    return mostrarResultado(+numero1 + +numero2);
}

function restar(){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    
    
    return mostrarResultado(+numero1 - +numero2);
}

function multiplicar(){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    
    
    return mostrarResultado(+numero1 * +numero2);
}

function dividir(){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    
    
    return mostrarResultado(+numero1 / +numero2);
}

function potenciar(){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;

    return mostrarResultado(Math.pow(+numero1,+numero2));
}

function raiz(){
    let numero2 = document.getElementById("num2").value;

    return mostrarResultado(Math.sqrt(numero2));
}

function absoluto(){
    let resultado = document.getElementById("resultado").value;

    return mostrarResultado(Math.floor(+resultado));
}

function aleatorio(){
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;

    return mostrarResultado(Math.floor(Math.random(+numero1, +numero2 - +numero1)*10))
}