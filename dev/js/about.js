//公司视频
~function(){
	var btn_timer = null;
	var info_timer = null;
	var j_vedio = $('.intro .video-khw');
	var j_ctrl_btn = $('.intro .ctrl-btn');
	var j_ctrl_info = $('.intro .ctrl-info');
	j_vedio.click(function(){
		if(this.paused){
			this.play();
			j_ctrl_btn.removeClass('play').addClass('pause');
		}else{
			this.pause();
			j_ctrl_btn.removeClass('pause').addClass('play');
		}
	})
		.mousemove(function(){
			clearTimeout(btn_timer);
			if(!this.paused){
				j_ctrl_btn.show(300);
				btn_timer = setTimeout(function(){
					j_ctrl_btn.hide(300);
				}, 2000);
			}
		})
		.on('loadedmetadata', function(){
			var m=parseInt(this.duration/60);
			var s=parseInt(this.duration%60);
			m = m < 10 ? '0' + m : m;
			s = s < 10 ? '0' + s : s;
			var time = m + ':' + s;
			$('.intro .ctrl-info .all-time').html(time);

		})
		.on('timeupdate', function(){
			var m = parseInt(this.currentTime / 60);
			var s = parseInt(this.currentTime % 60);
			m = m < 10 ? '0' + m : m;
			s = s < 10 ? '0' + s : s;
			var time = m + ':' + s;
			$('.intro .ctrl-info .current-time').html(time);
			$('.intro .ctrl-info .progress .progress-bar').css('width',this.currentTime/this.duration*100+'%');
		})
		.siblings('.ctrl-btn')
		.click(function(){
			j_vedio.click();
		})
		.siblings('.ctrl-info').children('.volume')
		.click(function(){
			if(j_vedio[0].muted){
				j_vedio[0].muted=false;
				$(this).removeClass('glyphicon-volume-off').addClass('glyphicon-volume-up')
			}else{
				j_vedio[0].muted=true;
				$(this).removeClass('glyphicon-volume-up').addClass('glyphicon-volume-off')
			}
			
		})
		.parent('.video-box')
		.mouseenter(function(){
			clearTimeout(info_timer);
			j_ctrl_info.show(300);
		})
		.mouseleave(function(){
			info_timer = setTimeout(function(){
				j_ctrl_info.hide(300);
			}, 2000);
		});
	
}();
