
// 取得html的class的所有元素(所以是回傳陣列)
var t = document.getElementsByClassName("title");
var str = "";
for (var i = 0; i < t.length; i++) {
    str += t[i].innerText;
    str += "\n";
}

// 取得指定id元素
console.log(document.getElementById("aa").innerText);

alert(str);
var ans = confirm("是否要關閉網頁?");

if (ans) {
    close();
}
