var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/info',{
            templateUrl: 'iamp_info.html',
            controller: 'factoryInfoCtrl'
        })
        .when('/pageList',{
            templateUrl: 'iamp_pageList.html',
            controller: 'pageListCtrl'
        })
        .when('/powers',{
            templateUrl: 'iamp_powers.html',
            controller: 'powerCtrl'
        })
        .when('/waters',{
            templateUrl: 'iamp_waters.html',
            controller: 'waterCtrl'
        })
        .when('/fertilizer',{
            templateUrl: 'iamp_fertilizer.html',
            controller: 'fertilizerCtrl'
        })
        .when('/environment',{
            templateUrl: 'iamp_environment.html',
            controller: 'environmentCtrl'
        })
        .when('/production',{
            templateUrl: 'iamp_production.html',
            controller: 'productionCtrl'
        })
        .when('/qualityTrace',{
            templateUrl: 'iamp_qualityTrace.html',
            controller: 'qualityTraceCtrl'
        })
        .when('/orders',{
            templateUrl: 'iamp_order.html',
            controller: 'ordersCtrl'
        })
        .when('/dataCompare',{
            templateUrl: 'iamp_dataCompare.html',
            controller: 'dataCompareCtrl'
        })
        .when('/login',{
            templateUrl: 'iamp_login.html',
            controller: 'loginCtrl'
        })
        .otherwise({redirectTo:'/pageList'});
}]);
//在angular模块中添加以下代码，就可以解决， angular的post请求，后台接收不到参数的问题  qualityTraceCtrl
app.config(['$httpProvider',function($httpProvider) {
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    // Override $http service's default transformRequest
    $httpProvider.defaults.transformRequest = [function(data) {
        /**
         * The workhorse; converts an object to x-www-form-urlencoded serialization.
         * @param {Object} obj
         * @return {String}
         */
        var param = function(obj) {
            var query = '';
            var name, value, fullSubName, subName, subValue, innerObj, i;

            for (name in obj) {
                value = obj[name];

                if (value instanceof Array) {
                    for (i = 0; i < value.length; ++i) {
                        subValue = value[i];
                        fullSubName = name + '[' + i + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value instanceof Object) {
                    for (subName in value) {
                        subValue = value[subName];
                        fullSubName = name + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += param(innerObj) + '&';
                    }
                } else if (value !== undefined && value !== null) {
                    query += encodeURIComponent(name) + '='
                        + encodeURIComponent(value) + '&';
                }
            }

            return query.length ? query.substr(0, query.length - 1) : query;
        };

        return angular.isObject(data) && String(data) !== '[object File]'
            ? param(data)
            : data;
    }];
}]);