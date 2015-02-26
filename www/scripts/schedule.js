$(function() {
    // localStorage.setItem('SERVER_URL', "http://192.168.1.101/proto");
    var SERVER_URL = localStorage.SERVER_URL;
    var user_id = 4;
    if(JSON.parse(localStorage.users_object).id_student)
    {
        user_id = JSON.parse(localStorage.users_object).id_student;
    }
    else if(JSON.parse(localStorage.users_object).id_teacher)
    {
        user_id = JSON.parse(localStorage.users_object).id_teacher;
    }

    var $divSched = $('div#schedule');
    var $gradeEl = '';
    var grading = '';
    var grades_object = JSON.parse(localStorage.grades_object);

    $divSched.mmenu({
        offCanvas: {
            position: "right"
        },
        classes     : 'mm-fullscreen mm-light',
        zposition   : 'front',
        header      : true
    });

    
    $('div.hidden').fadeIn(1000).removeClass('hidden');

});