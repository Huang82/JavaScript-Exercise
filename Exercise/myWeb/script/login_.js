$(document).ready(function() {
    $("#login").click(function() {
        /* 檢查輸入帳號和密碼欄位是否為空 */
        var pwd = $("#pwd").val();
        var pass = $("#pass").val();
        if (pwd == "" || pass == "") {
            alert("您的帳號或密碼為空!");
            if (pwd == "") {
                $("#pwd").addClass("inputAir");
            }
            if (pass == "") {
                $("#pass").addClass("inputAir");
            }
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