require(["../scripts/config.js"], function () {
	require(["jquery"], function ($) {
		$(function () {
			// nav二级菜单的显示与隐藏。
			$("nav ul li#te2").hover(function () {
				$(this).children(".man").css({
					"display": "flex"
				})
			}, function () {
				$(this).children(".man").css({
					"display": "none"
				})
			})

			$("nav ul li#te3").hover(function () {
				$(this).children(".women").css({
					"display": "flex"
				})
			}, function () {
				$(this).children(".women").css({
					"display": "none"
				})
			})

			$("nav ul li#te4").hover(function () {
				$(this).children(".clothes").css({
					"display": "flex"
				})
			}, function () {
				$(this).children(".clothes").css({
					"display": "none"
				})
			})


			//滑过尺码选项出现红色边框和红色三角。离开消失
			// 			$("main div.goods div.details div.addCar ul li").not("li.te").hover(function(){
			// 				// $(this).unbind('hover') ;
			// // 				$(this).on("click", function(){
			// // 					$(this).css({
			// // 						"border" : "1px solid red" 
			// // 					})
			// // 					$(this).children("i").css({
			// // 						"opacity" : "1" 
			// // 					})
			// // 					$(this).siblings().css({
			// // 						"border" : "1px solid #e3e3e3" 
			// // 					})
			// // 					$(this).siblings().children("i").css({
			// // 						"opacity" : "0" 
			// // 					})
			// // 				})
			// 				$(this).css({
			// 					"border" : "1px solid red" ,
			// 				})
			// 				$(this).children("i").css({
			// 					"opacity" : "1" 
			// 				})
			// 			},  function(){
			// 				$(this).css({
			// 					"border" : "1px solid #e3e3e3" ,
			// 				})
			// 				$(this).children("i").css({
			// 					"opacity" : "0" 
			// 				})
			// 			})

			//点击尺码选项出现红色边框和红色三角，再次点击其他选项消失。
			$("main div.goods div.details div.addCar ul li").not("li.te").on("click", function () {
				// $(this).unbind('hover') ;
				$(this).addClass("active").siblings().removeClass("active");
				$(this).children("i").addClass("active");
				$(this).siblings().children("i").removeClass("active");
			})
			//选择商品数量，点击增加
			$("main div.goods div.details div.addCar div.f5 a.plus").on("click", function () {
				// console.log($(this).next().val())
				var num = $(this).prev().val();
				// console.log(num)
				num++;
				$(this).prev().val(num);
			})
			//点击减少                                                                                
			$("main div.goods div.details div.addCar div.f5 a.minus").on("click", function () {
				var num = $(this).next().val();
				if (num < 2) {
					$(this).next().val("1")
				} else {
					num--;
					$(this).next().val(num)
				}
			})
			//选择要一起购买的配件。
			$("main div.match div.part ul li div.price div").on("click", function () {
				if ($(this).parent().prev().is(":hidden")) { //判断 “已选规格” 是否出现 。
					$(this).parent().parent().parent().parent().parent().next().show();
					$(this).parent().parent().parent().parent().parent().next().next().show();
					// 					$(this).css({
					// 						"background" : "url(../styles/imgs/tips.png) no-repeat 1px -71px" 
					// 					})

					//隐藏属性框中尺码的点击效果
					$("#hiddenMenu div.size ul li").on("click", function () {
						$(this).addClass("active").siblings().removeClass("active");
					})

					//点击关闭隐藏属性框
					$("#hiddenMenu div.title s").on("click", function () {
						$(this).parent().parent().hide();
						$(this).parent().parent().next().hide();
					})
					//点击取消隐藏属性框
					$("#hiddenMenu div.confirm span.q").on("click", function () {
						$(this).parent().parent().hide();
						$(this).parent().parent().next().hide();
					})
					//点击确定关闭隐藏属性框，出现对号，“已选规格”栏出现，span标签中的值为隐藏属性框中所选的尺码值
					$("#hiddenMenu div.confirm span.s").on("click", function () {
						$(this).parent().parent().hide();
						$(this).parent().parent().next().hide();
						var _value = $(this).parent().prev().find("li.active").text();
						// console.log(_value) ;
						$("main div.match div.part ul li div.price div").css({
							"background": "url(../styles/imgs/tips.png) no-repeat 1px -71px"
						})
						$("main div.match div.part ul li div.myChoice").show();
						$("main div.match div.part ul li div.myChoice span").html(_value)
					})
				} else {
					$(this).css({
						"background": "none"
					})
					$(this).parent().prev().css({
						"display": "none"
					})
				}
			})

			//隐藏商品属性框的操作
			$("main article ul li").on("click", function () {
				$(this).addClass("active").siblings().removeClass("active");
			})

			$("main aside ul.title li").on("click", function () {
				$(this).addClass("active").siblings().removeClass("active");
				// console.log( $(this).text()) ;
				if ($(this).text() == "热销商品") {
					$(this).parent().next().css({
						"display": "block"
					})
					$(this).parent().next().next().css({
						"display": "none"
					})
				} else {
					$(this).parent().next().css({
						"display": "none"
					})
					$(this).parent().next().next().css({
						"display": "block"
					})
				}
			})
			//鼠标滑过底部尺码时，出现全部尺码。
			$("div#product_buy div.size").hover(function () {
				$(this).find("div._size").css({
					"display": "block"
				})
			}, function () {
				$(this).find("div._size").css({
					"display": "none"
				})
			})


			//鼠标滑过底部尺码时,出现红色边框及红色小三角。
			$("div#product_buy div.size div._size ul li").hover(function () {
				$(this).css({
					"border": "1px solid red"
				})
				$(this).children("i").css({
					"opacity": "1"
				})
			}, function () {
				$(this).css({
					"border": "1px solid #e3e3e3"
				})
				$(this).children("i").css({
					"opacity": "0"
				})
			})
			//二维码的出现与消失
			$("div#product_buy div.phone").hover(function () {
				$(this).next().css({
					"display": "block"
				})
			}, function () {
				$(this).next().css({
					"display": "none"
				})
			})
			//滑过侧边栏效果
			$("#menu li").hover(function () {
				$(this).find(".remark").show().animate({
					left: "-93px"
				});
			}, function () {
				$(this).find(".remark").hide();
				$(this).find(".remark").css({
					"left": "-121px"
				})
			})

			//点击top回到顶部
			$(window).scroll(function () {
				//滚动到一定距离，top按钮出现。
				var scrollTop = $(this).scrollTop();
				if (scrollTop >= 75) {
					$("#menu .num_nine .img").fadeIn(500);
				} else {
					$("#menu .num_nine .img").fadeOut(500);
				}
			})

			$("#menu .num_nine .img").on("click", function () {
				// $("#menu .num_nine .img").hide() ;
				$("html").animate({
					scrollTop: 0
				}, 500);
			})
			//当页面滚动到一定距离时，底部“加入购物车”会一直在浏览器最底部显示。
			$(window).scroll(function () {
				var scrollTop = $(this).scrollTop();
				// console.log(scrollTop)
				if (scrollTop >= 500) {
					$("div#product_buy").css({
						"position": "fixed",
						"left": "0",
						"bottom": "0",
					})
				} else {
					$("div#product_buy").css({
						"position": "relative"
					})
				}
				//当页面滚动到一定距离时，底部“加入购物车”回到原来的位置。
				if (scrollTop >= 7180) {
					$("div#product_buy").css({
						"position": "relative"
					})
				}
			})
			//鼠标滑过小图片时  大框切换图片
			$("main div.goods div.details div.imgs ul.smallImg li").hover(function () {
				$(this).attr("id", "active").siblings().removeAttr("id");
				// console.log($(this).css("backgroundImage"));
				$(this).parent().prev().prev().css({
					"background": $(this).css("backgroundImage"),
					"background-size": "cover"
				});
			})
			//鼠标滑过大框时，隐藏的图片hiddenImg出现。
			$("main div.goods div.details div.imgs div.bigImg").hover(function () {
				$(this).next().fadeIn(300);
				$(this).next().children("div._bigImg").css({
					"background": $(this).css("backgroundImage"),
					"background-size": "cover"
				})
			}, function () {
				$(this).next().fadeOut(300);
			})

			//放大镜效果。

			$(function () {
				// 小图片中小方块的宽和高。
				$("main div.goods div.details div.bigImg div.smallCursor").width($("main div.goods div.details div.hiddenImg").width() / $("main div.goods div.details div.hiddenImg div._bigImg").width() * $("main div.goods div.details div.bigImg").width())

				$("main div.goods div.details div.bigImg div.smallCursor").height($("main div.goods div.details div.hiddenImg").height() / $("main div.goods div.details div.hiddenImg div._bigImg").height() * $("main div.goods div.details div.bigImg").height())

				//鼠标进入小图片bigImg时小方块出现。
				$("main div.goods div.details div.bigImg").hover(function () {
					$(this).children("div.smallCursor").fadeIn(300);
				}, function () {
					$(this).children("div.smallCursor").fadeOut(300);
				})

				//大图bigImg和大图img的比例
				var scale = $("main div.goods div.details div.hiddenImg div._bigImg").width() / $("main div.goods div.details div.bigImg").width()

				$("main div.goods div.details div.bigImg").on("mousemove", function (eve) {
					var e = eve || window.event;
					var _left = e.pageX - $(this).offset().left - $("main div.goods div.details div.bigImg div.smallCursor").width() / 2;
					var _top = e.pageY - $(this).offset().top - $("main div.goods div.details div.bigImg div.smallCursor").height() / 2;
					//边界限定。
					$("main div.goods div.details div.bigImg div.smallCursor").css({
						left: Math.min(Math.max(0, _left), $("main div.goods div.details div.bigImg").width() - $("main div.goods div.details div.bigImg div.smallCursor").width()),
						top: Math.min(Math.max(0, _top), $("main div.goods div.details div.bigImg").height() - $("main div.goods div.details div.bigImg div.smallCursor").height())
					})
					//隐藏图片随着smallCursor的移动而移动。
					$("main div.goods div.details div.hiddenImg div._bigImg").css({
						left: -$("main div.goods div.details div.bigImg div.smallCursor").position().left * scale,
						top: -$("main div.goods div.details div.bigImg div.smallCursor").position().top * scale
					})

				})
			})
		})
	})
})