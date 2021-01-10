
// 創建元素
var a = document.createElement("p");
// 創建元素文字
var text = document.createTextNode("你好阿");
// 元素加入元素文字
a.appendChild(text);
// 在body插入這個元素
document.body.appendChild(a);