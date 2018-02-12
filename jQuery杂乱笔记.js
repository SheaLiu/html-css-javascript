//jQuery对象与DOM对象不一样，通过jQuery方法包装后的对象，是一个类数组对象，唯一相似的是它们都能操作DOM
//1.基本筛选选择器

//找到第一个和最后一个div
$(".div:first")
$(".div:last")


//从奇数偶数开始
$(".div:odd")
$(".div:even")

//选择匹配集合中所有索引值大于给定index参数的元素,gt是一个段落筛选，从指定索引的下一个开始，lt与gt相反
$(".aaron:gt(3)")

//选择所有元素去除不匹配给定的选择器的元素，选中所有紧接着没有checked属性的input元素后的p元素，赋予颜色
$("input:not(:checked)+p")

//jqObj.get(0);
                //get(下标)：和eq类似，区别get返回原生对象，eq返回jq对象
                var domObj = jqObj.get(0);
                //方式2  jqObj[0] == jqObj.get(0)
                var domObj = jqObj[0];
                
                console.log(domObj);
                domObj.style.width = '200px';
                
                jqObj = $('div');
                //get()用法2：不传参数
                var arr = jqObj.get();
                console.log(arr);
            });

//2.内容筛选选择器

//查找所有class='div'中DOM元素中包含"contains"的元素节点，如果:contains匹配的文本包含在元素的子元素中，同样认为是符合条件的
$(".div:contains(':contains')")
//:contains与:has都有查找的意思，但是contains查找包含“指定文本”的元素，而has查找包含“指定元素”如span的元素


//3.可见性筛选选择器 :hidden选择器不仅仅包含样式是display='none'的元素，还包括隐藏表单，visibility等

$(":visible")
$(":hidden")


//4.用attr()方法来获取和设置元素属性

attr(attributeName)  //获取属性的值
//Attribute和Property的区别
//前者用于节点自带属性比如id，class，title，后者还可以用于附加的内容比如tagname，nodename等，获取要用.prop()
//prop():用来处理元素本身自带属性
			var value = $("#p1").prop('name');
			console.log(value);//undefined
			//自带属性
			var value2 = $("#p1").prop('id');
			console.log(value2);//p1
			
			//属性设置
			$('#p1').prop('classA','valueTest');
			
			//处理系统自带属性正常
			$('#p1').prop('class','valueTest');


//5.val()只能用于处理表单元素的值，比如input，select，textarea
.val(value)
.val(function)
//处理select元素时，当没选择项被选中则返回null


//6.切换样式toggleClass()

 //toggleClass(参数1，参数2)
			//参数1：类名 参数2：boolean：控制删除或者添加 true添加 false删除
			//删除
			$('#p1').toggleClass('one two three newClass',false);
			
			//添加
			$('#p1').toggleClass('one',true);
			
			//$('#p1').toggleClass('one');
			//$('#p1').toggleClass('one');
			
			//toggleClass:只传参数1类名，如果元素有对应的类名，删除，如果没有添加
			document.onclick = function(){
				$('#p1').toggleClass('one');
            };
            
           
           
//7..css()获取元素样式属性的计算值或设置属性，可以传入一个对象，同时设置多个样式

.css({'background':'yellow'})



//8.jQuery节点创建与属性处理

