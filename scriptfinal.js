let g = []
let num = document.getElementById ('addn')
let tab = document.getElementById('wrtn')
let res = document.getElementById('res')
function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inlista (n, l){
    if  (l.indexOf(Number(n)) != -1){
        return true
    }   else {
        return false
    }
}
function add() {
    if (isnumero(num.value)&& !inlista(num.value, g)){
        g.push(Number(num.value))        
        let item = document.createElement('option')
        item.text = (`Valor ${num.value} adicionado.`)
        tab.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert(`Insira um número válido.`)
    }
    num.value = ''
    num.focus()
}
function fim (){
    if (g.length == 0){
        window.alert(`Adicionar valores antes de finalizar.`)
    } else {
        let tot = g.length
        let maior = g [0]
        let menor = g[0]
        let soma = 0
        let media = 0

            for(let pos in g){
                soma +=g[pos]
                if(g[pos] > maior){
                    maior = g[pos]
                }
                if (g [pos]< menor){
                    menor = g[pos]
                }                          
            }
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todos, temos ${tot} números cadastrados.</p>`
            res.innerHTML += `<p>O maior valor cadastrado é ${maior} </p>`
            res.innerHTML += `<p>O menor valor cadastrado é ${menor} </p>`
            res.innerHTML += `<p>A soma dos valores inseridos é ${soma}.</p>`
            res.innerHTML += `<p>A média dos valores informados é ${soma/tot}.</p>`

    }
}