

// --------滑鼠---------

function change(t) {
    t.style.fontSize = "larger";
    t.style.backgroundColor = "blue";
}

function back(t) {
    t.style.fontSize = "medium";
    t.style.backgroundColor = null;
}

// --------按鍵-----------

function enter() {
    alert("我知道你剛剛按了鍵盤");
}


// --------視窗---------

function change1() {
    alert("目前視窗寬："+ window.innerWidth + "高：" + window.innerHeight);
}

function load() {
    alert("載入完畢");
}

// --------表單--------

function change2() {
    alert("你更改了文字!!");
}

function send() {
    confirm("確定要送出嗎?");
}