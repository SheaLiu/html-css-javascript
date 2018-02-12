//1.翻转字符串reverse
function reverseString(str) {
    var change= str.split("");
    change.reverse();
    str=change.join('');
    return str;
  }
  reverseString("hello");

//2.计算一个整数的阶乘
function factorialize(num) {
    if(num<=1){
      return 1;
    }
    else{
    return num * factorialize(num-1); // return num*arguments.callee(num-1);
  }
  }
  factorialize(5);

//3.检查回文字符
function palindrome(str) {
    var x= str.replace(/[\W_]/g, '').toLowerCase();
    var y=x.split('').reverse().join('');
    if(x==y){
    return true;
  }else{
    return false;
  }
  }
  palindrome("eye");

//4.在句子中找出最长单词，并返回他的长度
function findLongestWord(str) {
    var array= str.split(" ");
    var result=0;         //先定一个小目标
       for(var i=0;i<array.length;i++){  //遍历单词
          if (result<=array[i].length) {     // 单词长度与result比较
               result=array[i].length;    //长单词长度赋值给result并进行下一次比较
            }
        }
    return result;
  }
  findLongestWord("The quick brown fox jumped over the lazy dog");


//5.字符串的每个单词首字母大写  map
function titleCase(str) {
    var array=str.split(" ");
    var upArray =array.map(function(x){
          var tmpArray = x.toLowerCase().split("");
          tmpArray[0] =  tmpArray[0].toUpperCase();
          return tmpArray.join("");
      });
      str = upArray.join(" ");
     
  return str;
  }
  
  titleCase("I'm a little tea pot");


//6.找出多个数组中的最大数 Math.max() ???
function largestOfFour(arr) {
    var a;
    var array=[];
    for(var i=0; i<arr.length; i++){
      a=Math.max(arr[i]);
      array[i]=a;
    }  return array;
  }
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  

//7.检查字符串结尾 判断一个字符串(str)是否以指定的字符串(target)结尾。 substr()
function confirmEnding(str, target) {
    var a=str.length;
    var c=target.length;
    var b=str.substr(a-c);
    if(b==target){
      return true;
    }else{
    return false;
  }
  }
  
  confirmEnding("Bastian","n");
  

//8.重复输出字符串 重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。
function repeat(str, num) {
    var x=[];
    if(num>0){
      for(var i=0;i<num;i++){
       x[i]=str;
      }
    }
    return x.join("");
  }
  
  repeat("abc", 3);


//9.截断字符串如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。  slice().
//切记，插入到字符串尾部的三个点号也会计入字符串的长度.
//但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。
function truncate(str, num) {
    var x=[];
    var y=str.length;
    if(y>num){
      if(num<3){
        x=str.slice(0,num);
      }else{
      x=str.slice(0,num-3);} 
    
    return x+"...";
  
  }else{
    return str;
  }
  }
  truncate("A-tisket a-tasket A green and yellow basket", 11);
  
//10.分割数组 把一个数组arr按照指定的数组大小size分割成若干个数组块。slice()
function chunk(arr, size) {
    var newArr1=[];
    for(var i=0;i<arr.length;i=i+size){
      newArr1.push(arr.slice(i,i+size));
    }
    return newArr1;
  }
  
  chunk(["a", "b", "c", "d"], 2);
  
//11.截断数组 返回一个数组被截断n个元素后还剩余的元素，截断从索引0开始。array.splice(start, deleteCount)
function slasher(arr, howMany) {
  
    var newArr1=arr.splice(howMany);
    return newArr1;
  }
  slasher([1, 2, 3], 2);
  

//12.比较字符串 indexOf
function mutation(arr) {
    var arr2=arr[1].toLowerCase().split("");
     for(var i=0;i<arr2.length;i++){
       if(arr[0].toLowerCase().indexOf(arr2[i])<0){
         return false;
       }
     }
     return true;
   
   }
   
   mutation(["hello", "hey"]);
   

//13.过滤数组假值 var new_array = arr.filter(callback[, thisArg])
function bouncer(arr) {
    function isBigEnough(element) {
      if(element!==false || element!==null || element!==0 || element!=="" || element!==undefined || element!==NaN){
        return element;
      }
    }
    var filtered =arr.filter(isBigEnough);
    return filtered;
  
  }
  
  bouncer([7, "ate", "", false, 9]);
  
  
//14.摧毁数组 argument
function destroyer(arr) {
  
    for(i=1;i<arguments.length;i++){
      
      for(j=0;j<arr.length;j++){
        
        if(arr[j]==arguments[i]){
          
          arr.splice(j,1,false);//起始项数，要删除的值数，添加项内容
        }
      }
  
    }
    
    arr=arr.filter(function(a){
      
      return a;
      
    });
    return arr;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);


