function clicouBotao(){

    var media = document.getElementsByClassName("media")[0]
    var n1 = parseFloat(document.getElementById("n1").value)
    var n2 = parseFloat(document.getElementById("n2").value)
    var n3 = parseFloat(document.getElementById("n3").value)
    var n4 = parseFloat(document.getElementById("n4").value)
    
    const notas = [n1,n2,n3,n4]

    var res = 0
    var erro = 0

    //Excluindo os Campos deixados em branco
    for (let i = 3; i >= 0; i--){
        if (!notas[i]){
            notas.splice(i,1)
        }
    }

    //Somando as notas
    for (let i = 0; i < notas.length; i++){
        res += notas[i]
    }

    //Mostrar erro se alguma das notas forem menores que 0 ou maior que 10
    for (let i = 0; i < 4; i++){
        if (notas[i] > 10 || notas[i] < 0){
            window.alert("Erro: Alguma nota está maior que 10 ou menor que 0")
            erro = 1
        }
    }
    //exibe as notas no campo "Média" divindo pela quantidade de números digitados
    if (erro == 0){
        media.innerHTML = `Média: ${res/notas.length}`
    }
    
}

