$(document).ready(function(){
	adjustTitleImg();
	adjustFooterHeight();
});

function adjustFooterHeight(){
	var mainHeight = $(".grid-main").height();
	var subHeight = $(".grid-sub").height();
	var contentHeight = Math.max(mainHeight,subHeight);
	console.log(contentHeight);
	$("#company").height(contentHeight);
	$("#footer").css("display","block");
}

// 动态调整标题公司图片的高度
function adjustTitleImg(){
	var titleImg = $("#company-title-img");
	var width = titleImg.width();
	var scale = width/1280; //1280是现在图片的宽度
	var height = titleImg.height(97*scale); //92时现在图片的高度
}
