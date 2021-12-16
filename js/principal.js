var title = document.querySelector('.title');
title.textContent = "Esfiharia Dantas";

var relatorios = document.querySelectorAll('.relatorio');


for(var i = 0; i <relatorios.length; i++) {

    var relatorio = relatorios[i];

     
    var tdtroco =relatorio.querySelector('.info-troco');
    var tddinheiro=relatorio.querySelector('.info-dinheiro');
    var tdpix =relatorio.querySelector('.info-pix');
    var tdcartao=relatorio.querySelector('.info-cartao');
    var tdtotal=relatorio.querySelector('.info-total');
    var tdoutro=relatorio.querySelector('.info-outros');
    var tdcomanda=relatorio.querySelector('.info-comanda')


    var troco=parseInt(tdtroco.textContent);
    var dinheiro=parseInt(tddinheiro.textContent);
    var pix=parseInt(tdpix.textContent);
    var cartao=parseInt(tdcartao.textContent);
    var outros=parseInt(tdoutro.textContent);
    var comanda=parseInt(tdcomanda.textContent);

    var total=(dinheiro+pix+cartao+outros)-troco;

    tdtotal.textContent = total;

    if(total!==comanda){
        tdtotal.textContent = 'erro';
        relatorio.style.backgroundColor='lightcoral';
    }

    var botaoAdiconar= document.querySelector('#adicionar-seção');

    botaoAdiconar.addEventListener('click',function(event){
        event.preventDefault();

        var form = document.querySelector("#form-adiciona");

        var data = form.data.value;
        var comanda = form.comanda.value;
        var troco = form.troco.value;
        var dinheiro = form.dinheiro.value;
        var pix = form.pix.value;
        var cartao = form.cartao.value;
        var outros = form.outros.value;
    
        var pacienteTr = document.createElement("tr");
    
        var dataTd = document.createElement("td");
        var comandaTd= document.createElement("td");
        var trocoTd= document.createElement("td");
        var dinheiroTd= document.createElement("td");
        var pixTd= document.createElement("td");
        var cartaoTd= document.createElement("td");
        var outrosTd= document.createElement("td");
       
        dataTd.textContent = data;
        comandaTd.textContent = comanda;
        trocoTd.textContent =troco;
        dinheiroTd.textContent =dinheiro;
        pixTd.textContent =pix;
        cartaoTd.textContent =cartao;
        outrosTd.textContent =outros;

        pacienteTr.appendChild(dataTd);
        pacienteTr.appendChild(comandaTd);
        pacienteTr.appendChild(trocoTd); 
        pacienteTr.appendChild(dinheiroTd);
        pacienteTr.appendChild(pixTd);
        pacienteTr.appendChild(cartaoTd);
        pacienteTr.appendChild(outrosTd);
    
    
        var tabela = document.querySelector("#tabela-relatorio");
    
        tabela.appendChild(pacienteTr);
    });

}

