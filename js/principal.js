var title = document.querySelector('.title');
title.textContent = "Esfiharia Dantas";

var frl = document.querySelector('#fr');
var ttroco =fr.querySelector('.info-troco');
var ddinheiro=fr.querySelector('.info-dinheiro');
var ppix =fr.querySelector('.info-pix');
var ccartao=fr.querySelector('.info-cartao');
var ttotal=fr.querySelector('.info-total');

var troco=parseInt(ttroco.textContent);
var dinheiro=parseInt(ddinheiro.textContent);
var pix=parseInt(ppix.textContent);
var cartao=parseInt(ccartao.textContent);
var total=parseInt(ttotal.textContent);

//var total=(dinheiro+pix+cartao)-troco;

ttotal.textContent = (dinheiro+pix+cartao)-troco;