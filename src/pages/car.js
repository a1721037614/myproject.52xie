require(["../scripts/config.js"], function(){
    require(["jquery", "cookie"], function($, cookie){
        //购物车效果，将加入购物车的商品在页面显示。
        // 面向对象写法
        class Car{
            constructor(options){
                this.url = options.url ;
                this.tbody = options.tbody ;

                this.load() ;
                this.addEvent() ;
            }
            
            load(){
                $.ajax({
                    url: this.url ,
                    dataType: "jsonp" ,
                    jsonp: "callback" ,
                    data: {
                        blockIds:"266" 
                    } ,
                    success: (res)=>{
                        // console.log(res.block_266)
                        this.list = res.block_266 ;
                        this.arr = [] ;
                        $.each(this.list, (index, value)=>{
                            let data = value.floorAllocations ;
                            // console.log(data)
                            this.arr = this.arr.concat(data) ;
                            this.arr.splice(32,5) ;
                        })
                        // console.log(this.arr)
                        this.getCookie() ;
                    }
                })
            }
           
            getCookie(){
                // console.log(this.arr)
                this.goods = JSON.parse($.cookie("goods")) ;
                this.display() ;
            }
           
            display(){
                let str = "" ;
               $.each(this.arr, (index, value)=>{
                   $.each(this.goods, (_index, _value)=>{
                        if(value.skuid == _value.id){
                            str += ` <tr style="height:240px;width:auto;">
                                        <td>
                                            <a href="javascript:;" class="img"><img src="${value.img}"></a>
                                            <br>
                                            <a href="javascript:;" class="name">${value.name}</a>
                                        </td>
                                        <td>
                                            颜色:白色 
                                            <br>
                                            尺寸:44.5[100] 
                                        </td>
                                        <td>${value.skuprice}元</td>
                                        <td>${value.skuprice}元</td>
                                        <td class="clear">
                                            <input type="number" value="${_value.num}" min=1 style="width:70px;margin-left:33px;">
                                        </td>
                                        <td class="total">${(value.skuprice).substr(1,value.skuprice.length-1) * _value.num}元</td>
                                        <td goodId="${value.skuid}"><b style="cursor:pointer">删除</b></td>
                                    </tr>`
                        }
                        this.tbody.html(str) ;
                    })
                })
                this.total() ;
            }
           
            addEvent(){
                let that = this ;
                this.tbody.on("click", "b", function(){
                    that.id = $(this).parent().attr("goodId") ;
                    // console.log(that.id) ;
                    $(this).parent().parent().remove() ;
                    that.removeCookie() ;
                })

                this.tbody.on("input", "input", function(){
                    that.id = $(this).parent().next().next().attr("goodId") ;
                    // console.log(that.id) ;
                    that.num = $(this).val() ;
                    that.changeCookie() ;
                })

                $("div.option").find("input").click(function(){
                    $(this).parent().prev().children("tbody").remove() ;
                    that.removeAllCookie() ;
                    that.total() ;
                })
            }
           
            removeCookie(){
                for(var i=0;i<this.goods.length;i++){
                    if(this.goods[i].id == this.id){
                        break ;
                    }
                }
                this.goods.splice(i,1) ;
                $.cookie("goods", JSON.stringify(this.goods)) ;
            }

            removeAllCookie(){
                $.cookie("goods", null) ;
            }

            changeCookie(){
                for(var i=0;i<this.goods.length;i++){
                    if(this.goods[i].id == this.id){
                        this.goods[i].num = this.num
                    }
                }
                $.cookie("goods", JSON.stringify(this.goods)) ;
            }

            total(){
                this.totalPrice = Array.from($("td.total")) ;
                this.num = 0 ;
                for(var i=0;i<this.totalPrice.length;i++){
                    this.price = parseInt(this.totalPrice[i].innerText) ;
                    // console.log(this.price)
                    this.num += this.price ;
                }
                $("div.option").find("span").html(this.num) ;
            }

        }

        new Car({
            url:"https://dms-dataapi.meizu.com/data/jsdata.jsonp?" ,
            tbody:$("tbody")
        })

        
    })
})