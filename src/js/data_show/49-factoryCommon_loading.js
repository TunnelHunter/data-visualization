app.directive('commonLoad', function() {
    return {
        restrict: 'AE', //指明了一个指令应该如何在HTML中使用
        replace: false,  //是否生成的模板会代替绑定指令的元素
        //template: '<p style="background-color:{{color}}">Hello World',
        templateUrl: 'factory_common_loading.html',
        scope:{
            do: "="
        },
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
        },
        controller: ["$scope", "$element", function ($scope, $element) {

        }]
    };
});
/*
报错：AngularJs中directive的templateUrl Template for directive 'shows' must have exactly one root element. views/manager/show.html
 * 将replace设置成true就报这个错，设置成false就能正常使用
 * */