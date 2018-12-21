
require(["../scripts/config.js"], function(){
	require(["jquery"] ,function($){
		$(function(){

			//下载二维码 的显示与隐藏。
			$("div.appLoad p").hover(function(){
				$(this).next().fadeIn()
			}, function(){
				$(this).next().fadeOut()
			})
			
			//  扫码登录的隐藏部分 的显示与隐藏
			$("div.appLoad div.QRcode img._QRcode").on("mouseover", function(){
				$(this).css({"margin-left": "7px"})
				$(this).next().show()
			})
			
			$("div.appLoad div.QRcode").on("mouseleave", function(){
				$(this).find("img._QRcode").css({ "margin-left": "100px" })
				$(this).find("img._userlogin").hide()
			})
			
			//  点击不同的登录方式  分别出现不同的登录方式
			$("div.main-r div.option a.option-r").on("click", function(){
				$(this).css({"color": "#f00"}) ;
				$(this).prev().prev().css({"color": "#000"}) ;
				$(this).parent().parent().find("div.appLoad").show() ;
				$(this).parent().parent().find("div.mylogin").hide() ;
			})
			
			$("div.main-r div.option a.option-l").on("click", function(){
				$(this).css({"color": "#f00"}) ;
				$(this).next().next().css({"color": "#000"}) ;
				$(this).parent().parent().find("div.mylogin").show() ;
				$(this).parent().parent().find("div.appLoad").hide() ;
			})
		
		})
	})
})
