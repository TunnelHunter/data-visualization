/*
 * 它对应的html是在主框架页面里的，
 * 所以它的$watch要首先方法runConfig里，
 * 再在具体控制器里，加监听runConfi里的数值变化
 * */

app.directive('commonShowalerttxtbox', function() {
    return {
        restrict: 'AE', //指明了一个指令应该如何在HTML中使用
        replace: false,  //是否生成的模板会代替绑定指令的元素
        templateUrl: 'factory_common_showAlertTxtbox.html',
        scope:{
            btnShowNum:'=',
            confirmBtn:'=', //点击确认按钮后执行事件
            do: "=",   //双向数据绑定
            alertTxt:'@'   //绑定字符串，单项数据绑定,它要写在自己指令的页面中 <li ng-bind="alertTxt"></li>
        },
        /* 指令设置了隔离scope作用用，但设置以 do 为与页面控制的双向数据绑定
         * <common-showalerttxtbox alert-txt="{{ alertTxt }}"
         * do="show_alertTxt_orNot" ng-show="show_alertTxt_orNot"></common-showalerttxtbox>
         *
         * 其中 alert-txt="{{ alertTxt }}" ，为单向数据绑定 外部作用域，往指令作用域传值
         *
         * do="show_alertTxt_orNot"  ，双向数据绑定，作用域间相互传值
         *
         * */
        link: function(scope, elem, attrs) {
            //elem.bind('click', function () {
            //    elem.css('background-color', 'white');
            //    scope.$apply(function () {
            //        scope.color = "white";
            //    });
            //});
            //elem.bind('mouseover', function () {
            //    elem.css('cursor', 'pointer');
            //});
            scope.alertTxt=attrs.alertTxt;
        },
        controller: ["$scope", "$element", function ($scope, $element) {
            // $scope.do = true;
            $scope.var_common_close = function(){
                $scope.do = false;
            };

            $scope.btnShowNum = 1;

            //确认按钮的点击事件
            $scope.confirmBtn = 0;
            $scope.confirmBtn_fn = function(){
                if( $scope.confirmBtn > 10000 ){
                    $scope.confirmBtn--;
                }else{
                    $scope.confirmBtn++;
                }
                console.log( $scope.confirmBtn );
            };

        }]
    };
});
/*
 报错：AngularJs中directive的templateUrl Template for directive 'shows' must have exactly one root element. views/manager/show.html
 * 将replace设置成true就报这个错，设置成false就能正常使用
 * */