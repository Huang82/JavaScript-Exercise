$(document).ready(function() {
    $("#register").click(function() {
        /* 檢查輸入欄位是否為空 */
        var name = $("#name").val().trim();
        var pwd = $("#pwd").val().trim();
        var pass = $("#pass").val().trim();
        var pass_ = $("#pass_").val().trim();
        if (name == "" || pwd == "" || pass == "" || pass_ == "") {
            alert("您有欄位為空!");
            if (name == "") {
                $("#name").addClass("inputAir");
            }
            if (pwd == "") {
                $("#pwd").addClass("inputAir");
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
            var API = "http://localhost:3000/login/register";
            $.post(API, {name: name, pwd: pwd, pass: pass}, 
                function(res) {
                    alert("註冊成功(暫)\n" + res.name + " " + res.pwd + " " + res.pass);
                })
            window.location.href = "./login.html";
        }
    });

    /* 當focus到input remove inputAir */
    $("#name").focus(function() {
        $("#name").removeClass("inputAir");
    });
    $("#pwd").focus(function() {
        $("#pwd").removeClass("inputAir");
    });
    $("#pass").focus(function() {
        $("#pass").removeClass("inputAir");
    });
    $("#pass_").focus(function() {
        $("#pass_").removeClass("inputAir");
    });

});