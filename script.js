function soma(){
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let soma = a + b
    document.getElementById("result").innerText = soma;
}

function sub(){
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let sub = a - b
    document.getElementById("result").innerText = sub;
}

function div(){
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let div = a / b
    document.getElementById("result").innerText = div;
} 

function mult(){
    let a = parseInt(document.getElementById("a").value)
    let b = parseInt(document.getElementById("b").value)
    let mult = a * b
    document.getElementById("result").innerText = mult;
}