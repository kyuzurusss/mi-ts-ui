( function( $ ) {
$( document ).ready(function() {
$('#cssmenu').prepend('<div id="menu-button">Menu</div>');
	$('#cssmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
});
} )( jQuery );

function openLoginForm() {
    document.getElementById("loginForm").style.display = "block";
}

function closeLoginForm() {
    document.getElementById("loginForm").style.display = "none";
}

