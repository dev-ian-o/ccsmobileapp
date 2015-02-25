$(function() {
    // localStorage.setItem('SERVER_URL', "http://192.168.1.101/proto");
    var SERVER_URL = localStorage.SERVER_URL;
    $('#form-login').on('submit',function(e){
        e.preventDefault();
        location.href = "home.html";
    });

    $('div.hidden').fadeIn(1000).removeClass('hidden');
});