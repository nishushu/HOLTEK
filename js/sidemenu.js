
$(function() {
	$('.GlobalPrdouct_left .LeftMenuToggleBtn,.GlobalPrdouct_left .LeftMenuToggleBtnTOP').on('click',function() {
		if($(this).parent().hasClass("slide")){
			$(this).parent().toggleClass("slide");
			$('.ui-slider-tabs-list-wrapper').css('width','972px');
		}else{
			$(this).parent().toggleClass("slide");
			$('.ui-slider-tabs-list-wrapper').css('width','1228px');
		}
		
	});
});