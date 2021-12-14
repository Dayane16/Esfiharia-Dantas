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

    var troco=parseInt(tdtroco.textContent);
    var dinheiro=parseInt(tddinheiro.textContent);
    var pix=parseInt(tdpix.textContent);
    var cartao=parseInt(tdcartao.textContent);
    var outros=parseInt(tdoutro.textContent);

    var total=(dinheiro+pix+cartao+outros)-troco;

    tdtotal.textContent = total;


}

