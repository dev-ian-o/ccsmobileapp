$(function() {
    var $menuRight = $('nav#menu-right');
    var $menuLeft = $('nav#menu');
	$menuRight.mmenu({
        offCanvas: {
            position: "right"
        },
        classes     : 'mm-light',
        dragOpen    : {
            open: true
        },
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
        dragOpen    : {
            open: true
        }                  
    });
    if(JSON.parse(localStorage.users_object).image){
        var image = JSON.parse(localStorage.users_object).image;
        var style = "margin: 1px 8px 0 0;";
        style += "border-radius: 24px;";
        style += "border: 2px solid #FFF;";
        style += "max-width: 40px!important;";
        style += "background-image: url('"+localStorage.SERVER_URL+"/admin/upload/"+image+"');";
        style += "background-size: auto 45px;";
        $('.friends').attr('style',style);

        $('.user-image').attr('src',localStorage.SERVER_URL+"/admin/upload/"+image);
    }

    
});
