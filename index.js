var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")
var setadireita = window.document.getElementById("seta-direita")
var setaesquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    leonardo.style = "display:none"
    samantha.style = "display:flex"
    setadireita.style = "display:none"
    setaesquerda.style = "display:flex; margin-top:55px"
}
function RolarParaEsquerda() {
    leonardo.style = "display:flex"
    samantha.style = "display:none"
    setaesquerda.style = "display:none"
    setadireita.style = "display:flex; margin-top:55px"
}
