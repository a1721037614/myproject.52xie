
define([], function(){
	console.log("common")
	return {
		getPagePositionLeft: function(ele) {
			if(ele == null) return 0;
			return ele.offsetLeft + getPagePositionLeft(ele.offsetParent);
		},
		getPagePositionTop: function(ele) {
			if(ele == null) return 0;
			return ele.offsetTop + getPagePositionTop(ele.offsetParent);
		},
		randomColor: function(){
			return `rgb( ${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255} )`;
		},
		randomInt : function(min, max) {
			return Math.round( Math.random()*(max-min) ) + min;
		}
	}
	
});