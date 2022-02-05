$('#iniciar').on('click',start);
function start(){
    // inicia o jogo
    $("#inicio").hide();
    $('#iniciar').hide();
    // adiciona os elementos
    $("#fundoGame").append("<div id='jogador'></div>");
    $("#fundoGame").append("<div id='inimigo1'></div>");
    $("#fundoGame").append("<div id='inimigo2'></div>");
    $("#fundoGame").append("<div id='amigo'></div>");

}