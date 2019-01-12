
require(["../scripts/config.js"], function(){
	require(["jquery", "swiper"], function($, Swiper){
		$(function(){
			
			//这里是轮播图效果
			var mySwiper = new Swiper ('.swiper-container', {
				// direction: 'vertical', // 垂直切换选项
				loop: true ,// 循环模式选项
				autoplay: true,
				effect: "fade",
				pagination: {
				el: '.swiper-pagination',
				clickable: true
				},
					
				// 如果需要前进后退按钮
				navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
				},
			})
			
			//鼠标进入轮播图时，出现前进后退按钮
			mySwiper.el.onmouseover=function(){
				mySwiper.navigation.$nextEl.removeClass('hide');
				mySwiper.navigation.$prevEl.removeClass('hide');
			}
			
			//鼠标离开轮播图时，前进后退按钮消失
			mySwiper.el.onmouseout=function(){
				mySwiper.navigation.$nextEl.addClass('hide');
				mySwiper.navigation.$prevEl.addClass('hide');
			}
			//点击查看更多商品
			$("#click1").on("click",()=>{
					$("#click1").prev().find("li.te").fadeIn() ;
					$("#click1").hide() ;
					$("#click2").show() ;
			})
			//点击隐藏商品
			$("#click2").on("click",()=>{
					$("#click2").prev().prev().find("li.te").hide() ;
					$("#click1").show() ;
					$("#click2").hide() ;
			})
			
			// console.log($("#click").prev().find("li.te"))
	     //nav 二级菜单的出现与消失
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
			 //右侧边导航栏滑过效果
			 $("#menu li").hover(function(){
				$(this).find(".remark").show().animate({left: "-93px"}) ;
			 }, function(){
				$(this).find(".remark").hide() ;
					$(this).find(".remark").css({
						"left" : "-121px"
					})
			 })
			 
			 //点击top回到顶部
			$(window).scroll(function(){
				/** ==============================滚动到一定距离，显示楼层导航================================ */
				var scrollTop = $(this).scrollTop();
				if(scrollTop >= 75) {
					$("#menu .num_nine .img").fadeIn(500);
				} else {
					$("#menu .num_nine .img").fadeOut(500);
				}
			})
			
			$("#menu .num_nine .img").on("click", function(){
				 // $("#menu .num_nine .img").hide() ;
				 $("html").animate({scrollTop: 0}, 500);
			})
			
			//ajax请求数据渲染页面。
			// $(function(){
			// 	$.ajax({
			// 		url:"https://dms-dataapi.meizu.com/data/jsdata.jsonp?" ,
			// 		dataType:"jsonp" ,
			// 		jsonp:"callback" ,
			// 		data:{
			// 			blockIds:"266"
			// 		} ,
			// 		success:function(res){
			// 			var list = res.block_266 ;
			// 			// console.log(list[2]) ;
			// 			// console.log(list)
			// 			var arr = [] ;
			// 			for(var i=0;i<list.length;i++){
			// 				var data = list[i].floorAllocations ;
			// 				// console.log(data[0]) ;
			// 				arr = arr.concat(data) ;
			// 				arr.splice(30,5)
			// 			}
			// 			console.log(arr) ;
			// 			// var arr1 = arr.slice(0,20)
			// 			// var arr2 = arr.slice(20,30)
			// 			// console.log(arr2) ;
			// 			var str = "" ;
						
			// 			arr.forEach(ele => {
			// 				str += `<li>
			// 							<a href="https://localhost:8000/pages/detail.html#"><img src="${ele.img}"></a>
			// 							<span>${ele.name}</span>
			// 							<p>${ele.skuprice}</p>
			// 						</li>`
			// 			})
			// 			$(".loadmore ul").html(str) ;	
			// 			for(var i=20;i<$(".loadmore ul li").length;i++){
			// 				$(".loadmore ul li").eq(i).addClass("te") ;
			// 			}
			// 		}
			// 	})
			// })

			$(function(){
				$.ajax({
					url:"https://dms-dataapi.meizu.com/data/jsdata.jsonp?" ,
					dataType:"jsonp" ,
					jsonp:"callback" ,
					data:{
						blockIds:"266"
					} ,
					success:function(res){
						// console.log(res.block_266) ;
						var arr = [] ;
						for(var i=0;i<res.block_266.length;i++){
							var list = res.block_266[i].floorAllocations ;
							// console.log(list) ;
							arr = arr.concat(list)
							arr.splice(30,5)
						}
						// console.log(arr) ;
						var str = "" ;	
						arr.forEach(ele => {
							str += `<li>
										<a href="https://localhost:8000/pages/detail.html#"><img src="${ele.img}"></a>
										<span>${ele.name}</span>
										<p>${ele.skuprice}</p>
									</li>`
						})
						$(".loadmore ul").html(str) ;
						for(var i=20;i<arr.length;i++){
							$(".loadmore ul li").eq(i).addClass("te") ;
						}
					}
				})
			})
		})
	})
})

