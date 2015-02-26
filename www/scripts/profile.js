$(function() {
    users_object = JSON.parse(localStorage.users_object);
    $el = $('.profile-user-info');

    if(users_object.id_student){
        level_user = "Student";
        yr = "V";
        if(users_object.yr == "first") yr ="I";
        if(users_object.yr == "second") yr ="II";
        if(users_object.yr == "third") yr ="III";
        if(users_object.yr == "fourth") yr ="IV";

        $elAppend =  '<div class="profile-info-row">';
        $elAppend +=  '     <div class="profile-info-name"> Student No. </div>';
        $elAppend +=  '         <div class="profile-info-value">';
        $elAppend +=  users_object.student_no;
        $elAppend +=  '         </div>';
        $elAppend +=  '     </div>';
        $elAppend +=  '</div>';


        $elAppend +=  '<div class="profile-info-row">';
        $elAppend +=  '     <div class="profile-info-name"> Course </div>';
        $elAppend +=  '         <div class="profile-info-value">';
        $elAppend +=  users_object.course;
        $elAppend +=  '         </div>';
        $elAppend +=  '     </div>';
        $elAppend +=  '</div>';

        $elAppend +=  '<div class="profile-info-row">';
        $elAppend +=  '     <div class="profile-info-name"> Year & Section </div>';
        $elAppend +=  '         <div class="profile-info-value">';
        $elAppend +=  yr+'-'+users_object.section;
        $elAppend +=  '         </div>';
        $elAppend +=  '     </div>';
        $elAppend +=  '</div>';


        $elAppend +=  '<div class="profile-info-row">';
        $elAppend +=  '     <div class="profile-info-name"> Address </div>';
        $elAppend +=  '         <div class="profile-info-value">';
        $elAppend +=  users_object.add_no+" "+users_object.add_street+' '+users_object.add_brgy+', '+users_object.add_city;
        $elAppend +=  '         </div>';
        $elAppend +=  '     </div>';
        $elAppend +=  '</div>';


        $elAppend +=  '<div class="profile-info-row">';
        $elAppend +=  '     <div class="profile-info-name"> Birthday </div>';
        $elAppend +=  '         <div class="profile-info-value">';
        $elAppend +=  users_object.dob;
        $elAppend +=  '         </div>';
        $elAppend +=  '     </div>';
        $elAppend +=  '</div>';


        $elAppend +=  '<div class="profile-info-row">';
        $elAppend +=  '     <div class="profile-info-name"> Contact No </div>';
        $elAppend +=  '         <div class="profile-info-value">';
        $elAppend +=  users_object.contact_no;
        $elAppend +=  '         </div>';
        $elAppend +=  '     </div>';
        $elAppend +=  '</div>';
        $($el).append($elAppend);
    }
    else if(users_object.id_teacher){ 
        level_user = "Teacher";

        $elAppend =  '<div class="profile-info-row">';
        $elAppend +=  '     <div class="profile-info-name"> Employee No. </div>';
        $elAppend +=  '         <div class="profile-info-value">';
        $elAppend +=  users_object.employee_no;
        $elAppend +=  '         </div>';
        $elAppend +=  '     </div>';
        $elAppend +=  '</div>';


        $elAppend +=  '<div class="profile-info-row">';
        $elAppend +=  '     <div class="profile-info-name"> Address </div>';
        $elAppend +=  '         <div class="profile-info-value">';
        $elAppend +=  users_object.add_no+" "+users_object.add_street+' '+users_object.add_brgy+', '+users_object.add_city;
        $elAppend +=  '         </div>';
        $elAppend +=  '     </div>';
        $elAppend +=  '</div>';


        $elAppend +=  '<div class="profile-info-row">';
        $elAppend +=  '     <div class="profile-info-name"> Birthday </div>';
        $elAppend +=  '         <div class="profile-info-value">';
        $elAppend +=  users_object.dob;
        $elAppend +=  '         </div>';
        $elAppend +=  '     </div>';
        $elAppend +=  '</div>';


        $elAppend +=  '<div class="profile-info-row">';
        $elAppend +=  '     <div class="profile-info-name"> Contact No </div>';
        $elAppend +=  '         <div class="profile-info-value">';
        $elAppend +=  users_object.contact_no;
        $elAppend +=  '         </div>';
        $elAppend +=  '     </div>';
        $elAppend +=  '</div>';
        
        $($el).append($elAppend);
    }


    // exempt = {'id_student','password','firstname','lastname','id_teacher','status','about_me'};
    // $.each( users_object, function( key, value ) {
    // });
                

        

    $('.user-name').html(users_object.firstname +' '+ users_object.lastname);
    $('.level-user').html(level_user);
    $('div.hidden').fadeIn(1000).removeClass('hidden');
});