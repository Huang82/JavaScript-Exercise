
var tt = document.getElementById("text1");   // 取的id為text1的元素
var temp = tt.cloneNode(true);   // 複製給temp

tt.appendChild(document.createTextNode("你已經被新增文字了"));   // 更改元素

function change() {
    // 在block id的下面新增temp節點
    document.getElementById("block").appendChild(temp);
    tt.className = "sText";  // 套用已寫好的CSS指定給t
}