//下拉框
$(".beijing").hover(function() {
	$(".xialakuang").stop(true,true)
	var index=$(this).index(".beijing");
	$(".xialakuang").eq(index).css({display:"block"})
},function() {
	$(".xialakuang").stop(false,false)
	var index=$(this).index(".beijing");
	$(".xialakuang").eq(index).css({display:"none"})
})
//经典案例
$(".gsqbox").animate({top:-2000},100000,function(){
	if (top<=-2000) {
		$(".gsqbox").css({top:0});
	};
})