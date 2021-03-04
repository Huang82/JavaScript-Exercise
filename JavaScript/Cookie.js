
/* 如何設置Cookie */

document.cookie = "name=Value";

/* 必須注意的是不行在本機裡直接用(就是直接打開html來使用)，還有安全性問題 */

/*
    Name：鍵key
    Value：值value
    Domain：可以取得cookie的網域
    expires：限制cookie有效的時間
    path：設定可以存取該cookie的路徑
    secures：設定cookie是否要https網址才可進行傳送

ex.
    
    寫入 Cookie，並加入過期時間
        document.cookie="username=sean; expires=Mon, 04 Mar 2020 18:28:30 GMT; path=/";

    寫入 Cookie，設定 10 秒後失效
        document.cookie="username=sean; max-age=10; path=/";
*/

/* 如果要取用的話就直接當參數來用，回傳值是字串 */

document.cookie;