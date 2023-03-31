function contar() {
    let inicio = document.getElementById(`inicio`)
    let fim = document.getElementById(`fim`)
    let passo = document.getElementById(`passo`)
    let resultado = document.getElementById(`resultado`)
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert(`[ERRO] Faltam dados!`)
    } else {
        resultado.innerHTML = `Contando... <br>`
        let inicio2 = Number(inicio.value)
        let fim2 = Number(fim.value)
        let passo2 = Number(passo.value)
        if (passo2 === 0) {
            alert(`[ERRO] impossível contar 0, considerando PASSO = 1`)
            passo2 = 1
            resultado.innerHTML = `Contando:`
        }
        if (inicio2 < fim2) {
            //Contagem crescente
            for (i = inicio2; i <= fim2; i += passo2) {
                resultado.innerHTML += ` \u{1F449}${i} `
            }
        }
        else {
            //Contagem regressiva
            for (i = inicio2; i >= fim2; i -= passo2) {
                resultado.innerHTML += ` \u{1F449}${i} `
            }
        }
    }
}

















