$(function() {
   
    localStorage.setItem('SERVER_URL', "http://192.168.1.101/proto");

    $.ajax({
		url: localStorage.SERVER_URL + '/includes/requests/requests.php',
		type: 'POST',
		data: "id_user=4&grades=1",
		dataType: 'json',
		success: function(results){
		// console.log(results);

			localStorage.setItem('grades_object',JSON.stringify(results));
		},
		complete:function(){
		}
    });
});
