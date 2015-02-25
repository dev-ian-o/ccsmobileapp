$(function() {
    // localStorage.setItem('SERVER_URL', "http://192.168.1.101/proto");
    var SERVER_URL = localStorage.SERVER_URL;
    var $menuRight = $('nav#menu-right');
    var $menuLeft = $('nav#menu');
    var $divGrades = $('div#grades');
    var $gradeEl = '';
    var grading = '';
    var grades_object = JSON.parse(localStorage.grades_object);
    $menuRight.mmenu({
        offCanvas: {
            position: "right"
        },
        classes     : 'mm-light',
        dragOpen    : true,
        counters    : true,
        searchfield : true,
        labels      : {
            fixed       : !$.mmenu.support.touch
        },
        header      : {
            add         : true,
            update      : true,
            title       : 'College'
        }
    });

    $menuLeft.mmenu({
        position    : 'left',
        classes     : 'mm-light',
        dragOpen    : true                  
    });

    $divGrades.mmenu({
        offCanvas: {
            position: "right"
        },
        classes     : 'mm-fullscreen mm-light',
        zposition   : 'front',
        header      : true
    });


    // actions

    $divGrades.on('opening.mm',function(){
        // console.log('open grade menu');
        $(this).find('.header-grades');
        $(this).find('.header-1stsem-grade').html(grading +' - '+'First Semester');
        $(this).find('.header-2ndsem-grade').html(grading +' - '+'Second Semester');
        $(this).find('.header-grades').html(grading);


    });


    $('.btn-grades').click(function(){ 
        grading = $(this).html(); 
        // 1st year

                // console.log($(this).data('year'));
                $('.grade-1st-content').html('');
                $('.grade-2nd-content').html('');
        switch ($(this).data('year')) {
            case 1:
                $.each( grades_object, function( key, value ) {
                    $el = "<div>";
                    $el += "<ul class='list'>";
                    $el += "<li><span>Subject</span>            <span>"+value.subject_desc+"</span</li>";
                    $el += "<li><span>Units</span>              <span>"+value.subject_unit+"</span</li>";
                    $el += "<li><span>Midterm Grade</span>      <span>"+value.midterm_grade+"</span</li>";
                    $el += "<li><span>Final Term Grade</span>   <span>"+value.finalterm_grade+"</span</li>";
                    $el += "<li><span>Total Grade</span>        <span>"+value.sem_grade+"</span</li>";
                    $el += "</ul>";
                    $el += "</div>";
                    if(value.course_year == 1 && value.semester == "first")
                    {
                        $('.grade-1st-content').append($el);
                    }else if(value.course_year == 1 && value.semester == "second"){
                        $('.grade-2nd-content').append($el);

                    }
                });
                // $('.grade-1st-content').html('');
                break;
            case 2:
                console.log($(this).data('year'));
                $.each( grades_object, function( key, value ) {
                    $el = "<div>";
                    $el += "<ul class='list'>";
                    $el += "<li><span>Subject</span>            <span>"+value.subject_desc+"</span</li>";
                    $el += "<li><span>Units</span>              <span>"+value.subject_unit+"</span</li>";
                    $el += "<li><span>Midterm Grade</span>      <span>"+value.midterm_grade+"</span</li>";
                    $el += "<li><span>Final Term Grade</span>   <span>"+value.finalterm_grade+"</span</li>";
                    $el += "<li><span>Total Grade</span>        <span>"+value.sem_grade+"</span</li>";
                    $el += "</ul>";
                    $el += "</div>";
                    if(value.course_year == 2 && value.semester == "first")
                    {
                        $('.grade-1st-content').append($el);
                    }else if(value.course_year == 2 && value.semester == "second"){
                        $('.grade-2nd-content').append($el);

                    }

                });
                break;
            case 3:
                console.log($(this).data('year'));
                $.each( grades_object, function( key, value ) {
                    $el = "<div>";
                    $el += "<ul class='list'>";
                    $el += "<li><span>Subject</span>            <span>"+value.subject_desc+"</span</li>";
                    $el += "<li><span>Units</span>              <span>"+value.subject_unit+"</span</li>";
                    $el += "<li><span>Midterm Grade</span>      <span>"+value.midterm_grade+"</span</li>";
                    $el += "<li><span>Final Term Grade</span>   <span>"+value.finalterm_grade+"</span</li>";
                    $el += "<li><span>Total Grade</span>        <span>"+value.sem_grade+"</span</li>";
                    $el += "</ul>";
                    $el += "</div>";
                    if(value.course_year == 3 && value.semester == "first")
                    {
                        $('.grade-1st-content').append($el);
                    }else if(value.course_year == 3 && value.semester == "second"){
                        $('.grade-2nd-content').append($el);

                    }

                });
                break;
            case 4:
                console.log($(this).data('year'));
                $.each( grades_object, function( key, value ) {
                    $el = "<div>";
                    $el += "<ul class='list'>";
                    $el += "<li><span>Subject</span>            <span>"+value.subject_desc+"</span</li>";
                    $el += "<li><span>Units</span>              <span>"+value.subject_unit+"</span</li>";
                    $el += "<li><span>Midterm Grade</span>      <span>"+value.midterm_grade+"</span</li>";
                    $el += "<li><span>Final Term Grade</span>   <span>"+value.finalterm_grade+"</span</li>";
                    $el += "<li><span>Total Grade</span>        <span>"+value.sem_grade+"</span</li>";
                    $el += "</ul>";
                    $el += "</div>";
                    if(value.course_year == 4 && value.semester == "first")
                    {
                        $('.grade-1st-content').append($el);
                    }else if(value.course_year == 4 && value.semester == "second"){
                        $('.grade-2nd-content').append($el);

                    }

                });
                break;
        }

        if($('.grade-1st-content').html() == ""){
             $('.grade-1st-content').append("<h5><center>Not available!</center></h5>");   
        }
        if($('.grade-2nd-content').html() == ""){
             $('.grade-2nd-content').append("<h5><center>Not available!</center></h5>");   
        }
    });
    $('.mm-prev').click(function(){ 
        if($(this).attr('href') === "#page-content") $('#grades').trigger('close'); 
    });

    $('div.hidden').fadeIn(1000).removeClass('hidden');
});