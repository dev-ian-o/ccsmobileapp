$(function() {

    localStorage.setItem('SERVER_URL', "http://192.168.1.101/proto");
        // debugger;

    var SERVER_URL = localStorage.SERVER_URL;
    var $divPost = $('div#post');
    var posts_object = {};
    var level_user = 'student';
    var user = JSON.parse(localStorage.users_object);
    if(user.id_student)  
    {        
        level_user = 'student';
        id_user = user.id_student;
    }
    if(user.id_teacher)
    {      
        level_user = 'teacher';
        id_user = user.id_teacher;
    }

    $divPost.mmenu({
        offCanvas: {
            position: "right"
        },
        classes     : 'mm-fullscreen mm-light',
        zposition   : 'front',
        header      : true
    });


    if(JSON.parse(localStorage.posts_object)){
        $.each(JSON.parse(localStorage.posts_object), function( key, value ) {

            $el = "";
            $el += '<div class="itemdiv dialogdiv">';
            $el += '    <div class="user">';
            $el += '        <img alt="'+value.lastname+'" src="'+SERVER_URL+'/admin/upload/'+value.image+'" />';
            $el += '    </div>';

            $el += '    <div class="body">';
            $el += '        <div class="time">';
            $el += '            <i class="icon-time"></i>';
            $el += '            <span class="green">'+value.date_post+'</span>';
            $el += '        </div>';

            $el += '        <div class="name">';
            $el += '            <a href="#">'+value.lastname+'</a>';
            $el += '        </div>';
            $el += '        <div class="text">'+value.post+'</div>';

            // $el += '        <div class="tools">';
            // $el += '            <a href="#" class="btn btn-minier btn-info">';
            // $el += '                <i class="icon-only icon-share-alt"></i>';
            // $el += '            </a>';
            // $el += '        </div>';
            $el += '    </div>';
            $el += '</div>';
            $('.diaolog-posts').append($el);
        });
    }else{
        location.href="home.html";
    }

    


    $('#form-post').on('submit',function(e){
        e.preventDefault();
        // location.href = "home.html";
        $that = $(this);
        date = new Date;
        fulldate = date.getFullYear()+'-'+date.getDate()+'-0'+(date.getMonth()+1)+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        // $('.diaolog-posts').prepend('asdasd');
        $el = "";
        $el += '<div class="itemdiv dialogdiv">';
        $el += '    <div class="user">';
        $el += '        <img alt="'+user.lastname+'" src="'+SERVER_URL+'/admin/upload/'+user.image+'" />';
        $el += '    </div>';

        $el += '    <div class="body">';
        $el += '        <div class="time">';
        $el += '            <i class="icon-time"></i>';
        $el += '            <span class="green">'+fulldate+'</span>';
        $el += '        </div>';

        $el += '        <div class="name">';
        $el += '            <a href="#">'+user.lastname+'</a>';
        $el += '        </div>';
        $el += '        <div class="text">'+$(this).find('[name=post]').val()+'</div>';

        // $el += '        <div class="tools">';
        // $el += '            <a href="#" class="btn btn-minier btn-info">';
        // $el += '                <i class="icon-only icon-share-alt"></i>';
        // $el += '            </a>';
        // $el += '        </div>';
        $el += '    </div>';
        $el += '</div>';
        $('.diaolog-posts').prepend($el);

        $.ajax({
            url: SERVER_URL + '/includes/requests/requests.php',
            type: 'POST',
            data: $(this).serialize()+"&level_user="+level_user+"&id_user="+id_user,
            dataType: 'json',
            success: function(results){
                console.log(results);
                $($that)[0].reset();
                $('div#post').trigger('close')
            },
            complete:function(){
            }
        });
    });


    $('div.hidden').fadeIn(1000).removeClass('hidden');
});