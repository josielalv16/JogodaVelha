var vezDo = "X";
var placarX = 0;
var placarO = 0;
var jogando = 1;

window.onload = function(){
    criarTabuleiro();
    
    document.getElementById("novoJogo").onclick = function(){
        criarTabuleiro();
        jogando = 1;
        document.getElementById("resultado").innerText = "";
    }

    document.getElementById("resetarPlacar").onclick = function(){
        placarO = 0;
        placarX = 0;
        document.getElementById("placarX").innerText = placarX;
        document.getElementById("placarO").innerText = placarO;
    }

    document.getElementById("comecarX").onclick = function(){
        verificarJogando("X");
        // vezDo = "X";
        // vezDoJogador();
    }
    document.getElementById("comecarO").onclick = function(){
        verificarJogando("O");
        // vezDo = "O";
        // vezDoJogador();
    }

    vezDoJogador();
}

function verificarJogando(vez){
    var casas = document.getElementsByName("casa");
    var j = 0;
    for(var i = 0; i < casas.length; i++){
        if(casas[i].innerText != ""){
            j++;
        }
    }
    if(j == 0){
        vezDo = vez;
        vezDoJogador();
    }
}

function vezDoJogador(){
    document.getElementById("vezDoJogador").innerText = 'Vez do "' + vezDo + '"';
}

function criarTabuleiro(){
    var baseTabuleiro = document.getElementById("baseTabuleiro");
    var html = "<table id='tabuleiro'>";

    for(var linha = 0; linha < 3; linha++){
        html += "<tr>";
        for(var coluna = 0; coluna < 3; coluna++){
            html += "<td name='casa'></td>";
        }
        html += "</tr>";
    }

    html += "</table>";
    baseTabuleiro.innerHTML = html;

    var casas = document.getElementsByName("casa");
    for(var i = 0; i < casas.length; i++){
        casas[i].onclick = function(){
            jogar(this);
        }
    }
}

function jogar(casa){
    if(jogando == 1){
        if(casa.innerText == ""){
            if(vezDo == "X"){
                casa.innerHTML = "X";
                vezDo = "O";
                verificarVencedor();
            }else{
                casa.innerHTML = "O"
                vezDo = "X";
                verificarVencedor();
            }
            vezDoJogador();
        }
    }
}

function verificarVencedor(){
    //Ganhador = 1 para X; 0 para O;
    var ganhador = null;
    var vazio = 0;
    var casas = document.getElementsByName("casa");

    //Verifica ganhador nas linhas
    for(var i = 0; i < casas.length;){
        if(casas[i].innerText != "" && casas[i].innerText == casas[i+1].innerText && casas[i].innerText == casas[i+2].innerText){
            //Ganhador = 1 para X; 0 para O
            ganhador = casas[i].innerText == "X" ? 1 : 0;
            casas[i].classList.add("linhaHorizontal");
            casas[i+1].classList.add("linhaHorizontal");
            casas[i+2].classList.add("linhaHorizontal");
            break;
        }else{
            i += 3;
        }
    }

    if(ganhador == null){
        //Verifica ganhador nas colunas
        for(var i = 0; i < 3; i++){
            if(casas[i].innerText != "" && casas[i].innerText == casas[i+3].innerText && casas[i].innerText == casas[i+6].innerText){
                //Ganhador = 1 para X; 0 para O
                ganhador = casas[i].innerText == "X" ? 1 : 0;
                casas[i].classList.add("linhaVertical");
                casas[i+3].classList.add("linhaVertical");
                casas[i+6].classList.add("linhaVertical");
                break;
            }
        }
    }

    if(ganhador == null){
        //Verifica ganhador nas diagonais
        if(casas[4].innerText != "" && ((casas[0].innerText == casas[4].innerText && casas[0].innerText == casas[8].innerText) || (casas[2].innerText == casas[4].innerText && casas[2].innerText == casas[6].innerText))) {
            //Ganhador = 1 para X; 0 para O
            ganhador = casas[4].innerText == "X" ? 1 : 0;
            if(casas[0].innerText != "" && casas[0].innerText == casas[4].innerText){
                casas[0].classList.add("linhaDiagonal1");
                casas[4].classList.add("linhaDiagonal1");
                casas[8].classList.add("linhaDiagonal1");
            }else{
                casas[2].classList.add("linhaDiagonal2");
                casas[4].classList.add("linhaDiagonal2");
                casas[6].classList.add("linhaDiagonal2");
            }
        }
    }

    //Conta casas em branco/vazio
    for(var i = 0; i < casas.length; i++){
        if(casas[i].innerText == ""){
            vazio++;
        }
    }

    if(ganhador != null && ganhador == 1){
        jogando = 0;
        vezDo = "X";
        placarX++;
        document.getElementById("placarX").innerText = placarX;
        document.getElementById("resultado").innerText = '"X" Ganhou!!!';
    }else if(ganhador != null){
        jogando = 0;
        placarO++;
        vezDo = "O";
        document.getElementById("placarO").innerText = placarO;
        document.getElementById("resultado").innerText = '"O" Ganhou!!!';
    }else if(ganhador == null && vazio == 0){
        document.getElementById("resultado").innerText = "Deu Velha!!!";
    }
}