$(document).ready(function() {
	$('.page-name').hover(function() {
    	$( this ).addClass( "hover" );
    	$( '.page-name' ).not(".hover").addClass('fade');
  		}, function() {
    		$( this ).removeClass( "hover" );
    		$( 'div' ).removeClass('fade');
  		}
	);

})

