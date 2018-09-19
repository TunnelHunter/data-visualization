/*
 * 当匹配指令时，Angular会从元素/属性名之前去除前缀x-或者data-。然后将分隔符 - 或者 :
 * 转换为驼峰表示法已匹配注册的指令。
 * 这就是为什么我们的helloWorld指令用在HTML中的时候实际上写成了hello-world 或 hello_world。
 * */
app.directive('commonLeftMenu', function() {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'factory_common_leftMenu.html',
        /*
         * AngularJS 全局scope与Isolate scope通信
         * 1、AngularJS中，子作用域一般都会通过JavaScript原型继承机制继承其父作用域的属性和方法。
         *    但在directive中使用scope: { ... }，这种方式创建的作用域是一个独立的"Isolate"作用域，
         *    它也有父作用域，但父作用域不在其原型链上，不会对父作用域进行原型继承。这种方式定义作用域通常用于构造可复用的directive组件.
         2、如果在子作用域中访问一个父作用域中定义的属性，JavaScript首先在子作用域中寻找该属性，
         没找到再从原型链上的父作用域中寻找，如果还没找到会再往上一级原型链的父作用域寻找。
         在AngularJS中，作用域原型链的顶端是$rootScope，JavaScript寻找到$rootScope为止.
         3、scope: { ... } - directive创建一个独立的“Isolate”作用域，没有原型继承。
         这是创建可复用directive组件的最佳选择。因为它不会直接访问/修改父作用域的属性，不会产生意外的副作用。
         * */
        scope:{
            do: "="
        },
        controller: ["$scope", "$element", function ($scope, $element) {

            //左侧下拉菜单数组
            $scope.arr_common_leftMenu_1 = [
                { name:'工厂拓扑图',href:'factoryMap' },
                { name:'工厂类型配置',href:'factoryType' },
                { name:'植物工厂配置',href:'plantFactory' },
                { name:'监控设备配置',href:'factoryCamera' },
                { name:'modbus/RTU配置',href:'modbusRTU' },
                { name:'modbus/TCP配置',href:'modbusTCP' },
                { name:'传感器配置',href:'sensor' },
                { name:'执行机构配置',href:'nameActuator' },
                { name:'执行脚本配置',href:'exeScript' },
                { name:'日志运行配置',href:'logConfig' }
            ];
            $scope.arr_common_leftMenu_2 = [
                { name:'用户管理',href:'userConfig' },
                { name:'角色管理',href:'userRoleConfig' }
            ];
            $scope.arr_common_leftMenu_3 = [
                { name:'系统运行日志',href:'logSystemRun' },
                { name:'用户操作日志',href:'logUserOperate' },
                { name:'业务操作日志',href:'logBusinessOperate' },
                { name:'系统报警日志',href:'logSystemWarning' }
            ];

            //点击二级/三级菜单，获取选中样式 - 事件委托的好处是只需在div外写一个ng-click方法即可满足所有子节点的点击事件
            var addColor_clicked = false;
            $scope.addColor = function(event,index) {
                addColor_clicked = true;

                event= event || window.event;

                //火狐浏览器不能良好的兼容事件委托的解决方法,报错
                //if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
                //    window.setTimeout(function(){
                //        $rootScope.reload_index();
                //        //window.location.reload(); //强行reload，给菜单赋样式
                //    }, 0);
                //    return;
                //}else{

                /*
                 * window.event对象代表事件的状态，例如触发event对象的元素、鼠标的位置及状态、按下的键等等。
                 * event对象只在事件发生的过程中才有效。event对象的某些属性只对特定的事件有意义。
                 * 比如，fromElement 和 toElement 属性只对 onmouseover 和 onmouseout 事件有意义。
                 IE：有window.event对象
                 FF：没有window.event对象。解决办法：可以通过给函数参数传递event对象。如onmousemove=doMouseMove(event)
                 兼容代码：var event = event || window.event;

                 angular 事件委托  兼容 火狐浏览器  得 传参 $event  ng-click="addColor($event)"
                 * */

                //angular 的 事件捕获，点击ng-repeat后的数据，点谁谁加类
                var oMenu = document.getElementsByClassName('first_menu');
                //左侧导航div
                var oMenuDiv = document.getElementsByClassName('first_menu_div');
                var target = event.target || event.srcElement;
                //alert(target.nodeName);
                if (target.nodeName.toLowerCase() == 'li') {
                    angular.element(oMenu).find('li').removeClass('li_active');
                    //target在angular中的用法
                    angular.element(target).addClass('li_active');
                }
                //这种方法，就可以解决li里面有sapn子节点的点击事件捕获行为
                if (target.nodeName.toLowerCase() == 'span') {
                    angular.element(oMenu).find('li').removeClass('li_active');
                    angular.element(target).parent('li').addClass('li_active');
                }
                //div点击它显示自己的下级菜单 - 折叠菜单
                if ( target.nodeName.toLowerCase() == 'div' ) {

                    angular.element(oMenuDiv).find('ul').addClass('ul_hide_or_show');
                    angular.element(target).next('ul').removeClass('ul_hide_or_show');

                    angular.element(oMenuDiv).find('section').addClass('rotateIcon');
                    angular.element(target).children('section').removeClass('rotateIcon');

                }
                //i 右侧的 三角形
                if (target.nodeName.toLowerCase() == 'section') {

                    if( !angular.element(target).hasClass('rotateIcon') ){

                        angular.element(target).parent().next('ul').addClass('ul_hide_or_show');
                        angular.element(target).addClass('rotateIcon');

                    }else{

                        angular.element(oMenuDiv).parent().find('ul').addClass('ul_hide_or_show');
                        angular.element(target).parent().next('ul').removeClass('ul_hide_or_show');

                        //console.log(angular.element(oMenuDiv).parent().find('ul')[index].offsetHeight );

                        angular.element(oMenuDiv).find('section').addClass('rotateIcon');
                        angular.element(target).removeClass('rotateIcon');

                    }

                }

                //}

            };
            /*
             * transition动画是将属性从初始值过度到结束值
             * 而将height设置成auto时,实际上是没有结束值的因为css只能赋值，
             * 不能获取值auto是根据内容的多少产生的高度是在css执行之后产生的，
             * 而不是css所赋值的所以transition获取不到最终的高度所以只有最后的结果没有过度效果
             *
             * 所以，css中，将max-height设置为一个比较大的且合适的值 实现，因为里面的元素，小于 max-height ，会显示为自己的高度
             *
             * */



            //两个js里，可以设置一样的本地存储 window.localStorage.setItem('title_page_top',title); 相互存储替换 用户双向数据绑定。
            //点击菜单，对应页面标题对应变换  , 页面刷新，也要记录变换后的title值
            $scope.do = window.localStorage.getItem('title_page_top');
            $scope.click_change_title_page_top = function(title){
                window.localStorage.setItem('title_page_top',title);
                $scope.do = window.localStorage.getItem('title_page_top');
            };
            /*
             * directive和controller如何通信
             * 1、定义指令的独立隔离作用域，然后命名
             * scope:{
             *    topTitle: "="
             *  },
             * 2、在嵌入的页面里使用指令 且带有自己作用域的属性 top-title="title_page_top"
             * <common-left-menu top-title="title_page_top"></common-left-menu>
             * 3、在该页面里直接使用 {{ title_page_top }} 就可以双向数据绑定了
             * <span id="tabOne">{{ title_page_top }}</span>
             * */

        }]
    };
});

/*
 * 如果代码复用的话，建议你用template，而不是templateUrl，两点理由
 1.方便使用。使用第三方库，一般我希望引入一个js就可以了，而不是跟着一堆东西
 2.减少http请求
 至于代码的可读性，使用模块管理和构建工具很容易解决
 * */