//15.数组排序并找出索引 sort()
function where(arr, num) {
    arr.push(num);
    arr.sort(function(a,b){
      return a-b;
    });
    var newArr=arr.indexOf(num);
    return newArr;
  }
  
  where([40, 60], 50);
  




//1.一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。apply(),reduce()
function sumAll(arr) {
    var newArr=[];
    var min=Math.min.apply(null,arr);
    var max=Math.max.apply(null,arr);
    var sum=0;
    
    var sumFun=function(max,min){
      for(i=0;i<(max-min+1);i++){
        newArr.push(min+i);
      }
     
      var value=newArr.reduce(function(previousValue,currentValue){
        return previousValue + currentValue;
      });
      return value;
    };
  
    sum=sumFun(max,min);
    return sum;
  }
  
  sumAll([1, 4]);
  
  

//2.比较两个数组，然后返回一个新数组，该数组的元素为两个给定数组中所有独有的数组元素。换言之，返回两个数组的差异。
function diff(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var a=[];
  var b=[];
  for(i=0;i<arr1.length;i++){
    if(arr2.indexOf(arr1[i])=== -1){
      a.push(arr1[i]);
    }
  }
  for(j=0;j<arr2.length;j++){
    if(arr1.indexOf(arr2[j])=== -1){
      b.push(arr2[j]);
    }
  }
  newArr=a.concat(b);
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);


//3.使用给定的参数对句子执行一次查找和替换，然后返回新句子。替换时保持原单词的大小写。例如，如果你想用单词 "dog" 替换单词 "Book" ，你应该替换成 "Dog"。
// repalce()  charAt() 
function myReplace(str, before, after) {
    //判断before字符串首字母是否大写，若是，则将after字符串首字母也替换为大写；
   if(before.charAt(0)<'a'){
     
     var a=after.charAt(0);
     after=after.replace(a,a.toUpperCase());    
   }
   str=str.replace(before,after);
   return str;
 }
 myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

 //4.从传递进来的字母序列中找到缺失的字母并返回它。如果所有字母都在序列中，返回 undefined。
 function fearNotLetter(str) {
    //将字符串转为ASCII码，并存入数组
   var arr=[];
   for(var i=0; i<str.length; i++){
     arr.push(str.charCodeAt(i));
   }
   for(var j=1; j<arr.length; j++){
     var num=arr[j]-arr[j-1];
     //判断后一项减前一项是否为1，若不为1，则缺失该字符的前一项
     if(num!=1){
       //将缺失字符ASCII转为字符并返回 
       return String.fromCharCode(arr[j]-1); 
     }
   }
 }
 fearNotLetter("abce");


 //5.写一个 function，传入两个或两个以上的数组，返回一个以给定的原始数组排序的不包含重复值的新数组。
 //argument filter() concat()
 function unite(arr1, arr2, arr3) {
    for(var j=1; j<arguments.length; j++){
     
     var filteredArr=arguments[j].filter(function(num){
       for(var i=0; i<arr1.length; i++){
         if(arr1[i]==num){
           return false;
         }
       }
       return true;
     });
     arr1=arr1.concat(filteredArr);
   } 
   return arr1;
 }
 
 unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
 
 
//6.将字符串转换为 spinal case。Spinal case 是 all-lowercase-words-joined-by-dashes 这种形式的，也就是以连字符连接所有小写单词。
function spinalCase(str) {
    var newStr='';
    var p=/[\s_]/g;
    
    if(!p.test(str)){
       var arr=str.split('');
       for(var i=0; i<arr.length; i++){
         if(arr[i]<'a'){                             //???
           newStr=newStr+' ';
         }
         newStr=newStr+arr[i];
       }
      str=newStr;
     }
    //判断传入字符串中间是否含有空字符，若没有则在各单词间加入空格
    str=str.toLowerCase();
    str=str.replace(p,'-');// "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    return str;
  }
  
  spinalCase('This Is Spinal Tap');




//7.给一个正整数num，返回小于或等于num的斐波纳契奇数之和。 splice,filter
//斐波纳契数列中的前几个数字是 1、1、2、3、5 和 8，随后的每一个数字都是前两个数字之和。
//此题不能用递归来实现斐波纳契数列。因为当num较大时，内存会溢出，推荐用数组来实现。
function sumFibs(num){
    var arr=[1,1];
    for(var i=0;i<num;i++){
        arr[i+2]=arr[i]+arr[i+1];
        if(arr[i+2]>num){
            break;
        }
    }
    arr.splice(-1,1);
    arr=arr.filter(function(n){
        if(n%2===0){
            return false;
        }else{
            return true;
        }
    });
    var result =arr.reduce(function(a,b){
        return a+b;
    });
    return result;
}



