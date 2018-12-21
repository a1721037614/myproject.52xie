require(["../scripts/config.js"], function(){
	require(["jquery"], function($){
		$(function(){
			// nav二级菜单的显示与隐藏。
			$("nav ul li#te2").hover(function(){
					$(this).children(".man").css({
						"display" : "flex" 
					})
			}, function(){
					$(this).children(".man").css({
						"display" : "none"
					})
			})
			
			$("nav ul li#te3").hover(function(){
				$(this).children(".women").css({
					"display" : "flex" 
				})
			}, function(){
				$(this).children(".women").css({
					"display" : "none"
				})
			})
			
			$("nav ul li#te4").hover(function(){
				$(this).children(".clothes").css({
					"display" : "flex" 
				})
			}, function(){
				$(this).children(".clothes").css({
					"display" : "none"
				})
			})
			
			
		})
	})
})