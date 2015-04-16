$(document).ready(function(){

	adjustTitleImg();
	adjustCompanyImg();
	// adjustFooter();
	// adjustInfoContent();
});
$(window).load(function() {
	/* Act on the event */
	adjustFooter();
});

// 动态调整标题公司图片的高度
function adjustTitleImg(){
	var titleImg = $("#company-title-img");
	var width = titleImg.width();
	var scale = width/1280; //1280是现在图片的宽度
	var height = titleImg.height(97*scale); //92时现在图片的高度
}

// 动态调整公司展示图片的高度
function adjustCompanyImg(){
	// 计算公司介绍文字的高度
	var introSpan = $("#company-intro");
	var height = introSpan.outerHeight();

	
	// 设置公司图片的高度
	var introImg = $("#company-img img");
	introImg.height(height);
}

function adjustFooter(){
	var mainHeight = $(".grid-main").height();
	var subHeight = $(".grid-sub").height();
	var contentHeight = Math.max(mainHeight,subHeight);
	console.log("mainHeight:"+mainHeight);
	console.log("subHeight:"+subHeight);
	console.log("contentHeight:"+contentHeight);
	$("#footer").css("display","block");
	$("#div_offer").height(contentHeight);
}