//8.求小于等于给定数值的质数之和。 while,reduce,push
//只有 1 和它本身两个约数的数叫质数。例如，2 是质数，因为它只能被 1 和 2 整除。1 不是质数，因为它只能被自身整除。
//给定的数不一定是质数
function sumPrimes(num){
    var arr=[];
    for(var i=2;i<=num;i++){
        var j=2;
        while(i%j==0){
            j++;
        }
        if(i==j){
            arr.push(i);
        }
    }
    var result=arr.reduce(function(a,b){
        return a+b;
    });
    return result;
}



//9.找出能被两个给定参数和它们之间的连续数字整除的最小公倍数。范围是两个数字构成的数组，两个数字不一定按数字顺序排序。
function smallestCommons(arr){
    arr.sort(function(a,b){
        return a-b;
    });
    var arrLast=arr[arr.length-1];
    for(var j=1;j<arrLast-arr[0];j++){
        arr.splice(j,0,arr[0]+j);
    }
    var k=0;
    var num=arr[arr.length-1];
    while(k===0){
        for(var i=0;i<arr.length;i++){
            if(num%arr[i]!==0){
                break;
            }else if(i==arr.length-2){
                k=1;
            }
        }
        num+=arr[arr.length-1];
    }
}



//10.对嵌套的数组进行扁平化处理。你必须考虑到不同层级的嵌套。
function steamroller(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        if(!Array.isArray(arr[i])){
            newArr.push(arr[i]);
        }else{
            newArr=newArr.concat(steamroller(arr[i]));
        }
    }
        return newArr;

}


//11.传入二进制字符串，翻译成英语句子并返回。二进制字符串是以空格分隔的。charCodeAt() fromCharCode()
function binaryAgent(str) {
    var result='';
    var arr=str.split(' ');
    for(var i=0; i<arr.length; i++){
      //二进制转化为十进制
      var num=parseInt(arr[i],2);
      str=String.fromCharCode(num);
      result+=str;
    }
    return result;
  }
  
  

//12.创建一个计算两个参数之和的 function。如果只有一个参数，则返回一个 function，该 function 请求一个参数然后返回求和的结果。
function add() {
    if(arguments.length==1&&typeof arguments[0]=='number'){
         var num = arguments[0];
         return function(a){
           if(typeof a=='number') return a+num;
         };
     }else if(typeof arguments[0]=='number'&&typeof arguments[1]=='number'){
         return arguments[0]+arguments[1];    
     }else{
         return undefined;
     }
 }
 add(2,3);



//13.如果传入字符串是一个有效的美国电话号码，则返回 true.
function telephoneCheck(str) {
    // 祝你好运
   var re=/^1? ?(\d{3}|\(\d{3}\))[ -]?\d{3}[ -]?\d{4}$/;

    return re.test(str);
  }
  telephoneCheck("555-555-5555");  



//14.创建一个函数，接受两个或多个数组，返回所给数组的 对等差分(symmetric difference) (△ or ⊕)数组.
//给出两个集合 (如集合 A = {1, 2, 3} 和集合 B = {2, 3, 4}), 
//而数学术语 "对等差分" 的集合就是指由所有只在两个集合其中之一的元素组成的集合(A △ B = C = {1, 4}). 
function sym(arg){
    var arr=[];
    for(var i=0;i<arguments.length;i++){
        arr.push(arguments[i]);
    }  
    arr.forEach(function(i){
        for(var j=0;j<i.length-1;j++){
            for(var k=j+1;k<i.length;k++){
                if(i[j]==i[k]){
                    i.splice(j,1);
                    j--;
                }
            }
        }
    });
    arr.reduce(function(prev,cur,index,array){
        prev.forEach(function(m){
            if(cur.indexOf(m)==-1){
                cur.push(m);
            }else{
                cur.splice(cur.indexOf(m),1);
            }
        });
        return cur;
    });
    return arr[arr.length-1];  
}



