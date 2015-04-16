var mapObj;
var windowsArr = new Array();  
var marker = new Array();
var longitude = 115.75,latitude = 37.0;
$(document).ready(function(){
	adjustFooterHeight();
	displayCompanyMap();
});
function adjustFooterHeight(){
	$("#contact").height($(".grid-main").height());
	$("#footer").css("display","block");
}
function displayCompanyMap(){
	mapObj = new AMap.Map("mapContainer", {
		resizeEnable: true,
		center:new AMap.LngLat(longitude,latitude),
		zoom:12
	});
	mapObj.plugin(["AMap.ToolBar"],function(){
		mapObj.addControl(new AMap.ToolBar());
	});
	addCompanyMarker();
}
function addCompanyMarker(){
	var markerOption = {
		map:mapObj,
		icon:"http://webapi.amap.com/images/1.png",
		position:new AMap.LngLat(longitude,latitude),
		topWhenMouseOver:true
	};
	var mar = new AMap.Marker(markerOption);
	mar.setTitle("清河县优创公司");
	marker.push(mar);
}
function showInfo(){
	var info=[];
	info.push("<label>清河县优创公司</label>");
	infoWindow = new AMap.InfoWindow({
		content:info.join("<br/>")
	});
	infoWindow.open(mapObj,new AMap.LngLat(longitude,latitude));
}

