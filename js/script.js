$(function(){
	$(".m5 li:even").css('background', '#F5F5F5');
	$('.m8 .br4 li').click(function(){
		var index1=$('.m8 .br4 li').index(this);
		$('.m8 .br1 ul').animate({left:-713*index1},500);
		return false;
	})
	
	//传送带
	var slider1={
		show_num:1,
		width:713,
		m:$('.m8 .br1'),
		index:0
	}
	Slider(slider1);
	
	//传送带
	var slider2={
		show_num:4,
		width:166,
		m:$('.m8 .br4'),
		index:0
	}
	Slider(slider2);
	function Slider(s){
		s.num=s.m.find('li').length;
		s.next=s.m.find('.bc3');
		s.prev=s.m.find('.bc1');
		s.ul=s.m.find('ul');
		s.ul.width(s.width*s.num);
		s.next.click(function(){
			slider_next();
		})
		s.prev.click(function(){
			slider_prev();
		})
		function slider(){
			s.ul.animate({left:-s.width*s.index},500);
		}
		function slider_next(){
			s.index++;
			if(s.index>s.num-s.show_num){
				s.index=0;	
			}
			slider();	
		}
		function slider_prev(){
			s.index--;
			if(s.index<0){
				s.index=s.num-s.show_num;	
			}
			slider();
		}
	}
})