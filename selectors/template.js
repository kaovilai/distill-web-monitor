val = "something"

// return value back as innerHTML of an element which distill can grab
let div = document.createElement("div");
div.innerHTML=val
div.id="distillreturnval";
document.body.appendChild(div);
document.getElementById(div.id);
