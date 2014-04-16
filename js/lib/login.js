var nnn = function() {
    "use strict";

    var postRequest= function(strURL){
        var xmlHttp;
        if(window.XMLHttpRequest){ // For Mozilla, Safari, ...
            xmlHttp = new XMLHttpRequest();
        } else if(window.ActiveXObject) { // For Internet Explorer
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xmlHttp.open('POST', strURL, true);
        xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xmlHttp.onreadystatechange = function(){
            if (xmlHttp.readyState===4 && xmlHttp.status===200 && xmlHttp.response !== ""){
                updatepage(xmlHttp.responseText);
                welcome();
            } else {
                warning();
                return false;
            }
        };
        xmlHttp.send(strURL);
    };

    var updatepage = function(str){
        document.getElementById('mainNav').innerHTML = str;

    };
    var warning = function(){
        $('#warning').html("Passwork OK. But something it not working");
        $(".title:last").css("color","red");
    };
    var welcome = function(){
        $('#warning').toggle();
    };

    var call_login = function(){
        $("form").after("");
        var username = window.document.f1.username.value,
            password = window.document.f1.password.value,
            platform = window.document.f1.platform.value,
            url = "../php/login.php?username="+username+"&password="+password+"&platform="+platform+"&width="+screen.width;
        postRequest(url);
    };

    var betterTypeOf = function(obj){
        return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    };

    $('#form').on('click',function(){
        call_login();

    });

}();

