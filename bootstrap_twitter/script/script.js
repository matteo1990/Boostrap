function updateCountdown() {
    var remaining = 140 - jQuery('.form-control').val().length;
    jQuery('.countdown').text(remaining);
}

jQuery().ready(function($) {
    updateCountdown();
    $('.form-control').change(updateCountdown);
    $('.form-control').keyup(updateCountdown);
});


	
$().ready(function(){
	 
	 $('#pressMe').click(function(){ 
		
		});
	 });
