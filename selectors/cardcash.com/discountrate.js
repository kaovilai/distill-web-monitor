let cards = document.getElementsByClassName("brand-table-row")
let maxOff=0
for(i = 0; i < cards.length; i++){
  let curOff = parseFloat(cards.item(i).children[0].children[4].innerText)
  if(curOff>maxOff) maxOff = curOff
}
let div = document.createElement("div");
div.innerHTML=maxOff
div.id="distillreturnval";
document.body.appendChild(div);
document.getElementById(div.id);
