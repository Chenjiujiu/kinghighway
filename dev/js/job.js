"use strict";
$('.list-group .list-group-item').click(function(){
	var ele = $(this).next('dd');
	if(ele){
		$('.list-group .list-group-item').next('dd').height(0);
		$('.list-group .list-group-item .glyphicon')
			.removeClass('glyphicon-chevron-down')
			.addClass('glyphicon-chevron-right');
		if(!ele.height()){
			var h = ele.children('.desc').height() + 40;
			$(this).children('.glyphicon')
				.removeClass('glyphicon-chevron-right')
				.addClass('glyphicon-chevron-down');
			ele.height(h);
		}


	}

});