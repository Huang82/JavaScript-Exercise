$(document).ready(function() {
    $("#register").click(function() {
        /* 檢查輸入欄位是否為空 */
        var name = $("#name").val().trim();
        var acc = $("#acc").val().trim();
        var pass = $("#pass").val().trim();
        var pass_ = $("#pass_").val().trim();
        if (name == "" || acc == "" || pass == "" || pass_ == "") {
            alert("您有欄位為空!");
            if (name == "") {
                $("#name").addClass("inputAir");
            }
            if (acc == "") {
                $("#acc").addClass("inputAir");
            }
            if (pass == "") {
                $("#pass").addClass("inputAir");
            }
            if (pass_ == "") {
                $("#pass_").addClass("inputAir");
            }
        } else if (pass != pass_ && (pass != "" && pass_ != "")) {
            /* 判斷兩個密碼是否一樣 */
            alert("您的密碼兩個密碼不一樣");
            $("#pass").addClass("inputAir");
            $("#pass_").addClass("inputAir");
        } else {
            /* 註冊成功，傳送給後端 */
            var API = "https://192.168.43.104:3000/login/register";
            $.post(API, {name: name, acc: acc, pass: pass}, 
                function(res) {
                    alert(res.mess);
                })
            window.location.href = "./login.html";
        }
    });

    /* 當focus到input remove inputAir */
    $("#name").focus(function() {
        $("#name").removeClass("inputAir");
    });
    $("#acc").focus(function() {
        $("#acc").removeClass("inputAir");
    });
    $("#pass").focus(function() {
        $("#pass").removeClass("inputAir");
    });
    $("#pass_").focus(function() {
        $("#pass_").removeClass("inputAir");
    });

});