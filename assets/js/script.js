$(document).ready(function() {
	$('.homenav-item, .topnav-item, .port-category-box').hover(function() {
    	$( this ).addClass( "black-hover" );
  		}, function() {
    		$( this ).removeClass( "black-hover" );
  		}
	);

	$('.topnav-item').hover(function() {
    	$( this ).addClass( "faded-hover" );
  		}, function() {
    		$( this ).removeClass( "faded-hover" );
  		}
	);

	var slideIndex = 0;
	carousel();

	function carousel() {
	    var i;
	    var x = document.getElementsByClassName("mySlides");
	    for (i = 0; i < x.length; i++) {
	      x[i].style.display = "none"; 
	    }
	    slideIndex++;
	    if (slideIndex > x.length) {slideIndex = 1} 
	    x[slideIndex-1].style.display = "block"; 
	    setTimeout(carousel, 3000); // Change image every 2.5 seconds
	}

})

