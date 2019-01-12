require(["../scripts/config.js"], function(){
	require(["jquery", "cookie"], function($, cookie){
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

			// 商品列表二级菜单的显示与隐藏。
			$("main article li:has(ul) a").click(function(e){
				if(e.target != this) return;

				if( $(this).parent().children("ul").is(":hidden") ){
					$(this).parent().children("ul").css({
						"display" : "block"
					});
					$(this).parent().css({
						"border" : "none"
					})
					$(this).next().html("-")
					// $(this).parent().sliblings().children("ul").css({
					// 	"display" : "none" 
					// })
					$(this).css({
						"color" : "red"
					}).parent().siblings().find("a").css({
						"color" : "#706d6d"
					})
					$(this).parent().parent().prev().prev().css({
						"color" : "#000"
					})
				} else {
					$(this).parent().children("ul").css({
						"display" : "none"
					});
					$(this).css({
						"color" : "#706d6d"
					})
					$(this).parent().css({
						"border-bottom" : "1px dashed #ccc"
					})
					$(this).next().html("+")
				}
			})
		
			$("main article li:has(ul) div.box").click(function(e){
				if(e.target != this) return;

				if( $(this).parent().children("ul").is(":hidden") ){
					$(this).parent().children("ul").css({
						"display" : "block"
					});
					$(this).parent().css({
						"border" : "none"
					})
					// $(this).parent().sliblings().children("ul").css({
					// 	"display" : "none" 
					// })
					$(this).html("-").parent().siblings().find("a").val("+")
					$(this).parent().parent().prev().prev().css({
						"color" : "#000"
					})
				} else {
					$(this).html("+")
					$(this).parent().children("ul").css({
						"display" : "none"
					});
					$(this).css({
						"color" : "#706d6d"
					})
					// $(this).parent().css({
					// 	"border-bottom" : "1px dashed #ccc"
					// })
				}
			})

			//点击二级菜单改变title的内容。
			$("main article").children("ul").children("li").children("a").click( function(){
				let sort = $("main article div.title a.sort") 
				let hidden1 = $("main article div.title a.hidden1")
				let hidden2 = $("main article div.title a.hidden2")
				sort.html($(this).html()+"&nbsp;"+">")
				hidden1.html("")
				hidden2.html("")
			})

			$("main article li:has(ul.partOne) ul.partOne").children("li").children("a").click(function(){
				let hidden1 = $("main article div.title a.hidden1")
				let hidden2 = $("main article div.title a.hidden2")
				// console.log(hidden1)
				hidden1.html($(this).html()+"&nbsp;"+">")
				hidden2.html("")
			})

			$("main article li:has(ul.partTwo) ul.partTwo").children("li").children("a").click(function(){
				let hidden2 = $("main article div.title a.hidden2")
				// console.log(hidden1)
				hidden2.html($(this).html()+"&nbsp;"+">")
			})

			//点击条件隐藏框出现，所选条件再上面显示。
				
			let num = 0 ;
			$("aside div.classify div.brand").find("li").click(function(){
				$(this).parent().parent().prev().css({
					"display" : "flex" 
				});
			
				let a = $("<a></a>").html($(this).children("a").html()) ;
				$(this).parent().parent().prev().find("div.condition").append(a) ;
				// var str = `${$(this).html()}` ;
				// console.log(str) ;
				// $(this).parent().parent().prev().find("div.condition").html(str) ;
			})

			$("aside div.classify div.price").find("li").click(function(){
				$(this).parent().parent().prev().prev().css({
					"display" : "flex" 
				});
				let a = $("<a></a>").html($(this).children("a").html()) ;
				$(this).parent().parent().prev().prev().find("div.condition").append(a) ;
				// var str = `${$(this).html()}` ;
				// $(this).parent().parent().prev().prev().find("div.condition").html(str) ;
			})

			//点击某个所选条件，所选条件消失。利用事件委托。
			var hidden = document.querySelector("div.hidden") ;
			hidden.onclick = function(eve){
				var e = eve || window.event ;
				var target = e.target || e.srcElement ;
				if(target.nodeName == "A"){
					// console.log(e.target)
					e.target.remove() ;
				}
			}

			//点击清空筛选条件，删除所有所选条件。
			$("aside div.classify div.hidden span").click(function(){
				$(this).prev().empty() ;
				$(this).parent().hide() ;
			})
			
			// 标题点击效果
			$("aside div.title ul li").click(function(){
				$(this).addClass("active").siblings().removeClass("active") ;
			})
			
			
			$("aside div.title ul li.te").click(function(){
				// console.log($(this).children("i")) ;
				console.log(num)
				if(num == 0){
					num = 1 ;
					$(this).children("i").css("background","url(../styles/imgs/smallimg.png) no-repeat 0 -57px")
				} else {
					num = 0 ;
					$(this).children("i").css("background","url(../styles/imgs/smallimg.png) no-repeat 0 -85px")
				}
			}) 

			$("aside div.title ul li.te").siblings().click(function(){
				$("aside div.title ul li.te").children("i").css("background" , "#eee")
			})

			// 点击白色空白框出现对勾。
			$("aside div.title div.white").click(function(){
				if( num == 0){
					num = 1 ;
					$(this).children("i").css("background","url(../styles/imgs/smallimg.png) no-repeat 0 -121px")
				} else {
					num = 0 ;
					$(this).children("i").css("background","#fff")
				}
			})
			//ajax请求数据渲染页面。
			
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
						var list = res.block_266 ;
						var arr = [] ;
						for(let i = 0;i<list.length;i++){
							var data = list[i].floorAllocations ;
							// console.log(data) ;
							arr = arr.concat(data) ;
							arr.splice(32,5)
						}
						// console.log(arr) ;
						var str = "" ;
						arr.forEach(ele =>{
							str += `<li>
										<div class="top">NEW</div>
										<a href="https://localhost:8000/pages/detail.html#">
											<img src="${ele.img}" />
										</a>
										<p class="brand">魅族</p>
										<a href="https://localhost:8000/pages/detail.html#">
											<p class="name">${ele.name}</p>
										</a>
										<p class="price">磁场价：<span>${ele.skuprice}</span></p>
										<div class="addCar" goodId="${ele.skuid}">加入购物车</div>
									</li>`
						})
						$("aside div.list ul").html(str)  ;
					}
				})
				
				
				// 点击加入购物车存cookie。
				$("aside div.list ul").on("click", "div.addCar", function(){
					// 得到所要加入购物车的商品的ID。 
					let id = $(this).attr("goodId") ;
					// 获取页面中的cookie。转成json。
					let goods = JSON.parse($.cookie("goods")) || [] ;
					// 如果页面中没有cookie（即第一次存cookie），则直接将id和num存入cookie
					if(goods.length < 1){
						goods.push({
							id: id ,
							num: 1
						})
					} else {    //  如果页面中已经存在cookie，判断要存入的cookie是否已经存在。
						let onOff = true ;
						$.each(goods, (index, value)=>{  // 遍历已经存在的cookie，判断要存入的cookie是否已经存在。如果已经存在，num++。
							if(value.id == id){
								goods[index].num++ ;
								onOff = false ;
							}
						})
						if(onOff){  
							goods.push({   // 如果要存入的cookie还不存在，则直接将id和num存入cookie
								id: id ,
								num: 1
							})
						}
					}
					// 最后，将要存的信息存入cookie
					$.cookie("goods", JSON.stringify(goods)) ;
					console.log(JSON.parse($.cookie("goods"))) ;
				})
			})

			
			// 分页器滑过效果。
			$("aside ul.overleaf li").hover(function(){
				$(this).addClass("active").siblings().removeClass("active") ;
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

			



			
		})
	})
})