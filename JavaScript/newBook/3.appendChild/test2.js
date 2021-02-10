
var t = document.getElementById("text2");

function addstyle() {
    t.classList.add("bigger");  // 新增樣式
}

function removestyle() {
    // t.classList.remove("bigger");    // 指定刪除樣式
    // t.classList.remove("newstyle");
    t.className = null;                 // 把所有樣式刪除
}

function change1() {
    t.classList.toggle("newstyle");
}