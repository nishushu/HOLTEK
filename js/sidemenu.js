
$(function() {
	$('.GlobalPrdouct_left .LeftMenuToggleBtn,.GlobalPrdouct_left .LeftMenuToggleBtnTOP').on('click',function() {
		if($(this).parent().hasClass("slide")){
			$(this).parent().toggleClass("slide");
			$('.ui-slider-tabs-list-wrapper,.ui-slider-tabs-content-container').css('width','972px');
	delay(function(){
		$('.ui-slider-tab-content.selected .portletNumberPage_tile_0').outerWidth($('.ui-slider-tab-content.selected table').outerWidth());
    }, 200 );
		}else{
			$(this).parent().toggleClass("slide");
			$('.ui-slider-tabs-list-wrapper,.ui-slider-tabs-content-container').css('width','1206px');
	delay(function(){
		$('.ui-slider-tab-content.selected .portletNumberPage_tile_0').outerWidth($('.ui-slider-tab-content.selected table').outerWidth());
    }, 200 );
		}
		
	});
	$('.ui-slider-tabs-list li a').on('click',function() {
	var target=$(this);
	delay(function(){
		$('.ui-slider-tab-content'+$(target).attr('href')+' .portletNumberPage_tile_0').outerWidth($('.ui-slider-tab-content'+$(target).attr('href')+' table').outerWidth());
    }, 200 );
	});
});
var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();