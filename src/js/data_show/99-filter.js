app.filter('trustAsHtml',function($sce){
        return function(content){
            return $sce.trustAsHtml(content);
        };
    })
    //自定义日期过滤器
    .filter('dateFullTime',function(){
        return function(value) {
            try {
                if (value * 1 == value) {
                    value = new Number(value);
                }
                if (!(value instanceof Date)) {
                    value = new Date(value);
                }
                var date=new Date(value);
                //时分秒年月日过滤器
                //var formatDate=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
                //            +" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
                //年月日过滤器
                var formatDate=date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
                return formatDate;

            } catch (err) {
                return value;
            }
        };
    })
    /*
     Angularjs的ng-repeat中去除重复数据的方法
    * <div ng-repeat="item in items | unique: 'id'"></div>
    * */
    .filter('unique', function () {
        return function (collection, keyname) {
            var output = [],
                keys = [];
            angular.forEach(collection, function (item) {
                var key = item[keyname];
                if (keys.indexOf(key) === -1) {
                    keys.push(key);
                    output.push(item);
                }
            });
            return output;
        };
    });

/*
* ng-repeat指令中使用track by子语句解决重复数据遍历的错误

 时间：2015-12-15 22:35:37      阅读：5050
 用ng-repeat指令遍历一个javascript数组，当数组中有重复元素的时候,angularjs会报错,
 这是因为ng-Repeat不允许collection中存在两个相同Id的对象。

 对于数字或者字符串等基本数据类型来说，它的id就是它自身的值。
 因此数组中是不允许存在两个相同的数字的。为了规避这个错误，需要定义自己的track by表达式。

 // 业务上自己生成唯一的id
 item in items track by item.id

 //或者直接拿循环的索引变量$index来用
 item in items track by $index

 如果是javascript对象类型数据，那么就算内容一摸一样，ng-repeat也不会认为这是相同的对象。如果将上面的代码中dataList，那么是不会报错的。比如$scope.dataList = [{"age":10},{"age":10}];

 var myapp=angular.module(‘myapp‘,[]);
 myapp.controller(‘test‘,function($scope){
 $scope.arr=[‘aa‘,‘bb‘,‘cc‘,‘dd‘,‘cc‘]
 $scope.obj=[{‘name‘:‘same‘},{‘name‘:‘same‘},{‘name‘:‘same‘},{‘name‘:‘same‘},{‘name‘:‘same‘}]
 });

 <div ng-app="myapp" ng-controller="test">
 <ol>
 <li ng-repeat="x in arr track by $index">
 <p ng-if="x==‘aa‘">{{x}}</p>

 <p ng-if="x==‘bb‘">{{x}}</p>

 <p ng-if="x==‘cc‘">{{x}}</p>

 <p ng-if="x==‘dd‘">{{x}}</p>
 </li>
 </ol>

 <ol>
 <li ng-repeat="y in obj" ng-switch on="y.name">
 <p ng-switch-when="same">{{y}}</p>
 </li>
 </ol>
 </div>
* */


/*
*
*  ng-repeat高级用法：

 遍历数组：
 <li ng-repeat="item in array">{{item}}</li>

 遍历对象：
 key：对象的key
 value：对象的value
 <li ng-repeat="(key,value) in obj">{{key}} | {{value}}</li>

 绑定$$haskKey:
 给每个item绑定唯一ID,当数组发生变化时，ID不变！
 <li ng-repeat="item in items track by $id(item)"></li>

 过滤器：
 对item的每个属性进行模糊匹配
 <li ng-repeat="item in items |filter: 25"></li>


 绑定属性过滤：
 对item的某个属性进行模糊匹配
 <li ng-repeat="item in items |filter: 25 track by item.age"></li>

 保存匹配结果：
 把匹配到的结果另存到results数组变量,可供外部使用
 <li ng-repeat="item in items |filter: 25 as results"></li>

 保存针对某个属性的过滤结果：
 <li ng-repeat="item in items |filter: 25 as results track by item.age "></li>
*
* */