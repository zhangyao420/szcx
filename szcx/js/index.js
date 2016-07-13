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






//banner
$(".banner>a").fadeOut(0).eq(0).fadeIn(0);
var num=0;
function aa() {
	num++;
    if (num>=$(".banner>a").length) {
    	num=0;
    };
    $(".banner>a").fadeOut(500).eq(num).fadeIn(1000);
}
var t=setInterval(aa,2000)
$(".banner>a").hover(function(){
    clearInterval(t)
},function(){
    t=setInterval(aa,2000);
});

//公司logo群
    function move(){
    	$(".gongsiqun:first").animate({"width":-150},1000,function(){
    		$(".gongsiqun:first").stop(true,true)
    		$(".gongsiqun:first").insertAfter($(".gongsiqun:last"));
    		$(".gongsiqun:last").animate({"width":150},1000)
    	})
    }
    t1=setInterval(move,2000);
	$(".gongsiqun").hover(function(){
		clearInterval(t1)
	},function(){
		t1=setInterval(move,2000)
	})
	$(".zuo").click(function(){
	$(".gongsiqun:first").animate({"width":-150},500,function(){
		$(".gongsiqun:first").stop(true,true)
		$(".gongsiqun:first").insertAfter($(".gongsiqun:last"));
		$(".gongsiqun:last").animate({"width":150},500)
	})
})
$(".you").click(function(){
	$(".gongsiqun:last").animate({"width":-150},500,function(){
		$(".gongsiqun:last").stop(true,true)
		$(".gongsiqun:last").insertBefore($(".gongsiqun:first"));
		$(".gongsiqun:first").animate({"width":150},500)
	})
})






//链接
$(".lj").hover(function() {
	$(".flink").stop(true,true)
	var index=$(this).index(".lj");
	$(".flink").eq(index).css({display:"block"})
},function() {
	$(".flink").stop(false,false)
	var index=$(this).index(".lj");
	$(".flink").eq(index).css({display:"none"})
})