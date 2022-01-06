var buttons = document.querySelectorAll("button");
var del = document.getElementById('del');
var equal = document.getElementById("equal");
var res = document.getElementById('res');

function addNum(){
    res.value += this.value;
}

del.onclick = function del(){
   res.value = this.value;
}

equal.onclick = function myFun(){
    res.value = eval(res.value);
}

for (var i = 0, len = buttons.length; i < len; i++) {
    buttons[i].addEventListener("click", addNum); 
};



