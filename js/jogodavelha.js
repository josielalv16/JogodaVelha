var aux = 1;
function desenhar(c){
    var tabela = document.getElementById("tabela");
    var casa = document.getElementById("casa"+c);

    if(casa.textContent == "" ){
        if(aux == 1){
            casa.innerHTML = "X";
            verificarVencedor();
            aux = 0;
        }else{
            casa.innerHTML = "O"
            verificarVencedor();
            aux = 1;
        }
    }
    
}

function verificarVencedor(){
    var casa1 = document.getElementById("casa1").textContent;
    var casa2 = document.getElementById("casa2").textContent;
    var casa3 = document.getElementById("casa3").textContent;
    var casa4 = document.getElementById("casa4").textContent;
    var casa5 = document.getElementById("casa5").textContent;
    var casa6 = document.getElementById("casa6").textContent;
    var casa7 = document.getElementById("casa7").textContent;
    var casa8 = document.getElementById("casa8").textContent;
    var casa9 = document.getElementById("casa9").textContent;


    if(casa1 == "X" && casa2 == "X" && casa3 == "X"){xVencedor();}
    else if(casa1 == "X" && casa4 == "X" && casa7 == "X"){xVencedor();}
    else if(casa1 == "X" && casa5 == "X" && casa9 == "X"){xVencedor();}
    else if(casa2 == "X" && casa5 == "X" && casa8 == "X"){xVencedor();}
    else if(casa3 == "X" && casa5 == "X" && casa7 == "X"){xVencedor();}
    else if(casa3 == "X" && casa6 == "X" && casa9 == "X"){xVencedor();}
    else if(casa4 == "X" && casa5 == "X" && casa6 == "X"){xVencedor();}
    else if(casa7 == "X" && casa8 == "X" && casa9 == "X"){xVencedor();}

    if(casa1 == "O" && casa2 == "O" && casa3 == "O"){oVencedor();}
    else if(casa1 == "O" && casa4 == "O" && casa7 == "O"){oVencedor();}
    else if(casa1 == "O" && casa5 == "O" && casa9 == "O"){oVencedor();}
    else if(casa2 == "O" && casa5 == "O" && casa8 == "O"){oVencedor();}
    else if(casa3 == "O" && casa5 == "O" && casa7 == "O"){oVencedor();}
    else if(casa3 == "O" && casa6 == "O" && casa9 == "O"){oVencedor();}
    else if(casa4 == "O" && casa5 == "O" && casa6 == "O"){oVencedor();}
    else if(casa7 == "O" && casa8 == "O" && casa9 == "O"){oVencedor();}

    if(casa1 != "" && casa2 != "" && casa3 != "" && casa4 != "" && casa5 != "" && 
        casa6 != "" && casa7 != "" && casa8 != "" && casa9 != ""){
            document.getElementById("vencedor").innerHTML = "Empate!";
        }
}

function xVencedor(){
    document.getElementById("vencedor").innerHTML = "X foi o vencedor!!!";
}
function oVencedor(){
    document.getElementById("vencedor").innerHTML = "O foi o vencedor!!!";
}