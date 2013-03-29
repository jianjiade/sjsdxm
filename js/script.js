$(function(){
		$(".m5 li:even").css('background', '#F5F5F5');
		})
$(function(){
	var x = -200;
	var y = 20;
	$(".m3 a").mouseover(function(e){
		this.myTitle = this.title;
		this.title = "";	
		var imgTitle = this.myTitle? "" + this.myTitle : "";
		var tooltip = "<div id='tooltip'><img src='"+ this.href +"' alt='预览图'/><h3>"+imgTitle+"</h3></div>"; //创建 div 元素
		$(".m3 .b").append(tooltip);	//把它追加到文档中						 
		$("#tooltip")
			.css({
				"top": (e.pageY+y) + "px",
				"left":  (e.pageX+x)  + "px"
			}).show();	  //设置x坐标和y坐标，并且显示
    }).mouseout(function(){
		this.title = this.myTitle;	
		$("#tooltip").remove();	 //移除 
    }).mousemove(function(e){
		$("#tooltip")
			.css({
				"top": (e.pageY+y) + "px",
				"left":  (e.pageX+x)  + "px"
			});
	});
})