//创建为文本节点
$("<div>我是文本节点</div>")
//创建为属性节点
$("<div id='test' class='aaron'>我是文本节点</div>



//9.DOM内部插入prepend()与prependTo()

//将指定元素插入到匹配元素里面作为它的第一个子元素


//10.DOM节点删除empty()  不能删除自己本身这个节点，移除子元素以及元素里的文本

//会通过empty移除了当前div元素下的所有p元素，但本身id=test的div元素没有被删除



//11.过滤器  选择器表达式用来过滤

$("p").remove(":contains('3')")
== 
$("p").filter(":contains('3')").remove()



//12.保留数据的删除操作detach()，从当前页面中移除该元素，但保留这个元素的内存模型对象

p=$("p").detach()
$("body").append(p)
//仅仅显示效果没了，append以后又回到文档流


//13.DOM拷贝clone()，克隆节点 
//深度复制所有匹配的元素集合
$("div").clone(true)
//结构，事件与数据都克隆


//14.replaceWith()和replaceAll(target)  主要是源和目标的位置区别
//前者用提供的内容替换集合中所有匹配的元素并返回被删除元素的集合。后者用集合的匹配元素替换每个目标元素


//15.wrap()方法：在集合中匹配的每一个元素周围包裹一个HTML结构 +父元素 针对单个dom
.wrap(function)
//回调函数返回用于包裹匹配元素的HTML内容或jQuery对象
.unwrap()//删除父级元素
.wrapAll()//针对所有元素，都增加一个父div结构
.wrapInner()//将合集中的元素内部所有子元素用其他元素包裹起来
			//wrap:对应每一个li都对应包裹一个div
			//$("li").wrap("<div></div>");
			//wrapALl把所有li被div包裹
			//$("li").wrapAll("<div></div>");
			//wrapInner每个li的内容被对应div包裹
			$("li").wrapInner("<div></div>");
			
      

//16.jQuery遍历方法

//children()
//find() 后代方法（包含父子关系）  不包括自己
//parent()一直查找到祖先节点
//closest()方法  接受一个匹配元素的选择器字符串
//next()匹配合集中每一个元素的下一个兄弟元素
//prev()前一个兄弟元素
//siblings()前后所有同辈元素
//add()
//each()  for循环



//17.鼠标事件

//mousedown按下触发&mouseup松手触发  组合起来click事件
//mouseover&mouseout移入移出事件
//mouseenter&mouseleave  与上面的区别（冒泡的方式处理问题）该用法只会在绑定他的元素上被调用，而不会在后代节点上被触发

//keypress()每次获取的都是之前输入的，当前输入的获取不到


//18.jQuery事件对象的属性和办法
//event.currentTarget:在事件冒泡过程中的当前DOM元素
//this&event.target比较：JS中this是可以变化的（由于冒泡），但是event.target是不变的


//19.hide()隐藏元素&.show()显示元素
.hide("fast/slow") 200ms/600ms
$().hide({
duration:3000,
complete:function(){
alert()}})


//20.下拉动画slideDown()传递一个回调，用于知道动画是什么时候结束
//一开始元素需要隐藏 display:none


//21.切换显示或隐藏匹配元素toggle() 动态效果从右到左
//上卷下拉切换slideToggle 动态效果从下到上

var div1 = $("#div1");
		$(function(){
			//高度减小，为0时隐藏
			$("#slideUp").click(function(){
				$("#div1").slideUp(3000,function(){
					console.log("上滑完成");
				});
			});
			$("#slideDown").click(function(){
				$("#div1").slideDown(3000,function(){
					console.log("下滑完成");	
				});
				
			});
			$("#slideToggle").click(function(){
				$("#div1").stop().delay().slideToggle(1000,function(){
					console.log("上滑或下滑完成");
					var isHide = $("#div1").css("display") == "block" ? false : true;
					isHide ? $("#slideToggle").text("下滑") : $("#slideToggle").text("上滑");
				});
			});
			//slideUpAndDown:先上滑，完后下滑
			$("#slideUpAndDown").click(function(){
				//1：动画完成回调函数处理
//				div1.slideUp(2000,function(){
//					div1.slideDown("slow");
//				});
				//2：代码回继续往下执行，动画是异步操作，不会阻塞代码执行，但是未被执行的动画效果会被放到等待队列中，slideDown会被放在队列中，只有等上一个动画执行完成后，从队列去除第一个动画执行
//				div1.slideUp(2000);
//				div1.slideDown(2000);
//				div1.fadeOut(2000);
//				div1.fadeIn(2000);
//				div1.slideUp(2000);
//				div1.slideDown(2000);
				
				div1.slideUp(2000).slideDown(2000);
			});
        });


//22.fadeOut()淡出fadeIn() 用于隐藏所有匹配的元素，并带有淡出的过渡动画效果
//淡入淡出
		$("#fadeOut").click(function(){
			//透明度opacity为零时隐藏
			div1.fadeOut(3000,function(){
				console.log("淡出隐藏完成");
			});
		});
		
//淡入：显示
		$("#fadeIn").click(function(){
			div1.fadeIn(1000,function(){
				console.log("淡入完成");
			});
		});
		
		$("#fadeToggle").click(function(){
			div1.fadeToggle(1000,function(){
				console.log("淡入或淡出完成");
				var ifHide = div1.css('display') == "block" ? false : true;
					//ifHide ? 成立，执行：前，否则执行：后面
					ifHide ? $("#fadeToggle").text("淡入") : $("#fadeToggle").text("淡出");
			});
		});
		
		//fadeTo
		/*
		 参数2变化：指定透明度
		 * */
		$("#fadeTo").click(function(){
			div1.fadeTo("slow",0.5,function(){
				console.log("动画完成");
			});
        });



//23.animate() 如果多个元素执行动画，回调将在每个匹配的元素上执行一次
var div1 = $("#div1");
		/*
		 animate(属性列表，时间，时长，变化曲线，回调函数)
		 * */
		$(function(){
			$("#custom1").click(function(){
				div1.animate({
					width:300,
					height:300,
					//复合属性使用驼峰命名
					fontSize: 100,
					//背景渐变不支持
					backgroundColor: "blue",
					left:100,
					top:100,
				},1000,function(){
					console.log('动画完成');
				});
				
			});
			$("#custom2").click(function(){
				//字符串或者数字，单位可以加可以省略
				//+= 在之前基础上加
				div1.animate({
					//width:'+=300',
					//height:'+=100',
					left: '+=50',
					top:'+=50',
				},2000);
			});
			$("#custom3").click(function(){
				div1.animate({width:300,},2000);
				//div1.delay(2000,'fx');//等待2秒继续下一个队列动画
				div1.animate({height:300},2000);
				div1.animate({width:300},2000);
				div1.animate({height:200},2000);
			});


//24.停止动画stop()
/*
			 stop(参数1，参数2)
			 ：两个参数是boolean值，默认都是false
			 参数1：stopAll(默认false是只清除正在执行动画，马上开启队列中第一个等待对话，如果给true:会清除正在执行动画和队列中所有的动画)
			 参数2：goEnd:默认false：直接停止动画，如果是true：停止动画，但是动画最终效果会显示
			 * */
			$("#stop").click(function(){
				//div1.stop();
				//div1.stop(true);
				//div1.stop(false,true);
				
				//停止当前动画和队列中所有动画，并且显示当前动画的效果
				//div1.stop(true,true);
				
				//延迟动画执行
				//div1.delay(2000);
				
				//结束动画（立即停止当前对话，和队列中所有等待动画，并且：元素效果是动画结束后的最终效果）
				div1.finish();
			});
        });













