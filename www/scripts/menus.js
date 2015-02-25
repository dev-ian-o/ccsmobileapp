$(function() {
    var $menuRight = $('nav#menu-right');
    var $menuLeft = $('nav#menu');
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
});
