$(function() {

    localStorage.setItem('SERVER_URL', "http://192.168.1.101/proto");

    if(JSON.parse(localStorage.users_object).id_student){

	    ID_STUDENT = JSON.parse(localStorage.users_object).id_student;
	    $.ajax({
			url: localStorage.SERVER_URL + '/includes/requests/requests.php',
			type: 'POST',
			data: "id_user="+ID_STUDENT+"&grades=1",
			dataType: 'json',
			success: function(results){
				console.log(ID_STUDENT);

				localStorage.setItem('grades_object',JSON.stringify(results));
			},
			complete:function(){
			}
	    });
	}

    if(JSON.parse(localStorage.users_object).id_teacher){

		$menu = $('#menu').find('li a')[2];
		$($menu).html('My students');
		$($menu).attr('href','students.html');
	}
	 
});
