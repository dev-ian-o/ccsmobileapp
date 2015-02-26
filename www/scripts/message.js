$(function() {
    // localStorage.setItem('SERVER_URL', "http://192.168.1.101/proto");
    var SERVER_URL = localStorage.SERVER_URL;
    $('#form-login').on('submit',function(e){
        e.preventDefault();
        // location.href = "home.html";
    

    // $.ajax({
    //     url: localStorage.SERVER_URL + '/includes/requests/requests.php',
    //     type: 'POST',
    //     data: "id_user=4&grades=1",
    //     dataType: 'json',
    //     success: function(results){
    //     // console.log(results);

    //         localStorage.setItem('grades_object',JSON.stringify(results));
    //     },
    //     complete:function(){
    //     }
    // });
        $.ajax({
            // url: "http://api.clickatell.com/http/sendmsg",
            url: "https://rest.nexmo.com/sms/json",
            type: 'get',
            data: $(this).serialize(),
            // dataType: 'json',
            success: function(results){
                console.log(results);

                // localStorage.setItem('grades_object',JSON.stringify(results));
            },
            complete:function(){
            }
        });
    });

     // https://rest.nexmo.com/sms/json?

    $('div.hidden').fadeIn(1000).removeClass('hidden');
});