//15.设计一个收银程序 checkCashRegister() ，其把购买价格(price)作为第一个参数 , 付款金额 (cash)作为第二个参数, 和收银机中零钱 (cid) 作为第三个参数
function checkCashRegister(price, cash, cid){
    if(price==cash){
        return "No Need Back";
    }

    if(price>cash){
        return "Need More Money";
    }

    var base=100;
    var change=(cash-price)*base;

    var getTotalMoney=function(arr){
        var totalMoney=0;
        arr.reduce(function(preV, currV, currIndex, array){
            totalMoney+=base*(preV[1]+currV[1]);
            return currV;
        });
        return totalMoney;
    };
    var remain = getTotalMoney(cid);

    if (remain==change){//如果零钱数等于应找数额，返回closed
        return "Closed";    
    }else if(remain < change){//没钱找了
        return "Insufficient Funds";
    }
    // 对应：1角-5角-1元-5元-10元-20元-50元-100元(以元为单位的基础上乘以面值基数：base这里为100)
    var dollar= [1, 5, 10, 25, 100, 500, 1000, 2000, 10000]; // TODO
    var pay={};//保存的key：dollar中面值索引，value：要找的此面值的个数
    var currLast=0;// 当前面值所剩余额
    var currMoney=0;//当前金钱面额(dollar中对应的值)
    for (var i=dollar.length-1;i>=0;i--){//由大到小循环
        //当前面值剩余金额
        currLast=cid[i][1]*base;      
        if (currLast<=0) { 
            continue;//当前面值的金额剩余0，跳过
        }

        //当前金额面值
        currMoney=dollar[i];
        // 在当前面值下取钱必须同时满足两个条件：
        // 1. 找零必须大于当前面值，比如找零51元，才可以从50里面取钱。
        // 2. 剩余的当前面值的总额足够，比如找4元，但我只有3张1元，就不符合取钱条件
        if(change>currMoney){//如果当前金额面值小于应找钱数
            if(change<currLast){ 
                // 找零小于当前面值剩余金额：比如找钱51元，当前50面值总额余额还有150元。
                pay[i]=Math.floor(change/currMoney);//取最大张数
                change-=currMoney*pay[i];//取完之后从应找余额中减去（张数x面值）
            }else{
                // 找零大于当前面值剩余金额，比如找零51元，我50元面额总值只有50元
                // 则将所有剩余金额找出
                pay[i]=Math.floor(currLast/currMoney);
                change-=currLast;//就直接减去当前面值剩余所有金额
            }
        }
    }//循环结束之后得到一个pay对象，里面包括了面值和对应应找的钱。


    
    var res=[];
    // 组织最后需要找零的钱，作为最终返回的数组。
    var keys=Object.keys(pay);//找到pay对象
    var idx=0;
    var total=0;//应找零钱（pay）的总额
    for (var j=0; j<keys.length; j++) {
        // 需要找零的面值索引：比如100，50，20,10...等等
        idx=parseInt([keys[j]]);

        //计算该面值最后找出的零钱(公式：面值x需要找出数量 / 金钱面值基数)
        cid[idx][1]=dollar[idx]*pay[keys[j]]/base;

        res.unshift(cid[idx]);//把结果添加到数组的开头。符合由面值大到小的规律。

        total += dollar[idx]*pay[keys[j]]; 
        // 顺便计算下这里计算的结果应该和最开始需要找零的金额一致：
        // 面值x需要找出数量——返回到total结果中
    } 

    // 找到最后，所有能找的面值加起来还不够
    // 这里与最开始不同，这里是过滤掉了所有找不开的面值
    // 比如：要找0.05元，但是目前剩余一张0.01和1元的面值，依旧判定为找不开
    // 而最开始的是所有余额加起来都不够找
    if (total<change) {
        return "Insufficient Funds";
    }
    
    return res;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);






//16.依照一个存着新进货物的二维数组，更新存着现有库存(在 arr1 中)的二维数组. 
//如果货物已存在则更新数量 . 如果没有对应货物则把其加入到数组中，更新最新的数量. 返回当前的库存数组，且按货物名称的字母顺序排列.
function updateInventory(arr1, arr2) {
    // 请保证你的代码考虑到所有情况
    var oCur={};
  var oNew={};
  function arrToObj(arr,obj){
    for(var i=0;i<arr.length;i++){
      obj[arr[i][1]]=arr[i][0];
    }
  }//构造库存对象。
  arrToObj(arr1,oCur);
  arrToObj(arr2,oNew);

  //添加货物及属性
  for(var i in oNew){
    console.log(oCur.hasOwnProperty(i));
    if(oCur.hasOwnProperty(i)){
      oCur[i]+=oNew[i];
    }else{
      oCur[i]=oNew[i];
    }
  }

  //属性名排序
  function objKeySort(obj) {//排序的函数
      var newkey = Object.keys(obj).sort();
  　　//newkey是一个排序后的属性名数组
      var newObj = {};
      for (var i = 0; i < newkey.length; i++) {
          newObj[newkey[i]] = obj[newkey[i]];
      }
      return newObj;//返回排好序的新对象
  }
  oCur=objKeySort(oCur);

  //反向编译这个对象，然后返回成最初的数组。
  var newArr=[];
  for(i in oCur){
    newArr.push([oCur[i],i]);
  }
  console.log(newArr);
  return newArr;
}

