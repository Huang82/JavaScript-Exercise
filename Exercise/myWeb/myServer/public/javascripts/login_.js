$(document).ready(function() {
    $("#login").click(function() {
        /* 檢查輸入帳號和密碼(去頭去尾空白)欄位是否為空 */
        var pwd = $("#pwd").val().trim();
        var pass = $("#pass").val().trim();
        if (pwd == "" || pass == "") {
            alert("您的帳號或密碼為空!");
            if (pwd == "") {
                $("#pwd").addClass("inputAir");
            }
            if (pass == "") {
                $("#pass").addClass("inputAir");
            }
        } else {
            /* 傳送帳密 */
            var API = "http://localhost:3000/login/login";
            $.post(API, { pwd: pwd, pass: pass}, 
            function(res) {
                alert(res.mypwd);
            })
        }
    });

    /* 當focus到input remove inputAir */
    $("#pwd").focus(function() {
        $("#pwd").removeClass("inputAir");
    });
    $("#pass").focus(function() {
        $("#pass").removeClass("inputAir");
    });

});