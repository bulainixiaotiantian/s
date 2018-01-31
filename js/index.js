$(function(){

			htmlFont();//调整html字体尺寸-----------

			marquee();//走马灯------------
			 
			footer_button();//tabbar跳转路由---
			
			tab();//选项卡切换---
			
			
			
			
			//-------------------------------控制首页底部四个按钮--------------------//
			function footer_button(){
				function getNode(name){
					$(this).parent().siblings().find(".img1");
				}
				$(".footer a").each(function(i){
					$(this).attr("index",0);//让每一个a有个属性index等于0
					$(this).click(function(){
						var _img1=$(this).children(".img1");//找到子级img1
						var _img2=$(this).children(".img2");//找到子级img2
						var sib_img1=$(this).parent().siblings().find(".img1");//找到另外两个的img1
						var sib_img2=$(this).parent().siblings().find(".img2");//找到另外两个的img2
						var sib_text=$(this).parent().siblings().find("a");//找到另外两个的a
						function all(){
							sib_img1.css("display","block");
							sib_img2.css("display","none");
						};
							
						if($(this).attr("index")==0){//a的属性index等于0让img1隐藏，img2显示
							_img1.css("display","none");
							_img2.css("display","block");
							$(this).css("color","#ee926e").attr("index",1);//改变a的index属性为1；
							all();					//让其他两个按钮为（默认样式）没被点击时的样式
							sib_text.css("color","#000000");
							$(this).parent().siblings().children().attr("index",0);
						}else if($(this).attr("index")==1){//a的属性index等于1让img2隐藏，img1显示
							all();
							$(this).css("color","#000000").attr("index",0);
						};
						console.log($(this).attr("index"));

					});
				});
			
			}
			
			//走马灯-函数---------------------------------------------------------------
			  function marquee(){
					var time;
					var notice=$(".notice_text");
					var i=0;
					function run(spead){
						time=setInterval(
							function(){
								i+=spead;
								notice.css("left",-i+"px");
								if(i>notice.width()/2){
									i=0;
								}
							},20);
					};
					run(1);
					 $(".marquee").mouseover(
					 	function(){
					 		clearInterval(time);
					 	}
					 );
					 $(".marquee").mouseout(
					 	function(){
					 		run(1);
					 	}
					 );
			  };
			  
			  
			  //调整html字体尺寸-函数--------------------------------------
			function htmlFont(){
				$("html").css("font-size",$(window).width()/750*100+"px");
				$(window).resize(function(){
					$("html").css("font-size",$(window).width()/750*100+"px");
				});
			};
			
			 //分享文章-函数---------------------------------------------------
			function toshare(){
				$(".am-share").addClass("am-modal-active");	
				if($(".sharebg").length>0){
					$(".sharebg").addClass("sharebg-active");
				}else{
					$("body").append('<div class="sharebg"></div>');
					$(".sharebg").addClass("sharebg-active");
				}
				$(".sharebg-active,.share_btn").click(function(){
					$(".am-share").removeClass("am-modal-active");	
					setTimeout(function(){
						$(".sharebg-active").removeClass("sharebg-active");	
						$(".sharebg").remove();	
					},300);
				})
			}
			
			
			
			//选项卡切换-函数---------------------------------------------------
			function tab(){
				var oLi=$("#tab_btn li"); //找到选项卡的按钮--------
				var uLi=$("#tab_con ul");//找到内容的数组--------
				
				oLi.each(function(index){
					$(this).click(function(){
						var num=index;
						all();
						$(this).addClass("chose");
						uLi.eq(num).css("display","block");
					});
				});
				
				function all(){
					oLi.removeClass();
					uLi.css("display","none");
				};
				
				
			};
			
			
			
			
	
})
