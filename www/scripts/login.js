$(function() {

    localStorage.setItem('SERVER_URL', "http://192.168.1.101/proto");
    

    if(localStorage.users_object){
        location.href = "home.html";
    }


    var SERVER_URL = localStorage.SERVER_URL;
    console.log(SERVER_URL);
    $('#form-login').on('submit',function(e){
        e.preventDefault();
        // location.href = "home.html";
    

    $.ajax({
        url: SERVER_URL + '/includes/requests/requests.php',
        type: 'POST',
        data: $(this).serialize(),
        dataType: 'json',
        success: function(results){
            console.log(results)
            // debugger;

            if(results.success == undefined)
            {
                if(results[0]){
                    localStorage.setItem('users_object',JSON.stringify(results[0]));
                    location.href = "home.html";
                }
                else{
                    alert('Invalid username or password!');
                }
            }
            else{
                alert('Invalid username or password!');
            }
        },
        complete:function(){
        }
    });
        // $.ajax({
        //     // url: "http://api.clickatell.com/http/sendmsg",
        //     url: "https://rest.nexmo.com/sms/json",
        //     type: 'get',
        //     data: $(this).serialize(),
        //     // dataType: 'json',
        //     success: function(results){
        //         console.log(results);

        //         // localStorage.setItem('grades_object',JSON.stringify(results));
        //     },
        //     complete:function(){
        //     }
        // });
    });

     // https://rest.nexmo.com/sms/json?

    $('div.hidden').fadeIn(1000).removeClass('hidden');
});