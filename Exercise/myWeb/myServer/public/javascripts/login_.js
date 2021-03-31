
$(document).ready(function() {
    $("#login").click(function() {
        /* 檢查輸入帳號和密碼(去頭去尾空白)欄位是否為空 */
        var acc = $("#acc").val().trim();
        var pass = $("#pass").val().trim();
        if (acc == "" || pass == "") {
            alert("您的帳號或密碼為空!");
            if (acc == "") {
                $("#acc").addClass("inputAir");
            }
            if (pass == "") {
                $("#pass").addClass("inputAir");
            }
        } else {
            /* 傳送帳密 */
            var API = "https://192.168.0.106:3000/login/login";
            $.post(API, {acc: acc, pass: pass}, 
            function(res) {
                alert(res.mess);
            });
        }
    });

    /* 當focus到input remove inputAir */
    $("#acc").focus(function() {
        $("#acc").removeClass("inputAir");
    });
    $("#pass").focus(function() {
        $("#pass").removeClass("inputAir");
    });

});