// 仓库库存示例
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);





//17.把一个字符串中的字符重新排列生成新的字符串，返回新生成的字符串里没有连续重复字符的字符串个数.连续重复只以单个字符为准
//例如, aab 应该返回 2 因为它总共有6中排列 (aab, aab, aba, aba, baa, baa), 但是只有两个 (aba and aba)没有连续重复的字符.
function permAlone(str) {
    //创建正则
    var regex = /(.)\1+/g;
  
    // 转化数组
    var arr = str.split('');
    var permutations = [];
    var tmp;
  
    //全部相等时返回0，否则再判断没意义。
    if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;
  
    // 创建一个swap函数来交换变量的内容。
    function swap(index1, index2) {
      tmp = arr[index1];
      arr[index1]=arr[index2];
      arr[index2]=tmp;
    }//简单地说是：ab，ba
  
    //使用该函数算法生成数组排列。
    function generate(int) {
      if(int === 1){//如果数组内只有一个数据，换言之只有单个字母，直接返回原数组。
        //确保加入我们创建的字符排列是个数组 
        permutations.push(arr.join(''));
      }else{
        for (var i=0; i<int;i++){
          generate(int-1);//自身调用，简而言之就是把后边自身的全排列好。
          swap(int % 2? 0 : i, int - 1);//偶数取0，否则取i
        }
      }
    }
  
    generate(arr.length);
  
    //过滤重复排列的数组。
    var filtered = permutations.filter(function(string) {
      return !string.match(regex);
    });
  
    //统计变量
    return filtered.length;
  }
  
  permAlone('aab');
  

  
//18.把常见的日期格式如：YYYY-MM-DD 转换成一种更易读的格式。

function makeFriendlyDates(arr) {
    // 月份数组
    var mounth = [
      "January", "February", "March", "April", "May", "June",
      "July",  "August", "September", "October", "November", "December"
    ];
    // 日期后缀数组
    var dayNth = ["st","nd","rd","th"];
    
    // 设置当前年份
    var nowYear = '2017';
    
    var res = getTime(arr);
    return res;
    
    function getTime(arr) {
      var r = [];
      var timeA = arr[0].split('-');//第一个日期
      var timeB = arr[1].split('-');//第二个日期
      
      var yearB = diffYear(arr[0], arr[1]) ? "" : ", " + timeB[0];
      var mounthB = (timeB[0] === timeA[0] && timeB[1] === timeA[1]) ? "" : mounth[timeB[1]-1] + " ";
      var dayB = parseInt(timeB[2]);
      
      var yearA = ( timeA[0] === nowYear && diffYear(arr[0], arr[1]) ) ? "" : ", " + timeA[0];
      var mounthA = mounth[timeA[1]-1] + " ";
      var dayA = parseInt(timeA[2]);
      
      if( arr[0] === arr[1] ) {
        return [mounth[timeB[1]-1] + " " + dayB + dayNth[nthNum(dayB)] + ", " + timeB[0]];
      }
      
      if(timeA[0]>timeB[0]){
        return undefined;
      }
      var rA = mounthA + dayA + dayNth[nthNum(dayA)] + yearA;
      var rB = mounthB + dayB + dayNth[nthNum(dayB)] + yearB;
      r.push(rA, rB);
      
      return r;
    }

    //判断是否小于一年的函数
    function diffYear(time1, time2) {
      var diff = new Date(time2) - new Date(time1);
      if(diff/1000/60/60/24 < 365) {  //相差小于一年则返回true
        return true;
      }
      return false;
    }
    
    
    function nthNum(x) {
      if(x >= 4 && x <=10) {
        x = 4 - 1;
      }
      else if(x<4){
        x = x - 1;
      }
      else{
        if(x==21||x==31){
          x=0;
        }
        else if(x==22){
          x=1;
        }
        else if(x==23){
          x=2;
        }else{
          x= 3;
        }
      }
      return x;
    }
  }
  
  makeFriendlyDates(["2016-05-11", "2017-04-04"]);
  
  

 

  
