function vasco(n1,n2) {
    let res = n1 * n2
    return res
}

let titi = document.querySelector('h1')

document.querySelector('button').onclick = function () {
    alert('Sabe ler não fi')
    titi.innerHTML = 'vasco'
    
}

function cum(F) {
    C = (F - 32) * 5/9
    return C
}

function con(cel) {
    let f = (cel * 1.8) + 32
    return f
    
}

//==================================================================


let number1 = document.getElementById('num1') 
let number2 = document.getElementById('num2')

let Ma = document.getElementById('mais')
let Me = document.getElementById('menos')
let Div = document.getElementById('divisao')
let mult = document.getElementById('multi')

let btn = document.getElementById('Btn')

let resu = document.getElementById('res')

function Fmais(number1, number2) {
    res = number1 + number2
    alert(res)
}

if (btn === btn.onclick) {
    if (M === Ma.onclick) {
        Fmais()
    }
    if (Me === Me.onclick) {
        res.innerHTML = Fmenos()
    }
}

