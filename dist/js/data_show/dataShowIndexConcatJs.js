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
/**
 * window 全局方法,通过window，向外提供接口
 //juery也是通过将方法挂载到window上，向外提供接口
 */
(function (utils) {
    //对特殊字符 的 转码,但是呢，必须得是 从头开始输入特殊字符 才好使 -- 呵呵了
    //utils.fn_escape = function(str){
    //    return escape(str);
    //};
    //这个可以将任意字符 都转码处理 - 转码
    utils.fn_encodeURIComponent = function(str){
        return encodeURIComponent(str);
    };
    //这个可以将任意字符 都转码处理 - 解码
    utils.fn_decodeURIComponent = function(str){
        return decodeURIComponent(str);
    };

    ////汉字、字母、数字、下划线
    //utils.reg_input_string=function(args){
    //    return /^[a-zA-Z0-9_u4e00-u9fa5]+$/g.test(args);
    //};
    //utils.reg_input_email=function(args){
    //    return /^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i.test(args);
    //};
    //
    //utils.jsonUtils = {
    //    toString: function(obj) {
    //        try {
    //            return JSON.stringify(obj);
    //        } catch (error) {
    //            return "";
    //        }
    //    },
    //    toObject: function(json) {
    //        try {
    //            return typeof(json) == 'string' ? JSON.parse(json) : json;
    //        } catch (error) {
    //            return null;
    //        }
    //    }
    //};
    //
    ////utils.isNaN = function (obj) {
    ////    return isNaN(obj);
    ////};
    //
    //utils.isUndef = function (obj) {
    //    return typeof obj == "undefined";
    //};
    //utils.isNull = function (obj) {
    //    return obj == null;
    //};
    //
    //utils.isFunc = function (obj) {
    //    return typeof obj == "function";
    //};
    //utils.nothing = function (obj) {
    //    return utils.isUndef(obj) || utils.isNull(obj);
    //};
    //utils.trim = function (text) {
    //    if (utils.isStr(text)) {
    //        return $.trim(text);
    //    }
    //    return "";
    //};
    //utils.isStr = function (obj) {
    //    return typeof obj == "string";
    //};
    //utils.strLen = function (obj) {
    //    if (typeof obj == "string") {
    //        return obj.length;
    //    }
    //    return 0;
    //};
    //utils.isUrl = function (url) {
    //    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(url)
    //};



})(window);
app.run(['$rootScope','ajax_factoryIndex','$http','$timeout'
    ,function($rootScope,ajax_factoryIndex,$http,$timeout){

    //加载更多的文本，统一提出来。这样方便统一吸怪
    $rootScope.var_common_notAllowString = '数据获取失败，请确认网络连接是否正确或联系管理员13810981883！';
    //数据查询条数默认值 30；
    $rootScope.common_pagenum = 30;
    $rootScope.common_pageStart = 1;
    $rootScope.common_getMaxPagenum = 5000;

    //获取不同电脑屏幕的宽度
    $rootScope.myHeight = function(){
        var oDiv = document.getElementById('fixed_left_id');
        var oDiv2 = document.getElementById('factoryInfo_div1');
        var factory_details = document.getElementById('factory_details');
        var factorySensors_table_top = document.getElementById('factorySensors_table_top'); //历史数据 表格 的宽度赋值
        //判断没有左侧菜单的页面
        if(!oDiv){
            return;
        }
        //获取 网页自动撑高的可见区域高度 ，高度要写兼容、加单位
        //var oHeight = window.document.body.clientHeight || window.document.documentElement.clientHeight;
        var oWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
        //公共 工具栏 获取屏幕宽度  减去  左侧菜单栏 的宽度，就可以得到 不同屏幕的可变宽度进行赋值
        if(oDiv2) oDiv2.style.width =  ( oWidth - 238 ) +'px' ;
        if(factory_details) factory_details.style.width =  ( oWidth - 238 ) +'px' ;
        if(factorySensors_table_top) factorySensors_table_top.style.width =  ( oWidth - 238 ) +'px' ;

        $rootScope.right_content_width = oWidth - 238 - 20 ;

    };



    $rootScope.fn_login = function(args){

        if( args ){
            window.location.href = 'iamp_end_wrapper.html';
        }
        else{
            window.localStorage.setItem('username','');
            //window.localStorage.clear();
            window.location.href = 'iamp_login.html';
        }

    };

    //angular + id 获取元素
    $rootScope.fn_common_angular_getId = function(id){
        var oId = document.getElementById(id);
        return angular.element(oId);
    };

    //登录用户名
    $rootScope.login_username = window.localStorage.getItem('username');

    //首页 刷新  使用  页面刷新
    $rootScope.fn_common_reload = function(){
        window.scrollTo(0,0);

        window.setTimeout(function(){
            $rootScope.myHeight();
        },200);
    };
    //模拟异步，给左侧菜单的指令的加载形成异步，完成调用公共方法，给首页公共选项卡添加样式
    window.setTimeout(function(){
        $rootScope.fn_common_reload();
    },100);

    /*
     * 提示框，公共方法 - 指令 97-factoryCommon_showAlertTxtbox.js
     * */
    $rootScope.var_common_alertTxt = '11';
    $rootScope.var_common_showAlertTxtbox = false;
    $rootScope.fn_common_showAlertTxt = function(msg){
        $rootScope.fn_common_removeClassHidden('commonWrapper');
        $rootScope.var_common_showAlertTxtbox = !$rootScope.var_common_showAlertTxtbox;
        $rootScope.var_common_alertTxt = msg;
    };

    //公共方法，给ng-show浮层加隐藏样式，让他们在angular未加载完成时，不显示它;点击使用时，再删除hidden样式。
    $rootScope.fn_common_removeClassHidden = function(parameter){
        var oDiv = document.getElementsByClassName(parameter);
        angular.element(oDiv).removeClass('hidden');
    };

    //页面加载完成，去掉浮框的隐藏类，防止刷新时，闪出，影响用户体验
    $rootScope.fn_common_removeClassHidden('extend_menu');
    $rootScope.fn_common_removeClassHidden('indexInfo');

    /*
     * 数据加载中 gif图 - 指令 factory_common_loading.js
     * */
    $rootScope.fn_common_WaitingDivShow = function(boolean){
        if(boolean){
            $rootScope.var_common_waitingDivShow = true;
        }else{
            $timeout(function(){
                $rootScope.var_common_waitingDivShow = false;
            },100);
        }
    };

    //屏幕宽度变化，执行
    window.onresize = function() {
        window.location.reload();
    }

    //ajax 长连接 时间间隔 9秒
    $rootScope.var_common_ajax_long_timer = 9;

    $rootScope.fn_common_goto = function (index) {
        var hash = window.location.hash;
        if( hash.indexOf('login') > 0 ){
                $rootScope.fn_common_showAlertTxt('您好，请登录！');
                return;
            }
        if( index === 0 ){
            window.location.href = '#/info';
        }
        if( index === 1 ){
            window.location.href = '#/orders';
        }
        if( index === 2 ){
            window.location.href = '#/dataCompare';
        }
        if( index === 3 ){
            window.location.href = '#/qualityTrace';
        }
        if( index === 4 ){
            window.location.href = '#/login';
        }
        if( index === 5 ){
            window.location.href = '#/powers';
        }

    };

    $rootScope.fn_go_pageList = function () {
        window.location.href = '#/pageList';
    };

    $rootScope.fn_common_reload_style = function () {
        var hash = window.location.hash;
        if( hash.indexOf('info') > 0 ){
            $rootScope.fn_common_angular_getId('front_info').addClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_orders').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_dataCompare').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_qualityTrance').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_login').removeClass('extend_menu_active');
        }
        if( hash.indexOf('orders') > 0 ){
            $rootScope.fn_common_angular_getId('front_info').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_orders').addClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_dataCompare').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_qualityTrance').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_login').removeClass('extend_menu_active');
        }
        if( hash.indexOf('dataCompare') > 0 ){
            $rootScope.fn_common_angular_getId('front_info').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_orders').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_dataCompare').addClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_qualityTrance').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_login').removeClass('extend_menu_active');
        }
        if( hash.indexOf('qualityTrace') > 0 ){
            $rootScope.fn_common_angular_getId('front_info').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_orders').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_dataCompare').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_qualityTrance').addClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_login').removeClass('extend_menu_active');
        }
        if( hash.indexOf('login') > 0 ){
            $rootScope.fn_common_angular_getId('front_info').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_orders').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_dataCompare').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_qualityTrance').removeClass('extend_menu_active');
            $rootScope.fn_common_angular_getId('front_login').addClass('extend_menu_active');
        }
    }
}]);
//统一接口注册
app.service('ajax_factoryIndex',function(){
    //ajax 根目录  chenxu 210  baojia 232  zhixian 199
    // var ROOT_HTTP = 'http://192.168.1.22:8189/GCPI';  //服务器ip
    //var ROOT_HTTP = 'http://192.168.1.199:8080/GCPI';
    //var ROOT_HTTP = 'http://192.168.1.76:8080/GCPI';  //王玉 虚拟机 服务器
    // var ROOT_HTTP = '../../../../gcpi'; //上传到 GCPI 项目里  在 E 盘
    var ROOT_HTTP = 'http://127.0.0.1:8080/IAMP'; //
    //var ROOT_HTTP = '../../../../IACSOI'; //上传到 IACSOI 项目里  在 E 盘

    //获取传感器信息
    var sensordetail = ROOT_HTTP + '/gcpi/sysconfig/sensor/sensordetail';
    this.sensordetail=function(){
        return sensordetail;
    };

    //增加传感器
    var addsensor = ROOT_HTTP + '/gcpi/sysconfig/sensor/addsensor';
    this.addsensor=function(){
        return addsensor;
    };

    //更新传感器
    var updatesensor = ROOT_HTTP + '/gcpi/sysconfig/sensor/updatesensor';
    this.updatesensor=function(){
        return updatesensor;
    };
    //删除传感器
    var delsensor = ROOT_HTTP + '/gcpi/sysconfig/sensor/delsensor';
    this.delsensor=function(){
        return delsensor;
    };





    var imgupload_absoluteurl = ROOT_HTTP + '/';
    this.imgupload_absoluteurl=function(){
        return imgupload_absoluteurl;
    };

    var login = ROOT_HTTP + '/login';
    this.login=function(){
        return login;
    };

    //新建执行机构 传感器 选择 种类
    var devicetype = ROOT_HTTP + '/sysconfig/devicetype';
    this.devicetype=function(){
        return devicetype;
    };

    //警告数量
    var get_alarms_num = ROOT_HTTP + '/main/alarmnum';
    this.get_alarms_num=function(){
        return get_alarms_num;
    };
    //警告
    var get_alarms = ROOT_HTTP + '/main/alarms';
    this.get_alarms=function(){
        return get_alarms;
    };
    //已读警告
    var get_alarmed = ROOT_HTTP + '/main/alarmed';
    this.get_alarmed=function(){
        return get_alarmed;
    };

    //工厂概况
    var get_factoryDetail = ROOT_HTTP + '/main/detail';
    this.get_factoryDetail=function(){
        return get_factoryDetail;
    };
    var get_factoryOrders = ROOT_HTTP + '/main/orders';
    this.get_factoryOrders=function(){
        return get_factoryOrders;
    };
    //this.setName=function(ajax_factoryIndex){
    //    _ajax_factoryIndex=ajax_factoryIndex;
    //};

    //工厂详情
    var get_sensorsDetail = ROOT_HTTP + '/factory/sensors/current';
    this.get_sensorsDetail=function(){
        return get_sensorsDetail;
    };
    //工厂监控
    var videosCurrent = ROOT_HTTP + '/factory/videos/current';
    this.videosCurrent=function(){
        return videosCurrent;
    };
    //获取当前执行脚本
    var get_scriptDetail = ROOT_HTTP + '/factory/script/current';
    this.get_scriptDetail=function(){
        return get_scriptDetail;
    };
    //获取当前执行机构
    var get_exeunitsDetail = ROOT_HTTP + '/factory/exeunits/current';
    this.get_exeunitsDetail=function(){
        return get_exeunitsDetail;
    };

    //开启当前工厂执行脚本
    var get_script_oper = ROOT_HTTP + '/factory/script/oper';
    this.get_script_oper=function(){
        return get_script_oper;
    };
    //开启执行机构
    var get_exeunit_oper = ROOT_HTTP + '/factory/exeunit/oper';
    this.get_exeunit_oper=function(){
        return get_exeunit_oper;
    };
    //开启/停止工厂
    var get_factory_oper = ROOT_HTTP + '/factory/oper';
    this.get_factory_oper=function(){
        return get_factory_oper;
    };


    //传感器详情
    var get_sensors_history = ROOT_HTTP + '/factory/sensors/history';
    this.get_sensors_history=function(){
        return get_sensors_history;
    };

    // 单个工厂的拓扑图
    var concretedetail = ROOT_HTTP + '/sysconfig/concretedetail';
    this.concretedetail=function(){
        return concretedetail;
    };

    //工厂类型图片上传
    var addphoto = ROOT_HTTP + '/sysconfig/addphoto';
    this.addphoto=function(){
        return addphoto;
    };

    //拓扑图
    var get_map = ROOT_HTTP + '/sysconfig/devicedetail';
    this.get_map=function(){
        return get_map;
    };

    var videodetail = ROOT_HTTP + '/sysconfig/videodetail';
    this.videodetail=function(){
        return videodetail;
    };
    var addvideo = ROOT_HTTP + '/sysconfig/addvideo';
    this.addvideo=function(){
        return addvideo;
    };
    var deletevideo = ROOT_HTTP + '/sysconfig/deletevideo';
    this.deletevideo=function(){
        return deletevideo;
    };
    var updatevideo = ROOT_HTTP + '/sysconfig/updatevideo';
    this.updatevideo=function(){
        return updatevideo;
    };

    //获取角色信息
    var ajax_getUserRole = ROOT_HTTP + '/usermgr/roledetail';
    var ajax_addUserRole = ROOT_HTTP + '/usermgr/addrole';
    var ajax_alterUserRole = ROOT_HTTP + '/usermgr/updaterole';
    var ajax_delUserRole = ROOT_HTTP + '/usermgr/deleterole';
    this.getUserRole=function(){
        return ajax_getUserRole;
    };
    this.addUserRole=function(){
        return ajax_addUserRole;
    };
    this.alterUserRole=function(){
        return ajax_alterUserRole;
    };
    this.delUserRole=function(){
        return ajax_delUserRole;
    };

    //获取角色信息
    var ajax_getUser = ROOT_HTTP + '/usermgr/userinfodetail';
    var ajax_addUser = ROOT_HTTP + '/usermgr/adduserinfo';
    var ajax_alterUser = ROOT_HTTP + '/usermgr/updateuserinfo';
    var ajax_delUser = ROOT_HTTP + '/usermgr/deleteuserinfo';
    this.getUser=function(){
        return ajax_getUser;
    };
    this.addUser=function(){
        return ajax_addUser;
    };
    this.alterUser=function(){
        return ajax_alterUser;
    };
    this.delUser=function(){
        return ajax_delUser;
    };
    //this.setName=function(ajax_factoryIndex){
    //    _ajax_factoryIndex=ajax_factoryIndex;
    //};

    //modbusTCP
    var modbustcpdetail = ROOT_HTTP + '/sysconfig/modbustcpdetail';
    this.modbustcpdetail=function(){
        return modbustcpdetail;
    };
    var addmodbustcp = ROOT_HTTP + '/sysconfig/addmodbustcp';
    this.addmodbustcp=function(){
        return addmodbustcp;
    };
    var updatemodbustcp = ROOT_HTTP + '/sysconfig/updatemodbustcp';
    this.updatemodbustcp=function(){
        return updatemodbustcp;
    };
    var deletemodbustcp = ROOT_HTTP + '/sysconfig/deletemodbustcp';
    this.deletemodbustcp=function(){
        return deletemodbustcp;
    };


    //工厂类型配置
    var ajax_factoryType = ROOT_HTTP + '/sysconfig/factorytypedetail';
    this.get_ajax_factoryType=function(){
        return ajax_factoryType;
    };
    var add_factoryType = ROOT_HTTP + '/sysconfig/addfactorytype';
    this.add_factoryType=function(){
        return add_factoryType;
    };
    var alter_factoryType = ROOT_HTTP + '/sysconfig/updatefactorytype';
    this.alter_factoryType=function(){
        return alter_factoryType;
    };
    var del_factoryType = ROOT_HTTP + '/sysconfig/deletefactorytpye';
    this.del_factoryType=function(){
        return del_factoryType;
    };
    //植物工厂
    var get_plantFactory = ROOT_HTTP + '/sysconfig/factorydetail';
    this.get_plantFactory=function(){
        return get_plantFactory;
    };
    var add_plantFactory = ROOT_HTTP + '/sysconfig/addfactory';
    this.add_plantFactory=function(){
        return add_plantFactory;
    };
    var alter_plantFactory = ROOT_HTTP + '/sysconfig/updatefactory';
    this.alter_plantFactory=function(){
        return alter_plantFactory;
    };
    var del_plantFactory = ROOT_HTTP + '/sysconfig/deletefactory';
    this.del_plantFactory=function(){
        return del_plantFactory;
    };
    //modbus
    var get_modbus = ROOT_HTTP + '/sysconfig/modbusrtudetail';
    this.get_modbus=function(){
        return get_modbus;
    };
    var add_modbus = ROOT_HTTP + '/sysconfig/addmodbusrtu';
    this.add_modbus=function(){
        return add_modbus;
    };
    var alter_modbus = ROOT_HTTP + '/sysconfig/updatemodbusrtu';
    this.alter_modbus=function(){
        return alter_modbus;
    };
    var del_modbus = ROOT_HTTP + '/sysconfig/deletemodbusrtu';
    this.del_modbus=function(){
        return del_modbus;
    };
    //传感器
    var get_sensor = ROOT_HTTP + '/sysconfig/sensordetail';
    this.get_sensor=function(){
        return get_sensor;
    };
    var add_sensor = ROOT_HTTP + '/sysconfig/addsensor';
    this.add_sensor=function(){
        return add_sensor;
    };
    var alter_sensor = ROOT_HTTP + '/sysconfig/updatesensor';
    this.alter_sensor=function(){
        return alter_sensor;
    };
    var del_sensor = ROOT_HTTP + '/sysconfig/deletesensor';
    this.del_sensor=function(){
        return del_sensor;
    };
    //执行机构
    var get_actuator = ROOT_HTTP + '/sysconfig/exeunitdetail';
    this.get_actuator=function(){
        return get_actuator;
    };
    var add_actuator= ROOT_HTTP + '/sysconfig/addexeunit';
    this.add_actuator=function(){
        return add_actuator;
    };
    var alter_actuator = ROOT_HTTP + '/sysconfig/updateexeunit';
    this.alter_actuator=function(){
        return alter_actuator;
    };
    var del_actuator = ROOT_HTTP + '/sysconfig/deleteexeunit';
    this.del_actuator=function(){
        return del_actuator;
    };
    //执行脚本
    var get_script = ROOT_HTTP + '/sysconfig/scriptdetail';
    this.get_script=function(){
        return get_script;
    };
    var add_script= ROOT_HTTP + '/sysconfig/addscript';
    this.add_script=function(){
        return add_script;
    };
    //获取时间脚本
    var get_scriptoperdetail= ROOT_HTTP + '/sysconfig/scriptoperdetail';
    this.get_scriptoperdetail=function(){
        return get_scriptoperdetail;
    };
    //获取逻辑脚本
    var get_scriptlogicdetail= ROOT_HTTP + '/sysconfig/scriptlogicdetail';
    this.get_scriptlogicdetail=function(){
        return get_scriptlogicdetail;
    };


    var alter_script = ROOT_HTTP + '/sysconfig/updatescript';
    this.alter_script=function(){
        return alter_script;
    };
    var del_script = ROOT_HTTP + '/sysconfig/deletescript';
    this.del_script=function(){
        return del_script;
    };

    //日志运行配置 update
    var logconfig = ROOT_HTTP + '/sysconfig/logconfig';
    this.logconfig=function(){
        return logconfig;
    };
    var logconfigUpdate = ROOT_HTTP + '/sysconfig/logconfig/update';
    this.logconfigUpdate=function(){
        return logconfigUpdate;
    };
    //系统运行日志
    var log_syslogs = ROOT_HTTP + '/logmgr/syslogs';
    this.log_syslogs=function(){
        return log_syslogs;
    };
    //用户操作日志
    var log_userlogs = ROOT_HTTP + '/logmgr/userlogs';
    this.log_userlogs=function(){
        return log_userlogs;
    };
    //业务操作日志
    var log_businesslogs = ROOT_HTTP + '/logmgr/businesslogs';
    this.log_businesslogs=function(){
        return log_businesslogs;
    };
    //系统报警日志
    var log_alarmslogs = ROOT_HTTP + '/logmgr/alarmslogs';
    this.log_alarmslogs=function(){
        return log_alarmslogs;
    };


});
app.controller('dataCompareCtrl', ['$scope', '$http', 'ajax_factoryIndex'
    , function ($scope, $http, ajax_factoryIndex) {

        //$scope.fn_common_WaitingDivShow(true);
        //$timeout(function(){
        //    $scope.fn_common_WaitingDivShow(false);
        //},1000);


        // const info = {
        //     name: 'Lee',
        //     age: 20,
        //     id: '001'
        // };
        // sessionStorage.setItem('key', JSON.stringify(info));
        // localStorage.setItem('key', JSON.stringify(info));

        //获取菜单选中样式
        $scope.fn_common_reload_style();

        $scope.get_data = {
            "pageNum": $scope.common_pagenum,
            "page": $scope.common_pageStart,
            "sortColumn": "sensorName",
            "sortType": 0,
            "keywords": ''
        };

        $scope.fn_get_data = function () {

            $http({
                method: "post",
                url: ajax_factoryIndex.sensordetail(),
                data: JSON.stringify($scope.get_data),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .success(function (response) {

                    $scope.arr_data = response.data.records;

                    $scope.all_page_num = response.data.all_page_num;

                })
                .error(function (response) {

                });
        };
        $scope.fn_get_data();





        $scope.arr_sensor = [
            { name:'CO2',id:'1' },
            { name:'温度',id:'1' },
            { name:'湿度',id:'1' },
            { name:'光照',id:'1' },
            { name:'EC',id:'1' },
            { name:'温度(1)',id:'1' },
            { name:'温度(2)',id:'1' },
            { name:'湿度(1)',id:'1' },
            { name:'湿度(2)',id:'1' },
            { name:'光光照光照光照光照光照光照照',id:'1' },
            { name:'EC(1)',id:'1' },
            { name:'温度',id:'1' },
            { name:'湿度',id:'1' },
            { name:'光照',id:'1' },
            { name:'EC',id:'1' },
            { name:'温度(1)',id:'1' },
            { name:'温度(2)',id:'1' },
            { name:'湿度(1)',id:'1' },
            { name:'湿度(2)',id:'1' },
            { name:'湿度(3)',id:'1' },
            { name:'EC(1)',id:'1' },
            { name:'温度',id:'1' },
            { name:'湿度',id:'1' },
            { name:'光照',id:'1' },
            { name:'EC',id:'1' },
            { name:'温度(1)',id:'1' },
            { name:'温度(2)',id:'1' },
            { name:'湿度(1)',id:'1' },
            { name:'湿度(2)',id:'1' },
            { name:'湿度(3)',id:'1' },
            { name:'CO2(2)',id:'1' }
        ];
        // http://echarts.baidu.com/echarts2/doc/example/dataZoom1.html#dark-en
        $scope.fn_dataCompare = function () {
            var dataCompare = echarts.init(document.getElementById('dataCompare'));

            //对比1 上边 用的是 green 颜色   对比2 上边 用的是 red 颜色
            var colors = ['#d32d2d', 'green', '#4183cf'];
            var option_dataCompare = {
                color: colors,
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                legend: {
                    textStyle: {
                        color: colors,
                    },
                    data: ['2015 降水量', '2016 降水量']
                },
                grid: {
                    top: 70,
                    bottom: 50
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            lineStyle: {
                                color: colors[0] //单条线的颜色
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return '降水量  ' + params.value
                                        + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                }
                            }
                        },
                        data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7"
                            , "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
                    },
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: colors[1] //单条线的颜色
                            }
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return '降水量  ' + params.value
                                        + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                                }
                            }
                        },
                        data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: colors[2] //左侧 x 轴 颜色
                            }
                        },
                        splitLine: { // 图表 区域里 分隔线/横线 的颜色
                            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                                width: 1,
                                color: 'rgba(255,255,255,.2)',
                            }
                        },
                    }
                ],
                series: [
                    {
                        name: '2015 降水量',
                        type: 'line',
                        xAxisIndex: 1,
                        smooth: true,
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
                    },
                    {
                        name: '2016 降水量',
                        type: 'line',
                        smooth: true,
                        data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
                    }
                ]
            };

            var option_dataCompare2 = {
                color: colors,
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                legend: {
                    textStyle: {
                        color: colors,
                    },
                    data: ['北京温度', '东营温度'],  //名称要与下边 数据的名称一一对应
                },
                toolbox: {
                    show: true,
                    feature: {
                        //mark : {show: true},
                        //dataZoom : {show: true},
                        //dataView : {show: true},
                        magicType: {
                            show: true,
                            type: ['line', 'bar', 'stack', 'tiled']
                        },
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                calculable: true,
                dataZoom: {  //缩放轴
                    show: true,
                    realtime: true,
                    start: 20,
                    end: 80
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        axisLine: {
                            lineStyle: {
                                color: colors[2] //单条线的颜色
                            }
                        },
                        data: function () {
                            var list = [];
                            for (var i = 1; i <= 30; i++) {
                                list.push('2013-03-' + i);
                            }
                            return list;
                        }()
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: colors[2] //左侧 x 轴 颜色
                            }
                        },
                        splitLine: { // 图表 区域里 分隔线/横线 的颜色
                            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                                width: 1,
                                color: 'rgba(255,255,255,.2)',
                            }
                        },
                    }
                ],
                series: [
                    {
                        name: '北京温度',
                        type: 'line',
                        smooth: true,  // true 平滑曲线  false 不平滑
                        data: function () {
                            var list = [];
                            for (var i = 1; i <= 30; i++) {
                                list.push(Math.round(Math.random() * 30));
                            }
                            return list;
                        }()
                    },
                    {
                        name: '东营温度',
                        type: 'line',
                        smooth: true,
                        data: function () {
                            var list = [];
                            for (var i = 1; i <= 30; i++) {
                                list.push(Math.round(Math.random() * 10));
                            }
                            return list;
                        }()
                    }
                ]
            };

            dataCompare.setOption(option_dataCompare2);
        };

        $scope.fn_curr_sensor_index = function(index){
            $scope.curr_sensor_index = index;
        };
        $scope.fn_curr_sensor_index(0);

        $scope.fn_init = function () {
            var dataCompare = document.getElementById('dataCompare');
            var id_sensors = document.getElementById('id_sensors');
            var earth = document.getElementById('earth');
            var dataCompare_right = document.getElementById('dataCompare_right');
            //获取 网页自动撑高的可见区域高度 ，高度要写兼容、加单位
            //var oHeight = window.document.body.clientHeight || window.document.documentElement.clientHeight;

            var oHeight = document.body.clientHeight || document.documentElement.clientHeight;
            var _oWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;

            var top_1 = 130 ;
            if( _oWidth > 1650 ){
                oHeight += 150;
                top_1 += 30;
            }

            if (dataCompare)
                dataCompare.style.height = ( oHeight - 70 ) + 'px';
                dataCompare.style.width = ( _oWidth - 150 ) + 'px';
                dataCompare.style.top = top_1 + 'px';
                //dataCompare.style.marginTop =  - ( oHeight - 140 ) / 2 + 'px';
            if (id_sensors)
                id_sensors.style.height = ( oHeight - 180 ) + 'px';

            if (earth)
                earth.style.height = ( oHeight + 50 ) + 'px';

            if (dataCompare_right)
                dataCompare_right.style.top = (top_1 + 45) + 'px';

            $scope.fn_dataCompare();
            setTimeout(function(){
                $scope.fn_dataComparefunction();
            },10)



        };
        $scope.fn_init();

        /*
         * 地图
         * */
        $scope.fn_dataComparefunction = function() {
            // 基于准备好的dom，初始化echarts实例
            var myChart_earth = echarts.init(document.getElementById('earth'));
            var data = [
                {
                    coord: [116.3, 39.95],
                    symbolSize: 20
                }, {
                    coord: [115.80, 39.50],
                    symbolSize: 20
                }, {
                    coord: [120.38, 37.35],
                    symbolSize: 20
                }
            ];
            var geoCoordMap = {
                '海门': [121.15, 31.89],
                '鄂尔多斯': [109.781327, 39.608266],
                '招远': [120.38, 37.35],
                '舟山': [122.207216, 29.985295],
                '齐齐哈尔': [123.97, 47.33],
                '盐城': [120.13, 33.38],
                '赤峰': [118.87, 42.28],
                '青岛': [120.33, 36.07],
                '乳山': [121.52, 36.89],
                '金昌': [102.188043, 38.520089],
                '泉州': [118.58, 24.93],
                '莱西': [120.53, 36.86],
                '日照': [119.46, 35.42],
                '胶南': [119.97, 35.88],
                '南通': [121.05, 32.08],
                '拉萨': [91.11, 29.97],
                '云浮': [112.02, 22.93],
                '梅州': [116.1, 24.55],
                '文登': [122.05, 37.2],
                '上海': [121.48, 31.22],
                '攀枝花': [101.718637, 26.582347],
                '威海': [122.1, 37.5],
                '承德': [117.93, 40.97],
                '厦门': [118.1, 24.46],
                '汕尾': [115.375279, 22.786211],
                '潮州': [116.63, 23.68],
                '丹东': [124.37, 40.13],
                '太仓': [121.1, 31.45],
                '曲靖': [103.79, 25.51],
                '烟台': [121.39, 37.52],
                '福州': [119.3, 26.08],
                '瓦房店': [121.979603, 39.627114],
                '即墨': [120.45, 36.38],
                '抚顺': [123.97, 41.97],
                '玉溪': [102.52, 24.35],
                '张家口': [114.87, 40.82],
                '阳泉': [113.57, 37.85],
                '莱州': [119.942327, 37.177017],
                '湖州': [120.1, 30.86],
                '汕头': [116.69, 23.39],
                '昆山': [120.95, 31.39],
                '宁波': [121.56, 29.86],
                '湛江': [110.359377, 21.270708],
                '揭阳': [116.35, 23.55],
                '荣成': [122.41, 37.16],
                '连云港': [119.16, 34.59],
                '葫芦岛': [120.836932, 40.711052],
                '常熟': [120.74, 31.64],
                '东莞': [113.75, 23.04],
                '河源': [114.68, 23.73],
                '淮安': [119.15, 33.5],
                '泰州': [119.9, 32.49],
                '南宁': [108.33, 22.84],
                '营口': [122.18, 40.65],
                '惠州': [114.4, 23.09],
                '江阴': [120.26, 31.91],
                '蓬莱': [120.75, 37.8],
                '韶关': [113.62, 24.84],
                '嘉峪关': [98.289152, 39.77313],
                '广州': [113.23, 23.16],
                '延安': [109.47, 36.6],
                '太原': [112.53, 37.87],
                '清远': [113.01, 23.7],
                '中山': [113.38, 22.52],
                '昆明': [102.73, 25.04],
                '寿光': [118.73, 36.86],
                '盘锦': [122.070714, 41.119997],
                '长治': [113.08, 36.18],
                '深圳': [114.07, 22.62],
                '珠海': [113.52, 22.3],
                '宿迁': [118.3, 33.96],
                '咸阳': [108.72, 34.36],
                '铜川': [109.11, 35.09],
                '平度': [119.97, 36.77],
                '佛山': [113.11, 23.05],
                '海口': [110.35, 20.02],
                '江门': [113.06, 22.61],
                '章丘': [117.53, 36.72],
                '肇庆': [112.44, 23.05],
                '大连': [121.62, 38.92],
                '临汾': [111.5, 36.08],
                '吴江': [120.63, 31.16],
                '石嘴山': [106.39, 39.04],
                '沈阳': [123.38, 41.8],
                '苏州': [120.62, 31.32],
                '茂名': [110.88, 21.68],
                '嘉兴': [120.76, 30.77],
                '长春': [125.35, 43.88],
                '胶州': [120.03336, 36.264622],
                '银川': [106.27, 38.47],
                '张家港': [120.555821, 31.875428],
                '三门峡': [111.19, 34.76],
                '锦州': [121.15, 41.13],
                '南昌': [115.89, 28.68],
                '柳州': [109.4, 24.33],
                '三亚': [109.511909, 18.252847],
                '自贡': [104.778442, 29.33903],
                '吉林': [126.57, 43.87],
                '阳江': [111.95, 21.85],
                '泸州': [105.39, 28.91],
                '西宁': [101.74, 36.56],
                '宜宾': [104.56, 29.77],
                '呼和浩特': [111.65, 40.82],
                '成都': [104.06, 30.67],
                '大同': [113.3, 40.12],
                '镇江': [119.44, 32.2],
                '桂林': [110.28, 25.29],
                '张家界': [110.479191, 29.117096],
                '宜兴': [119.82, 31.36],
                '北海': [109.12, 21.49],
                '西安': [108.95, 34.27],
                '金坛': [119.56, 31.74],
                '东营': [118.49, 37.46],
                '牡丹江': [129.58, 44.6],
                '遵义': [106.9, 27.7],
                '绍兴': [120.58, 30.01],
                '扬州': [119.42, 32.39],
                '常州': [119.95, 31.79],
                '潍坊': [119.1, 36.62],
                '重庆': [106.54, 29.59],
                '台州': [121.420757, 28.656386],
                '南京': [118.78, 32.04],
                '滨州': [118.03, 37.36],
                '贵阳': [106.71, 26.57],
                '无锡': [120.29, 31.59],
                '本溪': [123.73, 41.3],
                '克拉玛依': [84.77, 45.59],
                '渭南': [109.5, 34.52],
                '马鞍山': [118.48, 31.56],
                '宝鸡': [107.15, 34.38],
                '焦作': [113.21, 35.24],
                '句容': [119.16, 31.95],
                '北京': [116.46, 39.92],
                '徐州': [117.2, 34.26],
                '衡水': [115.72, 37.72],
                '包头': [110, 40.58],
                '绵阳': [104.73, 31.48],
                '乌鲁木齐': [87.68, 43.77],
                '枣庄': [117.57, 34.86],
                '杭州': [120.19, 30.26],
                '淄博': [118.05, 36.78],
                '鞍山': [122.85, 41.12],
                '溧阳': [119.48, 31.43],
                '库尔勒': [86.06, 41.68],
                '安阳': [114.35, 36.1],
                '开封': [114.35, 34.79],
                '济南': [117, 36.65],
                '德阳': [104.37, 31.13],
                '温州': [120.65, 28.01],
                '九江': [115.97, 29.71],
                '邯郸': [114.47, 36.6],
                '临安': [119.72, 30.23],
                '兰州': [103.73, 36.03],
                '沧州': [116.83, 38.33],
                '临沂': [118.35, 35.05],
                '南充': [106.110698, 30.837793],
                '天津': [117.2, 39.13],
                '富阳': [119.95, 30.07],
                '泰安': [117.13, 36.18],
                '诸暨': [120.23, 29.71],
                '郑州': [113.65, 34.76],
                '哈尔滨': [126.63, 45.75],
                '聊城': [115.97, 36.45],
                '芜湖': [118.38, 31.33],
                '唐山': [118.02, 39.63],
                '平顶山': [113.29, 33.75],
                '邢台': [114.48, 37.05],
                '德州': [116.29, 37.45],
                '济宁': [116.59, 35.38],
                '荆州': [112.239741, 30.335165],
                '宜昌': [111.3, 30.7],
                '义乌': [120.06, 29.32],
                '丽水': [119.92, 28.45],
                '洛阳': [112.44, 34.7],
                '秦皇岛': [119.57, 39.95],
                '株洲': [113.16, 27.83],
                '石家庄': [114.48, 38.03],
                '莱芜': [117.67, 36.19],
                '常德': [111.69, 29.05],
                '保定': [115.48, 38.85],
                '湘潭': [112.91, 27.87],
                '金华': [119.64, 29.12],
                '岳阳': [113.09, 29.37],
                '长沙': [113, 28.21],
                '衢州': [118.88, 28.97],
                '廊坊': [116.7, 39.53],
                '菏泽': [115.480656, 35.23375],
                '合肥': [117.27, 31.86],
                '武汉': [114.31, 30.52],
                '大庆': [125.03, 46.58]
            };
            var areaData = [
                {
                    name: '北京',
                    value: 0,
                }, {
                    name: '山东',
                    value: 1
                }
            ];
            option_earth = {
                visualMap: {
                    pieces: [{
                        name: 0,
                        color: '#2aaaf3',
                        borderColor: 'black'
                    }, {
                        value: 1,
                        color: '#2aaaf3'
                    },],
                    show: false
                },
                series: [{
                    name: '中国',
                    type: 'map',
                    mapType: 'china',
                    itemStyle: {
                        normal: {
                            areaColor: '#021c3a', //中国地图 各省的背景色
                            borderColor: 'rgba(100,149,237,1)',
                            borderWidth: 0.5
                        },
                        emphasis: {
                            borderWidth: 1,
                            borderColor: 'black',
                            areaColor: '#2aaaf3',
                            label: {
                                shadowColor: '#fff', //默认透明
                                shadowBlur: 10,
                                show: true
                            }
                        }
                    },
                    selectedMode: 'multiple',
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#0e3b70'   //修改圆形内的字体颜色
                            }
                        },
                        emphasis: {
                            show: true
                        },
                    },
                    markPoint: {
                        symbol: 'pin',
                        symbolSize: 50,
                        label: {
                            normal: {
                                show: true,
                                formatter: function (d) {
                                    return d.name
                                }
                            }
                        },
                        //data: [   //地图上指定的 红色点的位置
                        //    data[0],
                        //    data[1],
                        //    data[2]
                        //]
                    },
                    data: areaData,
                }]
            };
            myChart_earth.setOption(option_earth);
        };




        // var wsUri ="ws://echo.websocket.org/";
        // var output;
        //
        // function init() {
        //     output = document.getElementById("output");
        //     testWebSocket();
        // }
        //
        // function testWebSocket() {
        //     websocket = new WebSocket(wsUri);
        //     websocket.onopen = function(evt) {
        //         onOpen(evt)
        //     };
        //     websocket.onclose = function(evt) {
        //         onClose(evt)
        //     };
        //     websocket.onmessage = function(evt) {
        //         onMessage(evt)
        //     };
        //     websocket.onerror = function(evt) {
        //         onError(evt)
        //     };
        // }
        //
        // function onOpen(evt) {
        //     writeToScreen("CONNECTED");
        //     doSend("WebSocket rocks");
        // }
        //
        // function onClose(evt) {
        //     writeToScreen("DISCONNECTED");
        // }
        //
        // function onMessage(evt) {
        //     writeToScreen('<span style="color: blue;">RESPONSE: '+ evt.data+'</span>');
        //     websocket.close();
        // }
        //
        // function onError(evt) {
        //     writeToScreen('<span style="color: red;">ERROR:</span> '+ evt.data);
        // }
        //
        // function doSend(message) {
        //     writeToScreen("SENT: " + message);
        //     websocket.send(message);
        // }
        //
        // function writeToScreen(message) {
        //     var pre = document.createElement("p");
        //     pre.style.wordWrap = "break-word";
        //     pre.innerHTML = message;
        //     output.appendChild(pre);
        // }
        //
        // window.addEventListener("load", init, false);


    }]);

app.controller('factoryInfoCtrl', ['$scope', '$http', 'ajax_factoryIndex', '$timeout'
    , function ($scope, $http, ajax_factoryIndex, $timeout) {

        // $scope.fn_common_WaitingDivShow(true);
        //$timeout(function(){
        //    $scope.fn_common_WaitingDivShow(false);
        //},1000);
        //获取菜单选中样式
        // $scope.fn_common_reload_style();
        //
        //
        // //获取不同电脑屏幕的宽度
        // $scope.fn_getWidth = function(){
        //     //1、获取echart外层div的id
        //     var curve = document.getElementById('curve');
        //     var pillar = document.getElementById('pillar');
        //     var pie_wrapper = document.getElementById('pie_wrapper');
        //     var curve_wrapper = document.getElementById('curve_wrapper');
        //     var toggle_info_left_3 = document.getElementById('toggle_info_left_3');
        //     var radar_wrapper = document.getElementById('radar_wrapper');
        //     var toggle_info_left_2 = document.getElementById('toggle_info_left_2');
        //     var radar = document.getElementById('radar');
        //     //获取 网页自动撑高的可见区域高度 ，高度要写兼容、加单位
        //     var oHeight = window.document.body.clientHeight || window.document.documentElement.clientHeight;
        //     var _oWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
        //     //var oWidth = (_oWidth - 30) / 3 ;
        //     //公共 工具栏 获取屏幕宽度  减去  左侧菜单栏 的宽度，就可以得到 不同屏幕的可变宽度进行赋值
        //
        //
        //     if( _oWidth < 1600 ){
        //         if(toggle_info_left_3) toggle_info_left_3.style.width = _oWidth - 575 + 'px' ;
        //         if(curve) curve.style.width = 675 +'px' ;
        //         if(curve_wrapper) curve_wrapper.style.width = 680 +'px' ;
        //
        //         if(pillar) pillar.style.height = 500 +'px' ;
        //         if(toggle_info_left_2) toggle_info_left_2.style.height = oHeight - 550 +'px' ;
        //
        //         if(radar_wrapper) radar_wrapper.style.height = oHeight - 350 +'px' ;
        //         if(radar) radar.style.height = oHeight - 360 +'px' ;
        //
        //     }
        //     else {
        //         if(curve) curve.style.width = _oWidth - 500 - 610 +'px' ;
        //         if(pillar) pillar.style.height = oHeight - 230 - 250 - 70 +'px' ;
        //         if(curve_wrapper) curve_wrapper.style.width = _oWidth - 1090 +'px' ;
        //
        //         if(radar_wrapper) radar_wrapper.style.height = oHeight - 400 - 90 +'px' ;
        //         if(radar) radar.style.height = oHeight - 400 - 90 - 30 +'px' ;
        //
        //     }
        //
        //
        //
        // };
        // $scope.fn_getWidth();

        // $scope.radar_selected = function () {
        //
        // };

        /*
         * 地图
         * */
        (function () {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('earth'));

            // 原始地图
            var data = [
                {
                    coord: [116.3, 39.95],
                    symbolSize: 20
                }, {
                    coord: [115.80, 39.50],
                    symbolSize: 20
                }, {
                    coord: [120.38, 37.35],
                    symbolSize: 20
                }
            ];
            // var geoCoordMap = {
            //     '海门': [121.15, 31.89],
            //     '鄂尔多斯': [109.781327, 39.608266],
            //     '招远': [120.38, 37.35],
            //     '舟山': [122.207216, 29.985295],
            //     '齐齐哈尔': [123.97, 47.33],
            //     '盐城': [120.13, 33.38],
            //     '赤峰': [118.87, 42.28],
            //     '青岛': [120.33, 36.07],
            //     '乳山': [121.52, 36.89],
            //     '金昌': [102.188043, 38.520089],
            //     '泉州': [118.58, 24.93],
            //     '莱西': [120.53, 36.86],
            //     '日照': [119.46, 35.42],
            //     '胶南': [119.97, 35.88],
            //     '南通': [121.05, 32.08],
            //     '拉萨': [91.11, 29.97],
            //     '云浮': [112.02, 22.93],
            //     '梅州': [116.1, 24.55],
            //     '文登': [122.05, 37.2],
            //     '上海': [121.48, 31.22],
            //     '攀枝花': [101.718637, 26.582347],
            //     '威海': [122.1, 37.5],
            //     '承德': [117.93, 40.97],
            //     '厦门': [118.1, 24.46],
            //     '汕尾': [115.375279, 22.786211],
            //     '潮州': [116.63, 23.68],
            //     '丹东': [124.37, 40.13],
            //     '太仓': [121.1, 31.45],
            //     '曲靖': [103.79, 25.51],
            //     '烟台': [121.39, 37.52],
            //     '福州': [119.3, 26.08],
            //     '瓦房店': [121.979603, 39.627114],
            //     '即墨': [120.45, 36.38],
            //     '抚顺': [123.97, 41.97],
            //     '玉溪': [102.52, 24.35],
            //     '张家口': [114.87, 40.82],
            //     '阳泉': [113.57, 37.85],
            //     '莱州': [119.942327, 37.177017],
            //     '湖州': [120.1, 30.86],
            //     '汕头': [116.69, 23.39],
            //     '昆山': [120.95, 31.39],
            //     '宁波': [121.56, 29.86],
            //     '湛江': [110.359377, 21.270708],
            //     '揭阳': [116.35, 23.55],
            //     '荣成': [122.41, 37.16],
            //     '连云港': [119.16, 34.59],
            //     '葫芦岛': [120.836932, 40.711052],
            //     '常熟': [120.74, 31.64],
            //     '东莞': [113.75, 23.04],
            //     '河源': [114.68, 23.73],
            //     '淮安': [119.15, 33.5],
            //     '泰州': [119.9, 32.49],
            //     '南宁': [108.33, 22.84],
            //     '营口': [122.18, 40.65],
            //     '惠州': [114.4, 23.09],
            //     '江阴': [120.26, 31.91],
            //     '蓬莱': [120.75, 37.8],
            //     '韶关': [113.62, 24.84],
            //     '嘉峪关': [98.289152, 39.77313],
            //     '广州': [113.23, 23.16],
            //     '延安': [109.47, 36.6],
            //     '太原': [112.53, 37.87],
            //     '清远': [113.01, 23.7],
            //     '中山': [113.38, 22.52],
            //     '昆明': [102.73, 25.04],
            //     '寿光': [118.73, 36.86],
            //     '盘锦': [122.070714, 41.119997],
            //     '长治': [113.08, 36.18],
            //     '深圳': [114.07, 22.62],
            //     '珠海': [113.52, 22.3],
            //     '宿迁': [118.3, 33.96],
            //     '咸阳': [108.72, 34.36],
            //     '铜川': [109.11, 35.09],
            //     '平度': [119.97, 36.77],
            //     '佛山': [113.11, 23.05],
            //     '海口': [110.35, 20.02],
            //     '江门': [113.06, 22.61],
            //     '章丘': [117.53, 36.72],
            //     '肇庆': [112.44, 23.05],
            //     '大连': [121.62, 38.92],
            //     '临汾': [111.5, 36.08],
            //     '吴江': [120.63, 31.16],
            //     '石嘴山': [106.39, 39.04],
            //     '沈阳': [123.38, 41.8],
            //     '苏州': [120.62, 31.32],
            //     '茂名': [110.88, 21.68],
            //     '嘉兴': [120.76, 30.77],
            //     '长春': [125.35, 43.88],
            //     '胶州': [120.03336, 36.264622],
            //     '银川': [106.27, 38.47],
            //     '张家港': [120.555821, 31.875428],
            //     '三门峡': [111.19, 34.76],
            //     '锦州': [121.15, 41.13],
            //     '南昌': [115.89, 28.68],
            //     '柳州': [109.4, 24.33],
            //     '三亚': [109.511909, 18.252847],
            //     '自贡': [104.778442, 29.33903],
            //     '吉林': [126.57, 43.87],
            //     '阳江': [111.95, 21.85],
            //     '泸州': [105.39, 28.91],
            //     '西宁': [101.74, 36.56],
            //     '宜宾': [104.56, 29.77],
            //     '呼和浩特': [111.65, 40.82],
            //     '成都': [104.06, 30.67],
            //     '大同': [113.3, 40.12],
            //     '镇江': [119.44, 32.2],
            //     '桂林': [110.28, 25.29],
            //     '张家界': [110.479191, 29.117096],
            //     '宜兴': [119.82, 31.36],
            //     '北海': [109.12, 21.49],
            //     '西安': [108.95, 34.27],
            //     '金坛': [119.56, 31.74],
            //     '东营': [118.49, 37.46],
            //     '牡丹江': [129.58, 44.6],
            //     '遵义': [106.9, 27.7],
            //     '绍兴': [120.58, 30.01],
            //     '扬州': [119.42, 32.39],
            //     '常州': [119.95, 31.79],
            //     '潍坊': [119.1, 36.62],
            //     '重庆': [106.54, 29.59],
            //     '台州': [121.420757, 28.656386],
            //     '南京': [118.78, 32.04],
            //     '滨州': [118.03, 37.36],
            //     '贵阳': [106.71, 26.57],
            //     '无锡': [120.29, 31.59],
            //     '本溪': [123.73, 41.3],
            //     '克拉玛依': [84.77, 45.59],
            //     '渭南': [109.5, 34.52],
            //     '马鞍山': [118.48, 31.56],
            //     '宝鸡': [107.15, 34.38],
            //     '焦作': [113.21, 35.24],
            //     '句容': [119.16, 31.95],
            //     '北京': [116.46, 39.92],
            //     '徐州': [117.2, 34.26],
            //     '衡水': [115.72, 37.72],
            //     '包头': [110, 40.58],
            //     '绵阳': [104.73, 31.48],
            //     '乌鲁木齐': [87.68, 43.77],
            //     '枣庄': [117.57, 34.86],
            //     '杭州': [120.19, 30.26],
            //     '淄博': [118.05, 36.78],
            //     '鞍山': [122.85, 41.12],
            //     '溧阳': [119.48, 31.43],
            //     '库尔勒': [86.06, 41.68],
            //     '安阳': [114.35, 36.1],
            //     '开封': [114.35, 34.79],
            //     '济南': [117, 36.65],
            //     '德阳': [104.37, 31.13],
            //     '温州': [120.65, 28.01],
            //     '九江': [115.97, 29.71],
            //     '邯郸': [114.47, 36.6],
            //     '临安': [119.72, 30.23],
            //     '兰州': [103.73, 36.03],
            //     '沧州': [116.83, 38.33],
            //     '临沂': [118.35, 35.05],
            //     '南充': [106.110698, 30.837793],
            //     '天津': [117.2, 39.13],
            //     '富阳': [119.95, 30.07],
            //     '泰安': [117.13, 36.18],
            //     '诸暨': [120.23, 29.71],
            //     '郑州': [113.65, 34.76],
            //     '哈尔滨': [126.63, 45.75],
            //     '聊城': [115.97, 36.45],
            //     '芜湖': [118.38, 31.33],
            //     '唐山': [118.02, 39.63],
            //     '平顶山': [113.29, 33.75],
            //     '邢台': [114.48, 37.05],
            //     '德州': [116.29, 37.45],
            //     '济宁': [116.59, 35.38],
            //     '荆州': [112.239741, 30.335165],
            //     '宜昌': [111.3, 30.7],
            //     '义乌': [120.06, 29.32],
            //     '丽水': [119.92, 28.45],
            //     '洛阳': [112.44, 34.7],
            //     '秦皇岛': [119.57, 39.95],
            //     '株洲': [113.16, 27.83],
            //     '石家庄': [114.48, 38.03],
            //     '莱芜': [117.67, 36.19],
            //     '常德': [111.69, 29.05],
            //     '保定': [115.48, 38.85],
            //     '湘潭': [112.91, 27.87],
            //     '金华': [119.64, 29.12],
            //     '岳阳': [113.09, 29.37],
            //     '长沙': [113, 28.21],
            //     '衢州': [118.88, 28.97],
            //     '廊坊': [116.7, 39.53],
            //     '菏泽': [115.480656, 35.23375],
            //     '合肥': [117.27, 31.86],
            //     '武汉': [114.31, 30.52],
            //     '大庆': [125.03, 46.58]
            // };
            //
            // var areaData = [
            //     {
            //         name: '北京',
            //         value: 0,
            //
            //     }, {
            //         name: '山东',
            //         value: 1
            //     }
            //     , {
            //         name: '贵州',
            //         value: 2
            //     }
            // ];
            // var option_earth = {
            //     visualMap: {
            //         pieces: [{
            //             name: 0,
            //             color: '#2aaaf3',
            //             borderColor: '#2aaaf3'
            //         }, {
            //             value: 1,
            //             color: '#2aaaf3',
            //             borderColor: '#2aaaf3'
            //         },],
            //         show: false
            //     },
            //     series: [{
            //         name: '中国',
            //         type: 'map',
            //         mapType: 'china',
            //         zoom:1.15,
            //         // roam:'scale',//鼠标滚动缩放
            //         // scaleLimit:{
            //         //   min:1,
            //         //   max:2
            //         // },
            //         itemStyle: {
            //             normal: {
            //                 areaColor: '#021c3a', //中国地图 各省的背景色
            //                 borderColor: 'rgba(100,149,237,1)',
            //                 borderWidth: 1.5
            //             },
            //             emphasis: {
            //                 borderWidth: 1.5,
            //                 borderColor: 'rgba(100,149,237,1)',
            //                 areaColor: '#2aaaf3',
            //                 label: {
            //                     shadowColor: '#fff', //默认透明
            //                     shadowBlur: 10,
            //                     show: true
            //                 }
            //             }
            //         },
            //         selectedMode: 'multiple',
            //         label: {
            //             normal: {
            //                 show: true,
            //                 textStyle: {
            //                     color: '#2aaaf3'   //修改地图上字体颜色
            //                 }
            //             },
            //             emphasis: {
            //                 show: true,
            //                 textStyle: {
            //                     color: '#000'   //修改地图上字体颜色
            //                 }
            //             },
            //         },
            //         markPoint: {
            //             symbol: 'pin',
            //             symbolSize: 50,
            //             label: {
            //                 normal: {
            //                     show: true,
            //                     formatter: function (d) {
            //                         return d.name
            //                     }
            //                 }
            //             },
            //             // data: [   //地图上指定的 红色点的位置
            //             //    data[0],
            //             //    data[1],
            //             //    data[2]
            //             // ]
            //         },
            //         data: areaData,
            //     }]
            //
            // };

            //绿色地图
            // var data = [
            //     {name: '海门', value: 9},
            //     {name: '鄂尔多斯', value: 12},
            //     {name: '招远', value: 12},
            //     {name: '舟山', value: 12},
            //     {name: '齐齐哈尔', value: 14},
            //     {name: '盐城', value: 15},
            //     {name: '赤峰', value: 16},
            //     {name: '青岛', value: 18},
            //     {name: '乳山', value: 18},
            //     {name: '金昌', value: 19},
            //     {name: '泉州', value: 21},
            //     {name: '南通', value: 23},
            //     {name: '拉萨', value: 24},
            //     {name: '云浮', value: 24},
            //     {name: '上海', value: 25},
            //     {name: '攀枝花', value: 25},
            //     {name: '承德', value: 25},
            //     {name: '汕尾', value: 26},
            //     {name: '丹东', value: 27},
            //     {name: '瓦房店', value: 30},
            //     {name: '延安', value: 38},
            //     {name: '咸阳', value: 43},
            //     {name: '南昌', value: 54},
            //     {name: '柳州', value: 54},
            //     {name: '三亚', value: 54},
            //     {name: '泸州', value: 57},
            //     {name: '克拉玛依', value: 72}
            // ];
            //
            // var geoCoordMap = {
            //     '海门':[121.15,31.89],
            //     '鄂尔多斯':[109.781327,39.608266],
            //     '招远':[120.38,37.35],
            //     '舟山':[122.207216,29.985295],
            //     '齐齐哈尔':[123.97,47.33],
            //     '盐城':[120.13,33.38],
            //     '赤峰':[118.87,42.28],
            //     '青岛':[120.33,36.07],
            //     '乳山':[121.52,36.89],
            //     '金昌':[102.188043,38.520089],
            //     '泉州':[118.58,24.93],
            //     '莱西':[120.53,36.86],
            //     '日照':[119.46,35.42],
            //     '胶南':[119.97,35.88],
            //     '南通':[121.05,32.08],
            //     '拉萨':[91.11,29.97],
            //     '云浮':[112.02,22.93],
            //     '梅州':[116.1,24.55],
            //     '文登':[122.05,37.2],
            //     '上海':[121.48,31.22],
            //     '攀枝花':[101.718637,26.582347],
            //     '威海':[122.1,37.5],
            //     '承德':[117.93,40.97],
            //     '厦门':[118.1,24.46],
            //     '汕尾':[115.375279,22.786211],
            //     '潮州':[116.63,23.68],
            //     '丹东':[124.37,40.13],
            //     '太仓':[121.1,31.45],
            //     '曲靖':[103.79,25.51],
            //     '烟台':[121.39,37.52],
            //     '福州':[119.3,26.08],
            //     '瓦房店':[121.979603,39.627114],
            //     '即墨':[120.45,36.38],
            //     '抚顺':[123.97,41.97],
            //     '玉溪':[102.52,24.35],
            //     '张家口':[114.87,40.82],
            //     '阳泉':[113.57,37.85],
            //     '莱州':[119.942327,37.177017],
            //     '湖州':[120.1,30.86],
            //     '汕头':[116.69,23.39],
            //     '昆山':[120.95,31.39],
            //     '宁波':[121.56,29.86],
            //     '湛江':[110.359377,21.270708],
            //     '揭阳':[116.35,23.55],
            //     '荣成':[122.41,37.16],
            //     '连云港':[119.16,34.59],
            //     '葫芦岛':[120.836932,40.711052],
            //     '常熟':[120.74,31.64],
            //     '东莞':[113.75,23.04],
            //     '河源':[114.68,23.73],
            //     '淮安':[119.15,33.5],
            //     '泰州':[119.9,32.49],
            //     '南宁':[108.33,22.84],
            //     '营口':[122.18,40.65],
            //     '惠州':[114.4,23.09],
            //     '江阴':[120.26,31.91],
            //     '蓬莱':[120.75,37.8],
            //     '韶关':[113.62,24.84],
            //     '嘉峪关':[98.289152,39.77313],
            //     '广州':[113.23,23.16],
            //     '延安':[109.47,36.6],
            //     '太原':[112.53,37.87],
            //     '清远':[113.01,23.7],
            //     '中山':[113.38,22.52],
            //     '昆明':[102.73,25.04],
            //     '寿光':[118.73,36.86],
            //     '盘锦':[122.070714,41.119997],
            //     '长治':[113.08,36.18],
            //     '深圳':[114.07,22.62],
            //     '珠海':[113.52,22.3],
            //     '宿迁':[118.3,33.96],
            //     '咸阳':[108.72,34.36],
            //     '铜川':[109.11,35.09],
            //     '平度':[119.97,36.77],
            //     '佛山':[113.11,23.05],
            //     '海口':[110.35,20.02],
            //     '江门':[113.06,22.61],
            //     '章丘':[117.53,36.72],
            //     '肇庆':[112.44,23.05],
            //     '大连':[121.62,38.92],
            //     '临汾':[111.5,36.08],
            //     '吴江':[120.63,31.16],
            //     '石嘴山':[106.39,39.04],
            //     '沈阳':[123.38,41.8],
            //     '苏州':[120.62,31.32],
            //     '茂名':[110.88,21.68],
            //     '嘉兴':[120.76,30.77],
            //     '长春':[125.35,43.88],
            //     '胶州':[120.03336,36.264622],
            //     '银川':[106.27,38.47],
            //     '张家港':[120.555821,31.875428],
            //     '三门峡':[111.19,34.76],
            //     '锦州':[121.15,41.13],
            //     '南昌':[115.89,28.68],
            //     '柳州':[109.4,24.33],
            //     '三亚':[109.511909,18.252847],
            //     '自贡':[104.778442,29.33903],
            //     '吉林':[126.57,43.87],
            //     '阳江':[111.95,21.85],
            //     '泸州':[105.39,28.91],
            //     '西宁':[101.74,36.56],
            //     '宜宾':[104.56,29.77],
            //     '呼和浩特':[111.65,40.82],
            //     '成都':[104.06,30.67],
            //     '大同':[113.3,40.12],
            //     '镇江':[119.44,32.2],
            //     '桂林':[110.28,25.29],
            //     '张家界':[110.479191,29.117096],
            //     '宜兴':[119.82,31.36],
            //     '北海':[109.12,21.49],
            //     '西安':[108.95,34.27],
            //     '金坛':[119.56,31.74],
            //     '东营':[118.49,37.46],
            //     '牡丹江':[129.58,44.6],
            //     '遵义':[106.9,27.7],
            //     '绍兴':[120.58,30.01],
            //     '扬州':[119.42,32.39],
            //     '常州':[119.95,31.79],
            //     '潍坊':[119.1,36.62],
            //     '重庆':[106.54,29.59],
            //     '台州':[121.420757,28.656386],
            //     '南京':[118.78,32.04],
            //     '滨州':[118.03,37.36],
            //     '贵阳':[106.71,26.57],
            //     '无锡':[120.29,31.59],
            //     '本溪':[123.73,41.3],
            //     '克拉玛依':[84.77,45.59],
            //     '渭南':[109.5,34.52],
            //     '马鞍山':[118.48,31.56],
            //     '宝鸡':[107.15,34.38],
            //     '焦作':[113.21,35.24],
            //     '句容':[119.16,31.95],
            //     '北京':[116.46,39.92],
            //     '徐州':[117.2,34.26],
            //     '衡水':[115.72,37.72],
            //     '包头':[110,40.58],
            //     '绵阳':[104.73,31.48],
            //     '乌鲁木齐':[87.68,43.77],
            //     '枣庄':[117.57,34.86],
            //     '杭州':[120.19,30.26],
            //     '淄博':[118.05,36.78],
            //     '鞍山':[122.85,41.12],
            //     '溧阳':[119.48,31.43],
            //     '库尔勒':[86.06,41.68],
            //     '安阳':[114.35,36.1],
            //     '开封':[114.35,34.79],
            //     '济南':[117,36.65],
            //     '德阳':[104.37,31.13],
            //     '温州':[120.65,28.01],
            //     '九江':[115.97,29.71],
            //     '邯郸':[114.47,36.6],
            //     '临安':[119.72,30.23],
            //     '兰州':[103.73,36.03],
            //     '沧州':[116.83,38.33],
            //     '临沂':[118.35,35.05],
            //     '南充':[106.110698,30.837793],
            //     '天津':[117.2,39.13],
            //     '富阳':[119.95,30.07],
            //     '泰安':[117.13,36.18],
            //     '诸暨':[120.23,29.71],
            //     '郑州':[113.65,34.76],
            //     '哈尔滨':[126.63,45.75],
            //     '聊城':[115.97,36.45],
            //     '芜湖':[118.38,31.33],
            //     '唐山':[118.02,39.63],
            //     '平顶山':[113.29,33.75],
            //     '邢台':[114.48,37.05],
            //     '德州':[116.29,37.45],
            //     '济宁':[116.59,35.38],
            //     '荆州':[112.239741,30.335165],
            //     '宜昌':[111.3,30.7],
            //     '义乌':[120.06,29.32],
            //     '丽水':[119.92,28.45],
            //     '洛阳':[112.44,34.7],
            //     '秦皇岛':[119.57,39.95],
            //     '株洲':[113.16,27.83],
            //     '石家庄':[114.48,38.03],
            //     '莱芜':[117.67,36.19],
            //     '常德':[111.69,29.05],
            //     '保定':[115.48,38.85],
            //     '湘潭':[112.91,27.87],
            //     '金华':[119.64,29.12],
            //     '岳阳':[113.09,29.37],
            //     '长沙':[113,28.21],
            //     '衢州':[118.88,28.97],
            //     '廊坊':[116.7,39.53],
            //     '菏泽':[115.480656,35.23375],
            //     '合肥':[117.27,31.86],
            //     '武汉':[114.31,30.52],
            //     '大庆':[125.03,46.58]
            // };
            //
            // function convertData(data) {
            //     var res = [];
            //     for (var i = 0; i < data.length; i++) {
            //         var geoCoord = geoCoordMap[data[i].name];
            //         if (geoCoord) {
            //             res.push({
            //                 name: data[i].name,
            //                 value: geoCoord.concat(data[i].value)
            //             });
            //         }
            //     }
            //     return res;
            // };
            //
            // function randomValue() {
            //     return Math.round(Math.random()*1000);
            // }
            //
            //
            // var option_earth = {
            //     tooltip: {},
            //     visualMap: {
            //         min: 0,
            //         max: 1500,
            //         left: 'left',
            //         top: 'bottom',
            //         text: ['High','Low'],
            //         seriesIndex: [1],
            //         inRange: {
            //             color: ['#83f883', '#11bfc6']
            //         },
            //         calculable : true
            //     },
            //     geo: {
            //         map: 'china',
            //         roam: true,
            //         label: {
            //             normal: {
            //                 show: true,
            //                 textStyle: {
            //                     color: 'rgba(0,0,0,0.0)'
            //                 }
            //             }
            //         },
            //         itemStyle: {
            //             normal:{
            //                 borderColor: '#fff'
            //             },
            //             emphasis:{
            //                 areaColor: null,
            //                 shadowOffsetX: 0,
            //                 shadowOffsetY: 0,
            //                 shadowBlur: 20,
            //                 borderWidth: 0,
            //                 shadowColor: 'rgba(0, 0, 0, 0.5)'
            //             }
            //         }
            //     },
            //     series : [
            //         {
            //             type: 'scatter',
            //             coordinateSystem: 'geo',
            //             data: convertData(data),
            //             symbolSize: 1,
            //             symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
            //             symbolRotate: 35,
            //             label: {
            //                 normal: {
            //                     formatter: '{b}',
            //                     position: 'right',
            //                     show: false
            //                 },
            //                 emphasis: {
            //                     show: false
            //                 }
            //             },
            //             itemStyle: {
            //                 normal: {
            //                     color: '#fff'
            //                 }
            //             }
            //         },
            //         {
            //             name: 'categoryA',
            //             type: 'map',
            //             geoIndex: 0,
            //             // tooltip: {show: false},
            //             data:[
            //                 {name: '北京', value: randomValue()},
            //                 {name: '天津', value: randomValue()},
            //                 {name: '上海', value: randomValue()},
            //                 {name: '重庆', value: randomValue()},
            //                 {name: '河北', value: randomValue()},
            //                 {name: '河南', value: randomValue()},
            //                 {name: '云南', value: randomValue()},
            //                 {name: '辽宁', value: randomValue()},
            //                 {name: '黑龙江', value: randomValue()},
            //                 {name: '湖南', value: randomValue()},
            //                 {name: '安徽', value: randomValue()},
            //                 {name: '山东', value: randomValue()},
            //                 {name: '新疆', value: randomValue()},
            //                 {name: '江苏', value: randomValue()},
            //                 {name: '浙江', value: randomValue()},
            //                 {name: '江西', value: randomValue()},
            //                 {name: '湖北', value: randomValue()},
            //                 {name: '广西', value: randomValue()},
            //                 {name: '甘肃', value: randomValue()},
            //                 {name: '山西', value: randomValue()},
            //                 {name: '内蒙古', value: randomValue()},
            //                 {name: '陕西', value: randomValue()},
            //                 {name: '吉林', value: randomValue()},
            //                 {name: '福建', value: randomValue()},
            //                 {name: '贵州', value: randomValue()},
            //                 {name: '广东', value: randomValue()},
            //                 {name: '青海', value: randomValue()},
            //                 {name: '西藏', value: randomValue()},
            //                 {name: '四川', value: randomValue()},
            //                 {name: '宁夏', value: randomValue()},
            //                 {name: '海南', value: randomValue()},
            //                 {name: '台湾', value: randomValue()},
            //                 {name: '香港', value: randomValue()},
            //                 {name: '澳门', value: randomValue()}
            //             ]
            //         }
            //     ]
            // };


            //提示框地图

            // function tooltipCharts() {
            //     // console.log(arguments[0]);
            //     var myChart = echarts.init(document.getElementById('tooltipBarId'));
            //     var option = {
            //         tooltip: {},
            //         dataset: {
            //             source: [
            //                 ['xAxis', '一月', '二月', '三月', '四月', '五月', '六月'],
            //                 ['amount', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7]
            //             ]
            //         },
            //         xAxis: {type: 'category', interval: true, axisLabel: {rotate: 45}, axisTick: {show: false}},
            //         yAxis: {}, color: ['#4FA8F9', '#F5A623'],
            //         grid: {show: true, backgroundColor: '#FAFAFA', left: 30, right: 20, top: 20},
            //         series: [
            //             {type: 'bar', smooth: true, seriesLayoutBy: 'row', barWidth: 10}
            //         ]
            //     };
            //     myChart.setOption(option);
            // }

            var data = [
                {
                    name: '国家农业科技展示园',
                    value0: 984,
                    value1: 300,
                    value2: 95,
                    value3: 86,
                    value4: 9.5
                },
                {
                    name: '中粮智慧农场',
                    value0: 867,
                    value1: 300,
                    value2: 94,
                    value3: 76,
                    value4: 9.3
                },
                {
                    name: '东营一期',
                    value0: 5698,
                    value1: 2000,
                    value2: 86,
                    value3: 73,
                    value4: 9.6
                },
                {
                    name: '贵阳园区',
                    value0: 4587,
                    value1: 2000,
                    value2: 90,
                    value3: 89,
                    value4: 9.7
                }
            ];
            var geoCoordMap = {
                '国家农业科技展示园': [116.340, 39.97],
                '中粮智慧农场': [116.077, 39.597],
                '东营一期': [118.68, 37.439],
                '贵阳园区': [106.636, 26.652]
            };

            var convertData = function (data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                    var geoCoord = geoCoordMap[data[i].name];
                    if (geoCoord) {
                        res.push({
                            name: data[i].name,
                            value: geoCoord
                                .concat(data[i].value0)
                                .concat(data[i].value1)
                                .concat(data[i].value2)
                                .concat(data[i].value3)
                                .concat(data[i].value4)
                        });
                    }
                }
                return res;
            };
            // convertData(data);

            // console.log(convertData(data));


            var option = {
                tooltip: {
                    trigger: 'item',
                    // textStyle: {
                    //     fontWeight: 'normal', //标题颜色
                    //     color: '#fff',
                    //     fontSize: 22
                    // }
                },
                geo: {
                    map: 'china',
                    label: {
                        emphasis: {
                            show: false
                        }
                    },
                    zoom: 1.15,
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#02C39A' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#028090' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            borderColor: '#111',
                        },
                        emphasis: {
                            areaColor: '#025f6f'
                        }
                    }
                },
                series: [
                    {
                        name: '园区',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        data: convertData(data.sort(function (a, b) {
                            return b.value - a.value;
                        }).slice(0, 6)),
                        symbolSize: 25,
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'fill',
                            scale: 5
                        },
                        hoverAnimation: true,
                        label: {
                            normal: {
                                formatter: '{b}',
                                position: 'bottom',
                                color: '#02a67d',
                                fontWeight: 'bold',
                                fontSize: 17,
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#FFC057' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#F98B60' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                shadowBlur: 10,
                                shadowColor: '#333'
                            }
                        },
                        zlevel: 1,
                        tooltip: {
                            padding: 0,
                            enterable: true,
                            transitionDuration: 1,
                            textStyle: {
                                color: '#ffffff',
                                decoration: 'none',
                                fontSize: 22
                            },
                            backgroundColor:'rgba(2,195,154,0.4)',
                            formatter: function (params) {
                                // console.log(params)
                                var tipHtml = '';
                                tipHtml = '<div style="height:250px;width:300px;border-radius: 30px">' +
                                    '    <div >' + params.name + '</div>' +
                                    '    <div style="height:110px;width:100%;">' +
                                    '        <div style="padding-left:18px;padding-top:10px">' +
                                    '            <div>总产量:'+params.data.value[2]+'吨</div>' +
                                    '        </div>' +
                                    '        <div style="padding-left:18px;padding-top:5px">' +
                                    '            <span>种植面积:'+params.data.value[3]+'公顷</span>' +
                                    '        </div>' +
                                    '        <div style="padding-left:18px;padding-top:5px">' +
                                    '            <span>资源利用率:'+params.data.value[4]+'%</span>' +
                                    '        </div>' +
                                    '        <div style="padding-left:18px;padding-top:5px">' +
                                    '            <span>劳动生产率:'+params.data.value[5]+'%</span>' +
                                    '        </div>' +
                                    '        <div style="padding-left:18px;padding-top:5px">' +
                                    '            <span>综合评分:'+params.data.value[6]+'分</span>' +
                                    '        </div>' +
                                    '    </div>' +
                                    '</div>';
                                // setTimeout(function () {
                                //     tooltipCharts(params.name);
                                // }, 10);
                                return tipHtml;
                            }
                        }
                    }
                ]
            };

            // tooltip: {
            //     padding: 0,
            //         enterable: true,
            //         transitionDuration: 1,
            //         textStyle: {
            //         color: '#000',
            //             decoration: 'none',
            //     },
            //     formatter: function (params) {
            //         // console.log(params)
            //         var tipHtml = '';
            //         tipHtml = '<div style="height:360px;width:400px;border-radius:5px;background:#fff;box-shadow:0 0 10px 5px #aaa">' +
            //             '    <div style="height:50px;width:100%;border-radius:5px;background:#F8F9F9;border-bottom:1px solid #F0F0F0">' +
            //             '        <span style="line-height:50px;margin-left:18px">' + params.name + '</span>' +
            //             '        <span style="float:right;line-height:50px;margin-right:18px;color:#5396E3;cursor:pointer" onclick="mapTooltipClick(this);">点击查看详情</span>' +
            //             '    </div>' +
            //             '    <div style="height:110px;width:100%;background:#fff">' +
            //             '        <div style="padding-left:18px;padding-top:22px">' +
            //             '            <span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> ' +
            //             '            <span>上传表格数量</span>' +
            //             '            <span style="float:right;margin-right:18px">' + params.data.tipData[0] + '万</span>' +
            //             '        </div>' +
            //             '        <div style="padding-left:18px;padding-top:14px">' +
            //             '            <span style="display:inline-block;margin-right:5px;width:10px;height:10px;background-color:rgba(92,169,235,1)"></span> ' +
            //             '            <span>上传数据条数</span>' +
            //             '            <span style="float:right;margin-right:18px">' + params.data.tipData[1] + '条</span>' +
            //             '        </div>' +
            //             '    </div>' +
            //             '    <div id="tooltipBarId" style="height:200px;width:100%;border-radius:0 0 5px 0;background:#fff"></div>' +
            //             '</div>';
            //         setTimeout(function () {
            //             tooltipCharts(params.name);
            //         }, 10);
            //         return tipHtml;
            //     }
            // };
            //
            //
            // data: [
            //     {
            //         name: '北京',
            //         value: Math.round(Math.random() * 1000),
            //         tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
            //     },
            //     {
            //         name: '山东',
            //         value: Math.round(Math.random() * 1000),
            //         tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
            //     },
            //     {
            //         name: '贵州',
            //         value: Math.round(Math.random() * 1000),
            //         tipData: [Math.round(Math.random() * 1000), Math.round(Math.random() * 1000)]
            //     }
            //
            // ]
            var count = 0;
            var timeTicket = null;
            var dataLength = option.series[0].data.length;
            timeTicket && clearInterval(timeTicket);
            timeTicket = setInterval(function () {
                myChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0,
                });
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: (count) % dataLength
                });
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: (count) % dataLength
                });
                count++;
            }, 3000);

            myChart.on('mouseover', function (params) {
                // console.log(params)
                clearInterval(timeTicket);
                myChart.dispatchAction({
                    type: 'downplay',
                    seriesIndex: 0
                });
                myChart.dispatchAction({
                    type: 'highlight',
                    seriesIndex: 0,
                    dataIndex: params.dataIndex
                });
                myChart.dispatchAction({
                    type: 'showTip',
                    seriesIndex: 0,
                    dataIndex: params.dataIndex,
                });
            });
            myChart.on('mouseout', function (params) {
                timeTicket && clearInterval(timeTicket);
                timeTicket = setInterval(function () {
                    myChart.dispatchAction({
                        type: 'downplay',
                        seriesIndex: 0,
                    });
                    myChart.dispatchAction({
                        type: 'highlight',
                        seriesIndex: 0,
                        dataIndex: (count) % dataLength
                    });
                    myChart.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        dataIndex: (count) % dataLength
                    });
                    count++;
                }, 3000);
            });

            myChart.setOption(option);
        })();

        /*
         * 数据 雷达图
         * */
        (function () {
            var myChart_radar = echarts.init(document.getElementById('radar'));
            var dataBJ = [
                [223, 250, 250, 4, 200, 100, 40],

            ];
            var dataGZ = [
                [256, 200, 200, 4, 159, 59, 40],

            ];
            var dataSH = [
                [256, 200, 200, 4, 120, 88, 40],
            ];
            var dataGY = [
                [256, 200, 200, 4, 99, 94, 40],

            ];
            var areaStyle = {
                normal: {
                    opacity: 0.7
                }
            };
            var lineStyle = {
                normal: {
                    width: 1,
                    opacity: 0.2
                }
            };
            var option_radar = {

                legend: {
                    top: '3.5%',
                    left: '-2%',
                    data: ['国家农业科技展示园', '中粮智慧农场', '东营一期', '贵阳园区'],
                    itemGap: 10,
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 15
                    },
                    orient: 'vertical',
                    // selected:{
                    //     '国家农业科技展示园':false,
                    //     '中粮智慧农场':true,
                    //     '东营一期':false,
                    //     '贵阳园区':false
                    // },
                    selectedMode: 'single'
                },
                tooltip: {
                    trigger: 'item',
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#fff',
                        fontSize: 22
                    }
                },
                itemStyle: {normal: {areaStyle: {type: 'default'}}},
                radar: {
                    indicator: [
                        {name: '用电量', max: 300},
                        {name: '用水量', max: 250},
                        {name: '劳动力数量', max: 300},
                        {name: '库存量', max: 5},
                        {name: '订单量', max: 200},
                        {name: '产量', max: 100}
                    ],
                    shape: 'circle',
                    splitNumber: 5,
                    name: {
                        textStyle: {
                            fontWeight: 'bold',
                            color: '#029972',
                            fontSize: 17
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: [
                                'rgba(255, 255, 255, 0.1)', 'rgba(255, 255, 255, 0.2)',
                                'rgba(255, 255, 255, 0.4)', 'rgba(255, 255, 255, 0.6)',
                                'rgba(255, 255, 255, 0.6)', 'rgba(255, 255, 255, 0.7)',
                                'rgba(255, 255, 255, 0.8)', 'rgba(255, 255, 255, 1)'
                            ].reverse(),
                            width: 2
                        }
                    },
                    // splitArea: {
                    //     areaStyle: {
                    //         color: [
                    //             '#1d493d',
                    //             '#264c38',
                    //             '#31634c',
                    //             '#499272',
                    //             '#56ab8b'],
                    //         shadowColor: 'rgba(0, 0, 0, 0.3)',
                    //         shadowBlur: 10
                    //     }
                    // },
                    splitArea: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.5)',
                            width: 2
                        }
                    }
                },
                series: [{
                    name: '国家农业科技展示园',
                    type: 'radar',
                    lineStyle: lineStyle,
                    data: dataBJ,
                    symbol: 'none',
                    itemStyle: {
                        normal: {
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#02C39A' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#028090' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }
                    },
                    areaStyle: areaStyle,
                },
                    {
                        name: '中粮智慧农场',
                        type: 'radar',
                        lineStyle: lineStyle,
                        data: dataSH,
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#02C39A' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#028090' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        },
                        areaStyle: areaStyle
                    },
                    {
                        name: '东营一期',
                        type: 'radar',
                        lineStyle: lineStyle,
                        data: dataGZ,
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#02C39A' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#028090' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        },
                        areaStyle: areaStyle
                    },
                    {
                        name: '贵阳园区',
                        type: 'radar',
                        lineStyle: lineStyle,
                        data: dataGY,
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#02C39A' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#028090' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                }
                            }
                        },
                        areaStyle: areaStyle
                    }
                ]
            };

            var count = 0;
            var timeTicket = null;
            timeTicket && clearInterval(timeTicket);
            timeTicket = setInterval(function () {
                if(count == 0){
                    myChart_radar.dispatchAction({
                        type: 'legendToggleSelect',
                        name: '国家农业科技展示园',
                    });
                    count = 1;
                    return;
                }else if(count == 1){
                    myChart_radar.dispatchAction({
                        type: 'legendToggleSelect',
                        name: '中粮智慧农场',
                    });
                    count = 2;
                    return;
                }else if(count == 2){

                    myChart_radar.dispatchAction({
                        type: 'legendToggleSelect',
                        name: '东营一期',
                    });
                    count = 3;
                    return;
                }else if(count == 3){
                    myChart_radar.dispatchAction({
                        type: 'legendToggleSelect',
                        name: '贵阳园区',
                    });
                    count = 0;
                    return;
                }
            }, 3000);
            myChart_radar.setOption(option_radar);
        })();

        //暂时表格数据
        $scope.arr3 = [
            {
                time: "2017.06.30",
                area: "国家农业科技展示园",
                detail: "叶菜工厂运行正常",
            },
            {
                time: "2017.06.30",
                area: "东营一期",
                detail: "追溯管理子系统在线",
            },
            {
                time: "2017.06.30",
                area: "东营一期",
                detail: "仓储管理子系统在线",
            },
            {
                time: "2017.06.30",
                area: "中粮智慧农场",
                detail: "劳动力管理子系统在线",
            },
            {
                time: "2017.06.30",
                area: "国家农业科技展示园",
                detail: "生产计划管理子系统在线",
            },
            // {
            //     time: "2017.06.30",
            //     area: "国家农业科技展示园",
            //     detail: "追溯管理子系统在线",
            // },
            // {
            //     time: "2017.06.30",
            //     area: "中粮智慧农场",
            //     detail: "食用菌工厂运行正常",
            // },
            // {
            //     time: "2017.06.30",
            //     area: "东营一期",
            //     detail: "榆黄菇生长模型实验运行正常",
            // },
        ];
        $scope.fn_push_arr = function () {
            var aa = $scope.arr3[0];
            $scope.arr3.splice(0, 1);
            $scope.arr3.push(aa);
            $scope.$apply();
        };
        window.setInterval(function () {
            $scope.fn_push_arr();
        }, 3000);

        // //显示隐藏 中间数据信息
        // $scope.toggle_info_title = 0;
        // $scope.fn_toggle_info_title = function (index) {
        //     var info_common_title = document.getElementById('info_common_title');
        //     var info_common_title_all = info_common_title.getElementsByClassName('info_common_title');
        //     var info_common_title_num = info_common_title.getElementsByClassName('info_common_title')[index];
        //     for (var i = 0, len = info_common_title_all.length; i < len; i++) {
        //         if (!angular.element(info_common_title_all[i]).hasClass('info_common_title_hide')) {
        //             angular.element(info_common_title_all[i]).addClass('info_common_title_hide');
        //         }
        //     }
        //     $scope.toggle_info_title = index;
        //     angular.element(info_common_title_num).removeClass('info_common_title_hide');
        // };
        // $scope.fn_toggle_info_title(0);
        //
        // //显示隐藏 - 左边部分
        // $scope.toggle_info_left = true;
        // $scope.fn_toggle_info_left = function () {
        //     var toggle_info_left_1 = document.getElementById('toggle_info_left_1');
        //     var toggle_info_left_2 = document.getElementById('toggle_info_left_2');
        //     var toggle_info_left_3 = document.getElementById('toggle_info_left_3');
        //     if ($scope.toggle_info_left) {
        //         angular.element(toggle_info_left_1).addClass('toggle_info_dash_hide');
        //         angular.element(toggle_info_left_2).addClass('toggle_info_dash_hide');
        //         angular.element(toggle_info_left_3).addClass('toggle_info_dash_hide');
        //     } else {
        //         angular.element(toggle_info_left_1).removeClass('toggle_info_dash_hide');
        //         angular.element(toggle_info_left_2).removeClass('toggle_info_dash_hide');
        //         angular.element(toggle_info_left_3).removeClass('toggle_info_dash_hide');
        //     }
        //     $scope.toggle_info_left = !$scope.toggle_info_left;
        // };
        // //显示隐藏 用电量
        // $scope.toggle_info_right = true;
        // $scope.fn_toggle_info_right = function () {
        //     var toggle_info_right = document.getElementById('toggle_info_right');
        //     if ($scope.toggle_info_right) {
        //         angular.element(toggle_info_right).addClass('toggle_info_dash_hide');
        //     } else {
        //         angular.element(toggle_info_right).removeClass('toggle_info_dash_hide');
        //     }
        //     $scope.toggle_info_right = !$scope.toggle_info_right;
        // };


    }]);

app.controller('pageListCtrl', ['$scope', function ($scope) {
    $scope.fn_go_page = function (value) {
        switch (value) {
            case 1:
                window.location.href = '#/info';
                break;
            case 2:
                window.location.href = '#/powers';
                break;
            case 3:
                window.location.href = '#/waters';
                break;
            case 4:
                window.location.href = '#/fertilizer';
                break;
            case 5:
                window.location.href = '#/environment';
                break;
            case 6:
                window.location.href = '#/production';
                break;
            case 7:
                window.location.href = '#/orders';
                break;
            case 8:
                window.location.href = '#/qualityTrace';
                break;
            default:
                break;
        }
    }
}]);
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
app.controller('environmentCtrl', ['$scope', '$rootScope', '$http', 'ajax_factoryIndex', '$timeout'
    , function ($scope, $rootScope, $http, ajax_factoryIndex, $timeout) {

        var N_fertilizer_bar = echarts.init(document.getElementById('N_fertilizer_bar'));
        var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
        var base = +new Date();
        var today = new Date();
        var oneDay = 24 * 3600 * 1000;
        var five_min = 5 * 1000;
        var date = [];

        var data1 = [Math.random() * 300];
        var data2 = [Math.random() * 300];
        var data3 = [Math.random() * 300];
        var data4 = [Math.random() * 300];

        for (var i = 1; i < 90; i++) {
            var now = new Date(base -= five_min);
            date.unshift([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

        }

        for (var i = 1; i < 90; i++) {
            data1.unshift(Math.round((Math.random() - 0.5) * 20 + data1[i - 1]));
            data2.unshift(Math.round((Math.random() - 0.5) * 20 + data2[i - 1]));
            data3.unshift(Math.round((Math.random() - 0.5) * 20 + data3[i - 1]));
            data4.unshift(Math.round((Math.random() - 0.5) * 20 + data4[i - 1]));
        }


        var option_N_fertilizer_bar = {
            tooltip: {
                trigger: 'axis',
                // position: function (pt) {
                //     return [pt[0], '10%'];
                // },
                textStyle: {
                    fontWeight: 'normal', //标题颜色
                    color: '#fff',
                    fontSize: windowWidth > 2500 ? 45 : 22
                }
            },
            legend: {
                data: ['温度', '湿度', '光照', 'CO2'],
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: windowWidth > 2500 ? 35 : 17
                }
            },
            grid: {
                top: '8%',
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date,
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    fontSize: windowWidth > 2500 ? 30 : 13
                }
            },
            yAxis: [
                {

                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }
                },
                {

                    nameLocation: 'start',
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }

                }
            ],
            dataZoom: [{
                type: 'inside',
                start: 50,
                end: 100
            }, {
                start: 50,
                end: 100,
                dataBackground: {
                    areaStyle: {
                        color: '#22d8d2'
                    }

                },
                borderColor: 'rgba(255, 255, 255, .001)',
                bottom: '0.5%',
                textStyle: {
                    color: '#32ba87',
                    fontSize: windowWidth > 2500 ? 30 : 15,
                    fontWeight: 'bold'
                },
                fillerColor: '#2b6580',
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: windowWidth > 2500 ? '150%' : '80%',
                handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2
                }
            }],
            series: [
                {
                    name: '温度',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: '#2c88a2'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#45EBA5'
                            }, {
                                offset: 1,
                                color: '#1D566E'
                            }])
                        }
                    },
                    data: data1
                },
                {
                    name: '湿度',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: '#2c88a2'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#45EBA5'
                            }, {
                                offset: 1,
                                color: '#1D566E'
                            }])
                        }
                    },
                    data: data2
                },
                {
                    name: '光照',
                    type: 'line',
                    smooth: true,
                    yAxisIndex: 1,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: '#2c88a2'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#45EBA5'
                            }, {
                                offset: 1,
                                color: '#1D566E'
                            }])
                        }
                    },
                    data: data3
                },
                {
                    name: 'CO2',
                    type: 'line',
                    yAxisIndex: 1,
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: '#2c88a2'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#45EBA5'
                            }, {
                                offset: 1,
                                color: '#1D566E'
                            }])
                        }
                    },
                    data: data4
                }
            ]
        };

        N_fertilizer_bar.setOption(option_N_fertilizer_bar);


        setInterval(function () {
            date.splice(0,1);
            var now = new Date();
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

            data1.splice(0,1);
            data2.splice(0,1);
            data3.splice(0,1);
            data4.splice(0,1);

            data1.push(Math.round((Math.random() - 0.5) * 20 + data1[0]));
            data2.push(Math.round((Math.random() - 0.5) * 20 + data2[0]));
            data3.push(Math.round((Math.random() - 0.5) * 20 + data3[0]));
            data4.push(Math.round((Math.random() - 0.5) * 20 + data4[0]));

            N_fertilizer_bar.setOption(option_N_fertilizer_bar);
        }, 5000);

        /*
         * 下 - 左 - 钾肥柱状图
         * */

        var K_fertilizer_bar = echarts.init(document.getElementById('K_fertilizer_bar'));


        var date_k = [];

        var data1_k = [Math.random() * 300];
        var data2_k = [Math.random() * 300];
        var data3_k = [Math.random() * 300];
        var data4_k = [Math.random() * 300];

        for (var i = 1; i < 30; i++) {
            var now = new Date(base -= five_min);
            date_k.unshift([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

        }

        for (var i = 1; i < 30; i++) {
            data1_k.unshift(Math.round((Math.random() - 0.5) * 20 + data1_k[i - 1]));
            data2_k.unshift(Math.round((Math.random() - 0.5) * 20 + data2_k[i - 1]));
            data3_k.unshift(Math.round((Math.random() - 0.5) * 20 + data3_k[i - 1]));
            data4_k.unshift(Math.round((Math.random() - 0.5) * 20 + data4_k[i - 1]));
        }
        var option_K_fertilizer_bar = {
            color: [
                '#1D566E',
                '#163A5F',
                '#45EBA5',
                '#21ABA5',

            ],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#1D566E'
                    }
                },
                textStyle: {
                    fontWeight: 'normal', //标题颜色
                    color: '#fff',
                    fontSize: windowWidth > 2500 ? 45 : 22
                }
            },
            legend: {
                data: ['温度', '湿度', '光照', 'CO2'],
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: windowWidth > 2500 ? 35 : 17
                }
            },
            grid: {
                top: '8%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: date_k,
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }
                }
            ],
            yAxis: [
                {

                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }
                },
                {

                    nameLocation: 'start',
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }

                }
            ],
            series: [
                {
                    name: '温度',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    yAxisIndex: 1,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data1_k
                },
                {
                    name: '湿度',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data2_k
                },
                {
                    name: '光照',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data3_k
                },
                {
                    name: 'CO2',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data4_k
                }
            ]
        };
        K_fertilizer_bar.setOption(option_K_fertilizer_bar);

        setInterval(function () {
            date_k.splice(0,1);
            var now = new Date();
            date_k.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

            data1_k.splice(0,1);
            data2_k.splice(0,1);
            data3_k.splice(0,1);
            data4_k.splice(0,1);

            data1_k.push(Math.round((Math.random() - 0.5) * 20 + data1_k[0]));
            data2_k.push(Math.round((Math.random() - 0.5) * 20 + data2_k[0]));
            data3_k.push(Math.round((Math.random() - 0.5) * 20 + data3_k[0]));
            data4_k.push(Math.round((Math.random() - 0.5) * 20 + data4_k[0]));

            K_fertilizer_bar.setOption(option_K_fertilizer_bar);
        }, 5000);
        /*
         *下 - 中 - 磷肥柱状图
         * */

        var P_fertilizer_bar = echarts.init(document.getElementById('P_fertilizer_bar'));
        var date_p = [];

        var data1_p = [Math.random() * 300];
        var data2_p = [Math.random() * 300];
        var data3_p = [Math.random() * 300];
        var data4_p = [Math.random() * 300];

        for (var i = 1; i < 30; i++) {
            var now = new Date(base -= five_min);
            date_p.unshift([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

        }

        for (var i = 1; i < 30; i++) {
            data1_p.unshift(Math.round((Math.random() - 0.5) * 20 + data1_p[i - 1]));
            data2_p.unshift(Math.round((Math.random() - 0.5) * 20 + data2_p[i - 1]));
            data3_p.unshift(Math.round((Math.random() - 0.5) * 20 + data3_p[i - 1]));
            data4_p.unshift(Math.round((Math.random() - 0.5) * 20 + data4_p[i - 1]));
        }
        var option_P_fertilizer_bar = {
            color: [
                '#163A5F',
                '#45EBA5',
                '#1D566E',
                '#21ABA5',
            ],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#1D566E'
                    }
                },
                textStyle: {
                    fontWeight: 'normal', //标题颜色
                    color: '#fff',
                    fontSize: windowWidth > 2500 ? 45 : 22
                }
            },
            legend: {
                data: ['温度', '湿度', '光照', 'CO2'],
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: windowWidth > 2500 ? 35 : 17
                }
            },
            grid: {
                top: '8%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: date_p,
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }
                }
            ],
            yAxis: [
                {

                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }
                },
                {

                    nameLocation: 'start',
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }

                }
            ],
            series: [
                {
                    name: '温度',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data1_p
                },
                {
                    name: '湿度',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data2_p
                },
                {
                    name: '光照',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data3_p
                },
                {
                    name: 'CO2',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    areaStyle: {normal: {}},
                    data: data4_p
                }
            ]
        };
        P_fertilizer_bar.setOption(option_P_fertilizer_bar);

        setInterval(function () {
            date_p.splice(0,1);
            var now = new Date();
            date_p.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

            data1_p.splice(0,1);
            data2_p.splice(0,1);
            data3_p.splice(0,1);
            data4_p.splice(0,1);

            data1_p.push(Math.round((Math.random() - 0.5) * 20 + data1_p[0]));
            data2_p.push(Math.round((Math.random() - 0.5) * 20 + data2_p[0]));
            data3_p.push(Math.round((Math.random() - 0.5) * 20 + data3_p[0]));
            data4_p.push(Math.round((Math.random() - 0.5) * 20 + data4_p[0]));

            P_fertilizer_bar.setOption(option_P_fertilizer_bar);
        }, 5000);


        /*
         *下 - 右 - CO2柱状图
         * */

        var CO2_bar = echarts.init(document.getElementById('CO2_bar'));

        var date_CO2 = [];

        var data1_CO2 = [Math.random() * 300];
        var data2_CO2 = [Math.random() * 300];
        var data3_CO2 = [Math.random() * 300];
        var data4_CO2 = [Math.random() * 300];

        for (var i = 1; i < 30; i++) {
            var now = new Date(base -= five_min);
            date_CO2.unshift([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

        }

        for (var i = 1; i < 30; i++) {
            data1_CO2.unshift(Math.round((Math.random() - 0.5) * 20 + data1_CO2[i - 1]));
            data2_CO2.unshift(Math.round((Math.random() - 0.5) * 20 + data2_CO2[i - 1]));
            data3_CO2.unshift(Math.round((Math.random() - 0.5) * 20 + data3_CO2[i - 1]));
            data4_CO2.unshift(Math.round((Math.random() - 0.5) * 20 + data4_CO2[i - 1]));
        }

        var option_CO2_bar = {
            color: [
                '#45EBA5',
                '#21ABA5',
                '#1D566E',
                '#163A5F',
            ],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#1D566E'
                    }
                },
                textStyle: {
                    fontWeight: 'normal', //标题颜色
                    color: '#fff',
                    fontSize: windowWidth > 2500 ? 45 : 22
                }
            },
            legend: {
                data: ['温度', '湿度', '光照', 'CO2'],
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: windowWidth > 2500 ? 35 : 17
                }
            },
            grid: {
                top: '8%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: date_CO2,
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }
                }
            ],
            yAxis: [
                {

                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }
                },
                {

                    nameLocation: 'start',
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }

                }
            ],
            series: [
                {
                    name: '温度',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data1_CO2
                },
                {
                    name: '湿度',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data2_CO2
                },
                {
                    name: '光照',
                    type: 'line',
                    yAxisIndex: 1,
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data3_CO2
                },
                {
                    name: 'CO2',
                    type: 'line',
                    yAxisIndex: 1,
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    areaStyle: {normal: {}},
                    data: data4_CO2
                }
            ]
        };
        CO2_bar.setOption(option_CO2_bar);


        setInterval(function () {
            date_CO2.splice(0,1);
            var now = new Date();
            date_CO2.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

            data1_CO2.splice(0,1);
            data2_CO2.splice(0,1);
            data3_CO2.splice(0,1);
            data4_CO2.splice(0,1);

            data1_CO2.push(Math.round((Math.random() - 0.5) * 20 + data1_CO2[0]));
            data2_CO2.push(Math.round((Math.random() - 0.5) * 20 + data2_CO2[0]));
            data3_CO2.push(Math.round((Math.random() - 0.5) * 20 + data3_CO2[0]));
            data4_CO2.push(Math.round((Math.random() - 0.5) * 20 + data4_CO2[0]));

            CO2_bar.setOption(option_CO2_bar);
        }, 5000);


    }]);

app.controller('fertilizerCtrl', ['$scope', '$http', 'ajax_factoryIndex', '$timeout'
    , function ($scope, $http, ajax_factoryIndex, $timeout) {


        //获取不同电脑屏幕的宽度
        // $scope.fn_fertilizer_getWidth = function () {
        //     //获取echart 外层div的id
        //     var N_fertilizer_bar_wrapper = document.getElementById('N_fertilizer_bar_wrapper'),
        //         K_fertilizer_bar_wrapper = document.getElementById('K_fertilizer_bar_wrapper'),
        //         P_fertilizer_bar_wrapper = document.getElementById('P_fertilizer_bar_wrapper'),
        //         CO2_bar_wrapper = document.getElementById('CO2_bar_wrapper');
        //
        //     //获取echart 的div id
        //     var N_fertilizer_bar = document.getElementById('N_fertilizer_bar'),
        //         K_fertilizer_bar = document.getElementById('K_fertilizer_bar'),
        //         P_fertilizer_bar = document.getElementById('P_fertilizer_bar'),
        //         CO2_bar = document.getElementById('CO2_bar');
        //     //获取 网页自动撑高的可见区域高度 ，高度要写兼容、加单位
        //     var windowHeight = window.document.body.clientHeight || window.document.documentElement.clientHeight;
        //     var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
        //     //var oWidth = (windowWidth - 30) / 3 ;
        //     //公共 工具栏 获取屏幕宽度  减去  左侧菜单栏 的宽度，就可以得到 不同屏幕的可变宽度进行赋值
        //
        //
        //     if (windowWidth > 1600) {
        //         if (N_fertilizer_bar_wrapper) N_fertilizer_bar_wrapper.style.height = 595 + 'px';
        //         if (K_fertilizer_bar_wrapper) K_fertilizer_bar_wrapper.style.height = 595 + 'px';
        //         if (P_fertilizer_bar_wrapper) P_fertilizer_bar_wrapper.style.height = 595 + 'px';
        //         if (CO2_bar_wrapper) CO2_bar_wrapper.style.height = 595 + 'px';
        //
        //
        //     }
        //     else {
        //         if (N_fertilizer_bar_wrapper) {
        //             N_fertilizer_bar_wrapper.style.height = 495 + 'px';
        //             N_fertilizer_bar_wrapper.style.top = 68 + 'px';
        //         }
        //         if (K_fertilizer_bar_wrapper) {
        //             K_fertilizer_bar_wrapper.style.height = 495 + 'px';
        //             K_fertilizer_bar_wrapper.style.top = 595 + 'px';
        //         }
        //         if (P_fertilizer_bar_wrapper) {
        //             P_fertilizer_bar_wrapper.style.height = 495 + 'px';
        //             P_fertilizer_bar_wrapper.style.top = 68 + 'px';
        //
        //         }
        //         if (CO2_bar_wrapper) {
        //             CO2_bar_wrapper.style.height = 495 + 'px';
        //             CO2_bar_wrapper.style.top = 595 + 'px';
        //
        //         }
        //         if (N_fertilizer_bar) {
        //             N_fertilizer_bar.style.height = 420 + 'px';
        //             N_fertilizer_bar.style.top = 10 + 'px';
        //             N_fertilizer_bar.style.width = 830 + 'px';
        //             N_fertilizer_bar.style.position = 'relative';
        //
        //         }
        //         if (K_fertilizer_bar) {
        //             K_fertilizer_bar.style.height = 420 + 'px';
        //             K_fertilizer_bar.style.width = 830 + 'px';
        //             K_fertilizer_bar.style.top = 10 + 'px';
        //             K_fertilizer_bar.style.position = 'relative';
        //
        //         }
        //         if (P_fertilizer_bar) {
        //             P_fertilizer_bar.style.width = 830 + 'px';
        //             P_fertilizer_bar.style.height = 420 + 'px';
        //             P_fertilizer_bar.style.top = 10 + 'px';
        //             P_fertilizer_bar.style.position = 'relative';
        //
        //         }
        //         if (CO2_bar) {
        //             CO2_bar.style.width = 830 + 'px';
        //             CO2_bar.style.height = 420 + 'px';
        //             CO2_bar.style.top = 10 + 'px';
        //             CO2_bar.style.position = 'relative';
        //         }
        //
        //
        //
        //     }
        //
        //
        // };
        // $scope.fn_fertilizer_getWidth();
        /*
         左上 - 氮肥柱状图
         * */
        (function () {
            var N_fertilizer_bar = echarts.init(document.getElementById('N_fertilizer_bar'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;

            var option_N_fertilizer_bar = {
                // color:[
                //     '#ff715e',
                //     '#ffaf51',
                //     '#59e78b',
                //     '#ffee51',
                //     '#71e8e0',
                //     '#5191e9'
                // ],
                color: [
                    '#f8b195',
                    '#ff7388',
                    '#ffbec3',
                    '#7d42d0',
                    '#d78ff9',
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#fff',
                        fontSize: windowWidth > 2500?45:22
                    }
                },
                legend: {
                    data: ['国家农业科技展示园', '中粮智慧农场', '东营园区', '贵州园区', '氮肥总量'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: windowWidth > 2500?35:13
                    }
                },
                grid: {
                    top: '8%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        axisLabel:{
                            fontSize:windowWidth > 2500?30:13
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        axisLabel:{
                            fontSize:windowWidth > 2500?30:13
                        }
                    }
                ],
                series: [
                    {
                        name: '国家农业科技展示园',
                        type: 'bar',
                        data: [320, 332, 301, 334, 390, 330, 332, 301, 334, 390, 330, 400],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                                // color: new echarts.graphic.LinearGradient(
                                //     0, 0, 0, 1,
                                //     [
                                //         {offset: 0, color: '#14c8d4'},
                                //         {offset: 1, color: '#43eec6'}
                                //     ]
                                // )
                            }
                        }
                    },
                    {
                        name: '中粮智慧农场',
                        type: 'bar',
                        // stack: '天然气用量',
                        data: [120, 132, 101, 134, 90, 230, 120, 132, 101, 134, 90, 230],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10
                            }
                        }
                    },
                    {
                        name: '东营园区',
                        type: 'bar',
                        // stack: '天然气用量',
                        data: [220, 182, 191, 234, 290, 330, 120, 132, 101, 134, 90, 230],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                            }
                        }
                    },
                    {
                        name: '贵州园区',
                        type: 'bar',
                        data: [362, 418, 564, 626, 779, 800, 120, 132, 101, 134, 90, 230],
                        markLine: {
                            lineStyle: {
                                normal: {
                                    type: 'dashed'
                                }
                            },
                            data: [
                                [{type: 'min'}, {type: 'max'}]
                            ]
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                            }
                        }
                    },
                    {
                        name: '氮肥总量',
                        type: 'line',
                        data: [362, 418, 564, 626, 779, 800, 120, 132, 101, 134, 90, 230],
                        markLine: {
                            lineStyle: {
                                normal: {
                                    type: 'dashed'
                                }
                            },
                            data: [
                                [{type: 'min'}, {type: 'max'}]
                            ]
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                            }
                        }
                    },

                ]
            };
            N_fertilizer_bar.setOption(option_N_fertilizer_bar);
        })();

        /*
         * 左下 - 钾肥柱状图
         * */
        (function () {
            var K_fertilizer_bar = echarts.init(document.getElementById('K_fertilizer_bar'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
            var option_K_fertilizer_bar = {
                // color:[
                //     '#ff715e',
                //     '#ffaf51',
                //     '#59e78b',
                //     '#ffee51',
                //     '#71e8e0',
                //     '#5191e9'
                // ],
                color: [
                    '#f8b195',
                    '#ff7388',
                    '#ffbec3',
                    '#7d42d0',
                    '#d78ff9',
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#fff',
                        fontSize: windowWidth > 2500?30:22
                    }
                },
                legend: {
                    data: ['国家农业科技展示园', '中粮智慧农场', '东营园区', '贵州园区', '氮肥总量'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize:windowWidth > 1600?17:13
                    }
                },
                grid: {
                    top: '8%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '国家农业科技展示园',
                        type: 'bar',
                        data: [568, 235, 567, 254, 587, 214, 207, 685, 605, 358, 524, 400],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                                // color: new echarts.graphic.LinearGradient(
                                //     0, 0, 0, 1,
                                //     [
                                //         {offset: 0, color: '#14c8d4'},
                                //         {offset: 1, color: '#43eec6'}
                                //     ]
                                // )
                            }
                        }
                    },
                    {
                        name: '中粮智慧农场',
                        type: 'bar',
                        stack: '天然气用量',
                        data: [587, 954, 254, 368, 874, 568, 574, 205, 658, 458, 255, 366],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10
                            }
                        }
                    },
                    {
                        name: '东营园区',
                        type: 'bar',
                        stack: '天然气用量',
                        data: [220, 182, 191, 234, 290, 330, 120, 132, 101, 134, 90, 230],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                            }
                        }
                    },
                    {
                        name: '贵州园区',
                        type: 'bar',
                        data: [362, 418, 564, 626, 779, 800, 120, 132, 101, 134, 90, 230],
                        markLine: {
                            lineStyle: {
                                normal: {
                                    type: 'dashed'
                                }
                            },
                            data: [
                                [{type: 'min'}, {type: 'max'}]
                            ]
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                            }
                        }
                    },
                    {
                        name: '氮肥总量',
                        type: 'line',
                        data: [362, 418, 564, 626, 779, 800, 120, 132, 101, 134, 90, 230],
                        markLine: {
                            lineStyle: {
                                normal: {
                                    type: 'dashed'
                                }
                            },
                            data: [
                                [{type: 'min'}, {type: 'max'}]
                            ]
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                            }
                        }
                    },

                ]
            };
            K_fertilizer_bar.setOption(option_K_fertilizer_bar);
        })();


        /*
         右上 - 磷肥柱状图
         * */
        (function () {
            var P_fertilizer_bar = echarts.init(document.getElementById('P_fertilizer_bar'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
            var option_P_fertilizer_bar = {
                // color:[
                //     '#ff715e',
                //     '#ffaf51',
                //     '#59e78b',
                //     '#ffee51',
                //     '#71e8e0',
                //     '#5191e9'
                // ],
                color: [
                    '#f8b195',
                    '#ff7388',
                    '#ffbec3',
                    '#7d42d0',
                    '#d78ff9',
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#fff',
                        fontSize: 22
                    }
                },
                legend: {
                    data: ['国家农业科技展示园', '中粮智慧农场', '东营园区', '贵州园区', '氮肥总量'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: windowWidth > 1600?17:13
                    }
                },
                grid: {
                    top: '8%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                series: [
                    {
                        name: '国家农业科技展示园',
                        type: 'bar',
                        data: [320, 332, 301, 334, 390, 330, 332, 301, 334, 390, 330, 400],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                                // color: new echarts.graphic.LinearGradient(
                                //     0, 0, 0, 1,
                                //     [
                                //         {offset: 0, color: '#14c8d4'},
                                //         {offset: 1, color: '#43eec6'}
                                //     ]
                                // )
                            }
                        }
                    },
                    {
                        name: '中粮智慧农场',
                        type: 'bar',
                        stack: '天然气用量',
                        data: [120, 132, 101, 134, 90, 230, 120, 132, 101, 134, 90, 230],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10
                            }
                        }
                    },
                    {
                        name: '东营园区',
                        type: 'bar',
                        stack: '天然气用量',
                        data: [220, 182, 191, 234, 290, 330, 120, 132, 101, 134, 90, 230],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                            }
                        }
                    },
                    {
                        name: '贵州园区',
                        type: 'bar',
                        data: [362, 418, 564, 626, 779, 800, 866, 879, 685, 898, 922, 230],
                        markLine: {
                            lineStyle: {
                                normal: {
                                    type: 'dashed'
                                }
                            },
                            data: [
                                [{type: 'min'}, {type: 'max'}]
                            ]
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                            }
                        }
                    },
                    {
                        name: '氮肥总量',
                        type: 'line',
                        data: [362, 418, 564, 626, 779, 800, 120, 132, 101, 134, 90, 230],
                        markLine: {
                            lineStyle: {
                                normal: {
                                    type: 'dashed'
                                }
                            },
                            data: [
                                [{type: 'min'}, {type: 'max'}]
                            ]
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                            }
                        }
                    },

                ]
            };
            P_fertilizer_bar.setOption(option_P_fertilizer_bar);
        })();

        /*
         右下 - CO2柱状图
         * */
        (function () {
            var CO2_bar = echarts.init(document.getElementById('CO2_bar'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;

            var option_CO2_bar = {
                color: [
                    '#f8b195',
                    '#ff7388',
                    '#ffbec3',
                    '#7d42d0',
                    '#d78ff9',
                ],
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {
                //         type: 'shadow'
                //     },
                //     textStyle: {
                //         fontWeight: 'normal', //标题颜色
                //         color: '#fff',
                //         fontSize: 22
                //     }
                // },
                // legend: {
                //     data: ['国家农业科技展示园', '中粮智慧农场', '东营园区', '贵阳园区'],
                //     textStyle: {
                //         color: '#fff',
                //         fontWeight: 'bold',
                //         fontSize: 13
                //     }
                // },
                // grid: {
                //     top: '8%',
                //     left: '3%',
                //     right: '4%',
                //     bottom: '3%',
                //     containLabel: true
                // },
                // xAxis: {
                //     type: 'value',
                //     boundaryGap: [0, 0.01],
                //     axisLine: {
                //         lineStyle: {
                //             color: '#fff'
                //         }
                //     }
                // },
                // yAxis: {
                //     type: 'category',
                //     data: ['一月','二月','三月','四月','五月','六月'],
                //     axisLine: {
                //         lineStyle: {
                //             color: '#fff'
                //         }
                //     }
                // },
                // series: [
                //     {
                //         name: '国家农业科技展示园',
                //         type: 'bar',
                //         data: [8203, 35489, 45879, 114970, 91744, 30230],
                //         itemStyle: {
                //             normal: {
                //                 barBorderRadius: 10
                //             }
                //         }
                //     },
                //     {
                //         name: '中粮智慧农场',
                //         type: 'bar',
                //         data: [9325, 34538, 69852, 21594, 34141, 81807],
                //         itemStyle: {
                //             normal: {
                //                 barBorderRadius: 10
                //             }
                //         }
                //     },
                //     {
                //         name: '东营园区',
                //         type: 'bar',
                //         data: [88325, 58438, 50000, 121594, 54141, 61807],
                //         itemStyle: {
                //             normal: {
                //                 barBorderRadius: 10
                //             }
                //         }
                //     },
                //     {
                //         name: '贵阳园区',
                //         type: 'bar',
                //         data: [93425, 88438,60000, 90000, 52141, 71807],
                //         itemStyle: {
                //             normal: {
                //                 barBorderRadius: 10
                //             }
                //         }
                //     }
                // ]


                tooltip: {
                    // confine:'true',
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#ffffff',
                        fontSize: 12
                    }
                },
                legend: {
                    // x: 20,
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: windowWidth > 1600?17:13
                    },
                    data: ['国家农业科技展示园总CO2', '中粮智慧农场总CO2', '东营总CO2', '贵阳总CO2']
                    // ,
                    // data: ['国家农业科技展示园总CO2', '中粮智慧农场总CO2', '东营总CO2','贵阳总CO2',
                    //     '国家农业科技展示园外购CO2', '国家农业科技展示园食用菌回用CO2', '中粮智慧农场外购CO2','中粮智慧农场食用菌回用CO2',
                    //     '东营外购CO2', '东营食用菌回用CO2', '贵阳外购CO2','贵阳食用菌回用CO2']
                },
                grid: {
                    left: '3%',
                    right: '35%',
                    top: '8%',
                    bottom: '3%',
                    containLabel: true

                },
                toolbox: {
                    "show": false,
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    data: ['一月', '二月', '三月', '四月', '五月', '六月']
                },
                yAxis: {
                    "axisLine": {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    "axisTick": {
                        "show": false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#fff'
                        }
                    },
                    type: 'value'
                },
                series: [{
                    name: '国家农业科技展示园总CO2',
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: [900, 500, 390, 500, 1200, 820]
                }, {
                    name: '中粮智慧农场总CO2',
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: [700, 500, 500, 870, 900, 800]
                }, {
                    name: '东营总CO2',
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: [2900, 2000, 2000, 1320, 1500, 2000]
                }, {
                    name: '贵阳总CO2',
                    smooth: true,
                    type: 'line',
                    symbolSize: 8,
                    symbol: 'circle',
                    data: [3300, 1000, 2005, 1320, 1900, 2600]
                },
                    {
                        name: '国家农业科技展示园外购CO2',
                        stack: '1',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                            }
                        },
                        data: [3300, 1000, 2050, 1320, 1900, 2600]
                    },
                    {
                        name: '国家农业科技展示园食用菌回用CO2',
                        stack: '1',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                            }
                        },
                        data: [3300, 1000, 2050, 1320, 1700, 2600]
                    },
                    {
                        name: '中粮智慧农场外购CO2',
                        stack: '2',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                            }
                        },
                        data: [3300, 1000, 2050, 1320, 1300, 2600]
                    },
                    {
                        name: '中粮智慧农场食用菌回用CO2',
                        stack: '2',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                            }
                        },
                        data: [3300, 1000, 2050, 1320, 1900, 2600]
                    },
                    {
                        name: '东营外购CO2',
                        stack: '3',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                            }
                        },
                        data: [3300, 1000, 2050, 1320, 1500, 2600]
                    },
                    {
                        name: '东营食用菌回用CO2',
                        stack: '3',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                            }
                        },
                        data: [3300, 1000, 2050, 1320, 1600, 2600]
                    },
                    {
                        name: '贵阳外购CO2',
                        stack: '4',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                            }
                        },
                        data: [3300, 1000, 2050, 1320, 1800, 2600]
                    },
                    {
                        name: '贵阳食用菌回用CO2',
                        stack: '4',
                        type: 'bar',
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                            }
                        },
                        data: [330, 100, 205, 132, 19, 260]
                    },
                    {
                        type: 'pie',
                        center: ['83%', '28%'],
                        radius: ['25%', '40%'],
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        data: [{
                            value: 335,
                            name: 'CO2总量',
                            itemStyle: {
                                normal: {
                                    color: '#ff7388'
                                }
                            },
                            label: {
                                normal: {
                                    formatter: '{d} %',
                                    textStyle: {
                                        color: '#ff7388',
                                        fontSize: 20

                                    }
                                }
                            }
                        }, {
                            value: 180,
                            name: '外购CO2',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: '#f8b195'
                                }
                            },
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#ff7388',
                                        fontSize:18,
                                        fontWeight:'bold'
                                    },
                                    formatter: '\n外购CO2'
                                }
                            }
                        }]
                    },


                    {
                        type: 'pie',
                        center: ['83%', '75%'],
                        radius: ['25%', '40%'],
                        label: {
                            normal: {
                                position: 'center'
                            }
                        },
                        data: [{
                            value: 435,
                            name: 'CO2总量',
                            itemStyle: {
                                normal: {
                                    color: '#ff7388'
                                }
                            },
                            label: {
                                normal: {
                                    formatter: '{d} %',
                                    textStyle: {
                                        color: '#ff7388',
                                        fontSize: 20

                                    }
                                }
                            }
                        }, {
                            value: 100,
                            name: '食用菌回用CO2',
                            tooltip: {
                                show: false
                            },
                            itemStyle: {
                                normal: {
                                    color: '#f8b195'


                                }
                            },
                            label: {
                                normal: {
                                    textStyle: {
                                        color: '#ff7388',
                                        fontSize:15,
                                        fontWeight:'bold'
                                    },
                                    formatter: '\n食用菌回用CO2'
                                }
                            }
                        }]
                    }]
            };
            CO2_bar.setOption(option_CO2_bar);
        })();


    }]);

app.controller('ordersCtrl', ['$scope', '$http', 'ajax_factoryIndex', '$timeout'
    , function ($scope, $http, ajax_factoryIndex, $timeout) {


        //获取菜单选中样式
        // $scope.fn_common_reload_style();

        /*
         js 获取 屏幕宽度 分三等分
         * */
        //获取不同电脑屏幕的宽度
        // $scope.fn_order_getWidth = function () {
        //     var order_top = document.getElementById('order_top');
        //     var order_bottom = document.getElementById('order_bottom');
        //     var product_curve = document.getElementById('product_curve');
        //     var labour_curve = document.getElementById('labour_curve');
        //     //获取 网页自动撑高的可见区域高度 ，高度要写兼容、加单位
        //     //var oHeight = window.document.body.clientHeight || window.document.documentElement.clientHeight;
        //     var _oWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
        //     var oWidth = (_oWidth - 30) / 3;
        //     //公共 工具栏 获取屏幕宽度  减去  左侧菜单栏 的宽度，就可以得到 不同屏幕的可变宽度进行赋值
        //     if (order_top) order_top.style.width = oWidth - 30 + 'px';
        //     if (order_bottom) order_bottom.style.width = oWidth - 30 + 'px';
        //     if (product_curve) product_curve.style.width = oWidth + 'px';
        //     if (labour_curve) labour_curve.style.width = oWidth + 'px';
        // };
        // $scope.fn_order_getWidth();
        /*
         左上角 - 图表
         * */
        (function () {
            var myChart_product_curve = echarts.init(document.getElementById('product_curve'));
            var xData = function () {
                var data = [];
                for (var i = 1; i < 13; i++) {
                    data.push(i + "月");
                }
                return data;
            }();
            option_product_curve = {
                color: [
                    '#429ffd',
                    '#35c2bd',
                    '#0991ff',
                    '#3379e4',
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#fff',
                        fontSize: 22
                    }
                },
                legend: {
                    data: ['播种期', '育苗期', '定苗期', '生长期', '连续结果期', '订单数'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 17
                    }
                },
                grid: {
                    top: '8%',
                    left: '3%',
                    right: '4%',
                    bottom: '8%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: xData,
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 50
                }, {
                    start: 0,
                    end: 50,
                    dataBackground: {
                        areaStyle: {
                            color: '#429ffd'
                        }

                    },
                    borderColor: 'rgba(255, 255, 255, .001)',
                    bottom: '0.5%',
                    textStyle: {
                        color: '#429ffd',
                        fontSize: 15,
                        fontWeight: 'bold'
                    },
                    fillerColor: '#429ffd',
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
                series: [

                    {
                        name: "播种期",
                        type: "bar",
                        stack: "总量",
                        barMaxWidth: 35,
                        barGap: "10%",
                        itemStyle: {
                            normal: {
                                color: "",
                                label: {
                                    show: true,
                                    textStyle: {
                                        color: "#fff"
                                    },
                                    position: "inside",
                                    formatter: function (p) {
                                        return p.value > 0 ? (p.value) : '';
                                    }
                                }
                            }
                        },
                        data: [
                            709,
                            1217,
                            855,
                            2610,
                            1719,
                            1433,
                            1544,
                            3285,
                            2208,
                            1000,
                            2484,
                            1078
                        ],
                    },
                    {
                        name: "育苗期",
                        type: "bar",
                        stack: "总量",
                        itemStyle: {
                            normal: {
                                color: "",
                                barBorderRadius: 0,
                                label: {
                                    show: true,
                                    position: "inside",
                                    formatter: function (p) {
                                        return p.value > 0 ? (p.value) : '';
                                    }
                                }
                            }
                        },
                        data: [
                            327,
                            1776,
                            507,
                            1200,
                            800,
                            482,
                            314,
                            1390,
                            1001,
                            951,
                            381,
                            220
                        ]
                    },
                    {
                        name: "定苗期",
                        type: "bar",
                        stack: "总量",
                        itemStyle: {
                            normal: {
                                color: "",
                                barBorderRadius: 0,
                                label: {
                                    show: true,
                                    position: "inside",
                                    formatter: function (p) {
                                        return p.value > 0 ? (p.value) : '';
                                    }
                                }
                            }
                        },
                        data: [
                            400,
                            1776,
                            507,
                            1200,
                            800,
                            482,
                            610,
                            1390,
                            1001,
                            951,
                            381,
                            220
                        ]
                    },
                    {
                        name: "生长期",
                        type: "bar",
                        stack: "总量",
                        itemStyle: {
                            normal: {
                                color: "",
                                barBorderRadius: 0,
                                label: {
                                    show: true,
                                    position: "inside",
                                    formatter: function (p) {
                                        return p.value > 0 ? (p.value) : '';
                                    }
                                }
                            }
                        },
                        data: [
                            327,
                            1776,
                            507,
                            1200,
                            800,
                            482,
                            704,
                            1390,
                            1001,
                            951,
                            381,
                            220
                        ]
                    },
                    {
                        name: "连续结果期",
                        type: "bar",
                        stack: "总量",
                        itemStyle: {
                            normal: {
                                color: "",
                                barBorderRadius: 0,
                                label: {
                                    show: true,
                                    position: "inside",
                                    formatter: function (p) {
                                        return p.value > 0 ? (p.value) : '';
                                    }
                                }
                            }
                        },
                        data: [
                            327,
                            1776,
                            507,
                            1200,
                            800,
                            482,
                            504,
                            1390,
                            1001,
                            951,
                            381,
                            220
                        ]
                    },
                    {
                        name: "订单数",
                        type: "line",
                        stack: "总量",
                        symbolSize: 10,
                        symbol: 'circle',
                        itemStyle: {
                            normal: {
                                color: "",
                                barBorderRadius: 0,
                                label: {
                                    show: true,
                                    position: "top",
                                    formatter: function (p) {
                                        return p.value > 0 ? (p.value) : '';
                                    }
                                }
                            }
                        },
                        data: [
                            2090,
                            7104,
                            2883,
                            7410,
                            5319,
                            3401,
                            3676,
                            5560,
                            6212,
                            4804,
                            2865,
                            4298
                        ]
                    }

                ]
            };
            myChart_product_curve.setOption(option_product_curve);
        })();

        $scope.purch_arr = [
            {
                orderNo: "4357",
                orderType: "黄瓜",
                plantStatus: "未排产",
                orderGood: "种子100袋",
                goodArrTime: "2017.06.22"
            },
            {
                orderNo: "4357",
                orderType: "黄瓜",
                plantStatus: "未排产",
                orderGood: "化肥100袋",
                goodArrTime: "2017.06.30"
            },
            {
                orderNo: "4354",
                orderType: "番茄",
                plantStatus: "2017.05.14",
                orderGood: "岩棉100块",
                goodArrTime: "2017.06.29"
            },
            {
                orderNo: "4353",
                orderType: "生菜",
                plantStatus: "2017.05.12",
                orderGood: "培养架10条",
                goodArrTime: "2017.06.24"
            },
            {
                orderNo: "4353",
                orderType: "生菜",
                plantStatus: "2017.06.12",
                orderGood: "母液A10个单位",
                goodArrTime: "2017.06.24"
            },
            // {
            //     orderNo: "4352",
            //     orderType: "番茄",
            //     plantStatus: "2017.05.18",
            //     orderGood: "种子100袋",
            //     goodArrTime: "2017.06.23"
            // },
            // {
            //     orderNo: "4351",
            //     orderType: "黄瓜",
            //     plantStatus: "2017.05.20",
            //     orderGood: "种子100袋",
            //     goodArrTime: "2017.06.25"
            // },
            // {
            //     orderNo: "4351",
            //     orderType: "黄瓜",
            //     plantStatus: "2017.05.20",
            //     orderGood: "化肥100袋",
            //     goodArrTime: "2017.06.25"
            // },
        ];
        $scope.labour_arr = [
            {
                labourNo: "000001",
                labourName: "张小平",
                labourContent: "育苗床消毒",
                labourTime: "2017.06.29",
                labourArea: "一区1005",
                labourScore: "8分"
            },

            {
                labourNo: "000004",
                labourName: "郑企志",
                labourContent: "定值条灌营养液",
                labourTime: "2017.06.29",
                labourArea: "三区3019",
                labourScore: "9分"
            },
            {
                labourNo: "000013",
                labourName: "叶振宇",
                labourContent: "打叶，落秧",
                labourTime: "2017.06.29",
                labourArea: "一区1015",
                labourScore: "7分"
            },
            {
                labourNo: "000007",
                labourName: "朱溶月",
                labourContent: "摘黄叶",
                labourTime: "2017.06.28",
                labourArea: "二区2001",
                labourScore: "8.5分"
            },
            {
                labourNo: "000003",
                labourName: "唐玄",
                labourContent: "病虫害防治",
                labourTime: "2017.06.28",
                labourArea: "二区2007",
                labourScore: "10分"
            },
            {
                labourNo: "000011",
                labourName: "蒋兆聪",
                labourContent: "筛选壮苗",
                labourTime: "2017.06.28",
                labourArea: "三区3013",
                labourScore: "9分"
            },
            {
                labourNo: "000021",
                labourName: "史伟",
                labourContent: "种子催芽处理",
                labourTime: "2017.06.28",
                labourArea: "一区1005",
                labourScore: "7分"
            },
            // {
            //     labourNo: "000018",
            //     labourName: "汤博文",
            //     labourContent: "植株调控",
            //     labourTime: "2017.06.28",
            //     labourArea: "三区3010",
            //     labourScore: "8分"
            // },
            // {
            //     labourNo: "000002",
            //     labourName: "钱天",
            //     labourContent: "水肥管理",
            //     labourTime: "2017.06.28",
            //     labourArea: "二区2007",
            //     labourScore: "9.5分"
            // },
            // {
            //     labourNo: "000031",
            //     labourName: "石一",
            //     labourContent: "种子催芽处理",
            //     labourTime: "2017.06.28",
            //     labourArea: "三区3005",
            //     labourScore: "10分"
            // },
            // {
            //     labourNo: "000029",
            //     labourName: "贺泽",
            //     labourContent: "按定值密度割孔",
            //     labourTime: "2017.06.27",
            //     labourArea: "一区1020",
            //     labourScore: "7分"
            // },
            // {
            //     labourNo: "000043",
            //     labourName: "段辰沐",
            //     labourContent: "授粉",
            //     labourTime: "2017.06.27",
            //     labourArea: "一区1019",
            //     labourScore: "7.5分"
            // },
        ];
        $scope.product_arr1 = [
            // {
            //     orderNo: "4357",
            //     orderType: "黄瓜",
            //     plantTime: "2017.03.14",
            //     seedingTime: "2017.03.04-2017.03.22",
            //     plantArea: "三区3001"
            // },
            // {
            //     orderNo: "4356",
            //     orderType: "番茄",
            //     plantTime: "2017.03.14",
            //     seedingTime: "2017.03.05-2017.03.20",
            //     plantArea: "一区1002"
            // },
            // {
            //     orderNo: "4355",
            //     orderType: "黄瓜",
            //     plantTime: "2017.03.14",
            //     seedingTime: "2017.03.02-2017.03.18",
            //     plantArea: "三区3015"
            // },
            {
                orderNo: "4354",
                orderType: "黄瓜",
                plantTime: "2017.03.14",
                seedingTime: "2017.03.01-2017.03.19",
                plantArea: "三区3008"
            },
            {
                orderNo: "4353",
                orderType: "番茄",
                plantTime: "2017.03.14",
                seedingTime: "2017.03.10-2017.03.25",
                plantArea: "一区1006"
            },
            {
                orderNo: "4352",
                orderType: "番茄",
                plantTime: "2017.03.14",
                seedingTime: "2017.03.02-2017.03.18",
                plantArea: "一区1018"
            },
            {
                orderNo: "4351",
                orderType: "番茄",
                plantTime: "2017.03.14",
                seedingTime: "2017.03.01-2017.03.17",
                plantArea: "一区1001"
            },
            {
                orderNo: "4350",
                orderType: "番茄",
                plantTime: "2017.03.14",
                seedingTime: "2017.03.06-2017.03.27",
                plantArea: "一区1015"
            },
        ];

        /*
         * 右上角  -  图表 劳动力
         * */
        (function () {
            var myChart = echarts.init(document.getElementById('labour_curve'));
            var timeData = ['2017.05.01', '2017.05.02', '2017.05.03', '2017.05.04', '2017.05.05', '2017.05.06', '2017.05.07', '2017.05.08',
                '2017.05.09', '2017.05.10', '2017.05.11', '2017.05.12', '2017.05.13', '2017.05.14', '2017.05.15', '2017.05.16',
                '2017.05.17', '2017.05.18', '2017.05.19', '2017.05.20', '2017.05.21', '2017.05.22', '2017.05.23', '2017.05.24',
                '2017.05.25', '2017.05.26', '2017.05.27', '2017.05.28', '2017.05.29', '2017.05.30', '2017.05.31'
            ];


            option = {
                color: [
                    '#429ffd',
                    '#35c2bd',
                    '#0991ff',
                    '#3379e4',
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#fff',
                        fontSize: 22
                    }
                },
                legend: {
                    data: ['计划用工', '实际用工', '满负荷'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 17
                    }
                },
                axisPointer: {
                    link: {
                        xAxisIndex: 'all'
                    }
                },
                grid: {
                    top: '8%',
                    left: '3%',
                    right: '4%',
                    bottom: '8%',
                    containLabel: true
                },
                xAxis: [
                    {
                        // name: '日期',
                        type: 'category',
                        data: timeData,
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        name: '单位:(小时)',
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 30
                }, {
                    start: 0,
                    end: 30,
                    dataBackground: {
                        areaStyle: {
                            color: '#429ffd'
                        }

                    },
                    borderColor: 'rgba(255, 255, 255, .001)',
                    bottom: '0.5%',
                    textStyle: {
                        color: '#429ffd',
                        fontSize: 15,
                        fontWeight: 'bold'
                    },
                    fillerColor: '#429ffd',
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
                series: [

                    {
                        name: '满负荷',
                        type: 'line',
                        smooth: true,
                        showSymbol: false,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "",
                            }
                        },
                        data: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 400, 400, 400, 400, 400, 500, 500, 500, 500, 500, 500, 300, 500, 500, 500, 500, 500, 500, 600, 600, 600]
                    },
                    {
                        name: '计划用工',
                        type: 'line',
                        smooth: true,
                        lineStyle: {
                            normal: {
                                width: 1
                            }
                        },
                        markPoint: {
                            data: [{
                                type: 'max',
                                name: '最大值',
                            }, {
                                type: 'min',
                                name: '最大值'
                            }]
                        },
                        itemStyle: {
                            normal: {
                                color: ""
                            }
                        },
                        data: [213, 232, 246, 252, 200, 280, 320, 310, 350, 340, 340, 350, 360, 410, 420, 420, 430, 440, 420, 430, 420, 400, 410, 450, 490, 480, 500, 520, 530, 510, 516]
                    },
                    {
                        name: "实际用工",
                        type: "bar",
                        barMaxWidth: 19,
                        itemStyle: {
                            normal: {
                                color: "",
                                label: {
                                    show: true,
                                    textStyle: {
                                        "color": "#fff"
                                    },
                                    position: "top",
                                    formatter: function (p) {
                                        return p.value > 0 ? (p.value) : '';
                                    }
                                }
                            }
                        },
                        "data": [213, 232, 246, 252, 200, 280, 290, 300, 300, 300, 350, 360, 340, 390, 400, 410, 412, 432, 400, 420, 420, 290, 435, 445, 465, 420, 470, 500, 436, 498, 506]
                    }
                ]
            };
            myChart.setOption(option);
        })();

    }]);

app.controller('powerCtrl', ['$scope', '$http', 'ajax_factoryIndex', '$timeout'
    , function ($scope, $http, ajax_factoryIndex, $timeout) {

        // $scope.labour_arr = [
        //     {
        //         labourNo: "000001",
        //         labourName: "张小平",
        //         labourContent: "育苗床消毒",
        //         labourTime: "2017.06.29",
        //         labourArea: "一区1005",
        //         labourScore: "8分"
        //     },
        //
        //     {
        //         labourNo: "000004",
        //         labourName: "郑企志",
        //         labourContent: "定值条灌营养液",
        //         labourTime: "2017.06.29",
        //         labourArea: "三区3019",
        //         labourScore: "9分"
        //     },
        //     {
        //         labourNo: "000013",
        //         labourName: "叶振宇",
        //         labourContent: "打叶，落秧",
        //         labourTime: "2017.06.29",
        //         labourArea: "一区1015",
        //         labourScore: "7分"
        //     },
        //     {
        //         labourNo: "000007",
        //         labourName: "朱溶月",
        //         labourContent: "摘黄叶",
        //         labourTime: "2017.06.28",
        //         labourArea: "二区2001",
        //         labourScore: "8.5分"
        //     },
        //     {
        //         labourNo: "000003",
        //         labourName: "唐玄",
        //         labourContent: "病虫害防治",
        //         labourTime: "2017.06.28",
        //         labourArea: "二区2007",
        //         labourScore: "10分"
        //     },
        //     {
        //         labourNo: "000011",
        //         labourName: "蒋兆聪",
        //         labourContent: "筛选壮苗",
        //         labourTime: "2017.06.28",
        //         labourArea: "三区3013",
        //         labourScore: "9分"
        //     },
        //     {
        //         labourNo: "000021",
        //         labourName: "史伟",
        //         labourContent: "种子催芽处理",
        //         labourTime: "2017.06.28",
        //         labourArea: "一区1005",
        //         labourScore: "7分"
        //     },
        //     {
        //         labourNo: "000018",
        //         labourName: "汤博文",
        //         labourContent: "植株调控",
        //         labourTime: "2017.06.28",
        //         labourArea: "三区3010",
        //         labourScore: "8分"
        //     },
        //     {
        //         labourNo: "000002",
        //         labourName: "钱天",
        //         labourContent: "水肥管理",
        //         labourTime: "2017.06.28",
        //         labourArea: "二区2007",
        //         labourScore: "9.5分"
        //     },
        //     {
        //         labourNo: "000031",
        //         labourName: "石一",
        //         labourContent: "种子催芽处理",
        //         labourTime: "2017.06.28",
        //         labourArea: "三区3005",
        //         labourScore: "10分"
        //     },
        //     {
        //         labourNo: "000029",
        //         labourName: "贺泽",
        //         labourContent: "按定值密度割孔",
        //         labourTime: "2017.06.27",
        //         labourArea: "一区1020",
        //         labourScore: "7分"
        //     },
        //     {
        //         labourNo: "000043",
        //         labourName: "段辰沐",
        //         labourContent: "授粉",
        //         labourTime: "2017.06.27",
        //         labourArea: "一区1019",
        //         labourScore: "7.5分"
        //     },
        // ];

        // //获取不同电脑屏幕的宽度
        // $scope.fn_powers_getWidth = function () {
        //     //获取echart 外层div的id
        //     var powers_sankey_wrapper = document.getElementById('powers_sankey_wrapper'),
        //         powers_pie_wrapper = document.getElementById('powers_pie_wrapper'),
        //         powers_bar_wrapper = document.getElementById('powers_bar_wrapper');
        //
        //     //获取echart 的div id
        //     var powers_sankey = document.getElementById('powers_sankey'),
        //         powers_pie = document.getElementById('powers_pie'),
        //         powers_bar = document.getElementById('powers_bar');
        //     //获取 网页自动撑高的可见区域高度 ，高度要写兼容、加单位
        //     var windowHeight = window.document.body.clientHeight || window.document.documentElement.clientHeight;
        //     var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
        //     //var oWidth = (windowWidth - 30) / 3 ;
        //     //公共 工具栏 获取屏幕宽度  减去  左侧菜单栏 的宽度，就可以得到 不同屏幕的可变宽度进行赋值
        //
        //
        //     if (windowWidth > 1600) {
        //         if (powers_sankey_wrapper) powers_sankey_wrapper.style.height = 970 + 'px';
        //         if (powers_pie_wrapper) powers_pie_wrapper.style.height = 595 + 'px';
        //         if (powers_bar_wrapper) powers_bar_wrapper.style.height = 595 + 'px';
        //
        //
        //     }
        //     else {
        //         if (powers_sankey_wrapper) {
        //             powers_sankey_wrapper.style.height = 1020 + 'px';
        //             powers_sankey_wrapper.style.top = 65 + 'px';
        //         }
        //         if (powers_pie_wrapper) {
        //             powers_pie_wrapper.style.height = 500 + 'px';
        //             powers_pie_wrapper.style.top = 65 + 'px';
        //         }
        //         if (powers_bar_wrapper) {
        //             powers_bar_wrapper.style.height = 500 + 'px';
        //             powers_bar_wrapper.style.top = 585 + 'px';
        //
        //         }
        //         if (powers_sankey) {
        //             powers_sankey.style.height = 990 + 'px';
        //             powers_sankey.style.top = -10 + 'px';
        //             powers_sankey.style.width = 1200 + 'px';
        //             powers_sankey.style.position = 'relative';
        //             powers_sankey.style.left = 25 + 'px';
        //
        //         }
        //         if (powers_pie) {
        //             powers_pie.style.height = 430 + 'px';
        //             powers_pie.style.width = 545 + 'px';
        //             powers_pie.style.top = 15 + 'px';
        //             powers_pie.style.position = 'relative';
        //
        //         }
        //         if (powers_bar) {
        //             powers_bar.style.width = 500 + 'px';
        //             powers_bar.style.height = 440 + 'px';
        //
        //         }
        //
        //
        //     }
        //
        //
        // };
        // $scope.fn_powers_getWidth();


        /*
         左 - 桑基图
         * */
        (function () {
            var myChart_sankey = echarts.init(document.getElementById('powers_sankey'));

            var data = {
                "nodes": [
                    {"name": "总电量"},
                    {"name": "国家农业科技展示园"},
                    {"name": "中粮智慧农场"},
                    {"name": "东营一期"},
                    {"name": "贵阳园区"},

                    {"name": "温室"},
                    {"name": "植物工厂"},
                    {"name": "食用菌工厂"},
                    {"name": "其他"},

                    {"name": "补光灯"},
                    {"name": "施肥机"},
                    {"name": "空调"},
                    {"name": "锅炉"},
                    {"name": "暖气"},
                    {"name": "风机"},
                    {"name": "执行电机"},
                    {"name": "空压机"},
                    {"name": "水泵"},
                    {"name": "包装设备"},
                    {"name": "景观照明"},
                    {"name": "办公设备"},
                    {"name": "冷库"},
                    {"name": "机房"},
                    {"name": "中控室"},
                    {"name": "加湿设备"},
                    {"name": "其它"},
                ],
                "links": [
                    {"source": "总电量", "target": "中粮智慧农场", "value": 4455},
                    {"source": "总电量", "target": "国家农业科技展示园", "value": 1977},
                    {"source": "总电量", "target": "东营一期", "value": 6354},
                    {"source": "总电量", "target": "贵阳园区", "value": 4454},

                    {"source": "国家农业科技展示园", "target": "温室", "value": 1020},
                    {"source": "国家农业科技展示园", "target": "植物工厂", "value": 201},
                    {"source": "国家农业科技展示园", "target": "食用菌工厂", "value": 141},
                    {"source": "国家农业科技展示园", "target": "其他", "value": 570},
                    {"source": "中粮智慧农场", "target": "温室", "value": 1086},
                    {"source": "中粮智慧农场", "target": "植物工厂", "value": 2772},
                    {"source": "中粮智慧农场", "target": "食用菌工厂", "value": 135},
                    {"source": "中粮智慧农场", "target": "其他", "value": 444},
                    {"source": "东营一期", "target": "温室", "value": 3600},
                    {"source": "东营一期", "target": "其他", "value": 1314},
                    {"source": "东营一期", "target": "食用菌工厂", "value": 1407},
                    {"source": "贵阳园区", "target": "温室", "value": 2600},
                    {"source": "贵阳园区", "target": "其他", "value": 1314},
                    {"source": "贵阳园区", "target": "食用菌工厂", "value": 407},

                    {"source": "温室", "target": "暖气", "value": 0},
                    {"source": "温室", "target": "补光灯", "value": 147},
                    {"source": "温室", "target": "风机", "value": 4368},
                    {"source": "温室", "target": "执行电机", "value": 36},
                    {"source": "温室", "target": "水泵", "value": 201},
                    {"source": "温室", "target": "施肥机", "value": 528},
                    {"source": "温室", "target": "包装设备", "value": 399},
                    {"source": "温室", "target": "其它", "value": 0.01},

                    {"source": "植物工厂", "target": "空调", "value": 7.5},
                    {"source": "植物工厂", "target": "暖气", "value": 100},
                    {"source": "植物工厂", "target": "补光灯", "value": 2508},
                    {"source": "植物工厂", "target": "风机", "value": 126},
                    {"source": "植物工厂", "target": "执行电机", "value": 117},
                    {"source": "植物工厂", "target": "水泵", "value": 198},
                    {"source": "植物工厂", "target": "包装设备", "value": 36},
                    {"source": "植物工厂", "target": "其它", "value": 0.01},

                    {"source": "食用菌工厂", "target": "空调", "value": 924},
                    {"source": "食用菌工厂", "target": "加湿设备", "value": 93},
                    {"source": "食用菌工厂", "target": "锅炉", "value": 183},
                    {"source": "食用菌工厂", "target": "暖气", "value": 0},
                    {"source": "食用菌工厂", "target": "补光灯", "value": 32},
                    {"source": "食用菌工厂", "target": "风机", "value": 37},
                    {"source": "食用菌工厂", "target": "空压机", "value": 96},
                    {"source": "食用菌工厂", "target": "包装设备", "value": 132},
                    {"source": "食用菌工厂", "target": "其它", "value": 500},

                    {"source": "其他", "target": "冷库", "value": 1308},
                    {"source": "其他", "target": "机房", "value": 336},
                    {"source": "其他", "target": "中控室", "value": 133},
                    {"source": "其他", "target": "景观照明", "value": 520},
                    {"source": "其他", "target": "办公设备", "value": 1459}
                ]
            };

            var option_sankey = {

                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove',
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#fff',
                        fontSize: 22
                    }
                },
                series: [{
                    type: 'sankey',
                    layout: 'none',
                    data: data.nodes, //b
                    links: data.links,
                    itemStyle: {
                        normal: {
                            borderWidth: 0.5,
                            borderColor: '#878787',
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#ffb26d' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#db555a' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: '#917661',
                            curveness: 0.5,
                            opacity: 0.3,
                            shadowBlur: 20,
                            shadowColor: '#fff',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0
                        },
                        emphasis: {
                            color: '#cdcdcd',
                            opacity: 0.2,
                            curveness: 0.5,
                            shadowBlur: 20,
                            shadowColor: 20,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            offset: [0][0],
                            // //formatter: '{b}:{a}',
                            // formatter: function (data, ticket, callback) {
                            //     var res = data.nodes + data.links;
                            //     return res;
                            // },
                            textStyle: {
                                color: '#db4745',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontFamily: 'sans-serif',
                                fontSize: 18
                            }
                        }
                    }
                }]
            }

            //option_sankey.title.text += "(" + window.localStorage.getItem('time') + ")";
            myChart_sankey.setOption(option_sankey);
        })();

        /*
         * 图表 饼图
         * */
        (function () {
            var myChart = echarts.init(document.getElementById('powers_pie'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;

            var option = {
                color: [
                    '#ff715e',
                    '#ffaf51',
                    '#59e78b',
                    '#ffee51',
                    '#71e8e0'
                ],
                legend: {
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 17
                    }
                },
                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove',
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#fff',
                        fontSize: 22
                    }
                },
                series: [{
                    name: '国家农业科技展示园',
                    type: 'pie',
                    radius: ['20%', '35%'],
                    center: ['25%', '30%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {value: 335, name: '温室'},
                        {value: 310, name: '叶菜工厂'},
                        {value: 234, name: '食用菌工厂'},
                        {value: 135, name: '人工光植物工厂'},
                        {value: 135, name: '黄瓜工厂'},
                        {value: 1548, name: '番茄工厂'}
                    ]
                },
                    {
                        name: '中粮智慧农场',
                        type: 'pie',
                        radius: ['20%', '35%'],
                        center: ['75%', '30%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: 395, name: '温室'},
                            {value: 510, name: '叶菜工厂'},
                            {value: 444, name: '食用菌工厂'},
                            {value: 135, name: '人工光植物工厂'},
                            {value: 445, name: '黄瓜工厂'},
                            {value: 948, name: '番茄工厂'}
                        ]
                    },
                    {
                        name: '东营园区',
                        type: 'pie',
                        radius: ['20%', '35%'],
                        center: ['25%', '75%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: 435, name: '温室'},
                            {value: 10, name: '叶菜工厂'},
                            {value: 34, name: '食用菌工厂'},
                            {value: 135, name: '人工光植物工厂'},
                            {value: 35, name: '黄瓜工厂'},
                            {value: 48, name: '番茄工厂'}
                        ]
                    },
                    {
                        name: '贵阳园区',
                        type: 'pie',
                        radius: ['20%', '35%'],
                        center: ['75%', '75%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {value: 5465, name: '温室'},
                            {value: 3160, name: '叶菜工厂'},
                            {value: 2534, name: '食用菌工厂'},
                            {value: 1355, name: '茄子工厂'},
                            {value: 1135, name: '黄瓜工厂'},
                            {value: 148, name: '番茄工厂'}
                        ]
                    }
                ]
            };
            myChart.setOption(option);
        })();


        /*
         右下 - 堆叠柱状图
         * */
        (function () {
            var myChart_electricity_bar = echarts.init(document.getElementById('powers_bar'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;


            var electricity_bar = {
                color: [
                    '#ff715e',
                    '#ffaf51',
                    '#59e78b',
                    '#ffee51',
                    '#71e8e0'
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#fff',
                        fontSize: 22
                    }
                },
                legend: {
                    data: ['中国农业科技展示园', '中粮智慧农场', '东营园区', '贵阳园区'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 17
                    }
                },
                grid: {
                    top: '8%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['一月', '二月', '三月', '四月', '五月', '六月'],
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                },
                series: [
                    {
                        name: '中国农业科技展示园',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [320, 302, 301, 334, 390, 330],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                                // color: new echarts.graphic.LinearGradient(
                                //     0, 0, 0, 1,
                                //     [
                                //         {offset: 0, color: '#14c8d4'},
                                //         {offset: 1, color: '#43eec6'}
                                //     ]
                                // )
                            }
                        }
                    },
                    {
                        name: '中粮智慧农场',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [120, 132, 101, 134, 90, 230],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                                // color: new echarts.graphic.LinearGradient(
                                //     0, 0, 0, 1,
                                //     [
                                //         {offset: 0, color: '#14c8d4'},
                                //         {offset: 1, color: '#43eec6'}
                                //     ]
                                // )
                            }
                        }
                    },
                    {
                        name: '东营园区',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [220, 182, 191, 234, 290, 330],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                                // color: new echarts.graphic.LinearGradient(
                                //     0, 0, 0, 1,
                                //     [
                                //         {offset: 0, color: '#14c8d4'},
                                //         {offset: 1, color: '#43eec6'}
                                //     ]
                                // )
                            }
                        }
                    },
                    {
                        name: '贵阳园区',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [150, 212, 201, 154, 190, 330],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                                // color: new echarts.graphic.LinearGradient(
                                //     0, 0, 0, 1,
                                //     [
                                //         {offset: 0, color: '#14c8d4'},
                                //         {offset: 1, color: '#43eec6'}
                                //     ]
                                // )
                            }
                        }
                    }
                ]
            };
            myChart_electricity_bar.setOption(electricity_bar);
        })();


    }]);

app.controller('productionCtrl', ['$scope', '$http', 'ajax_factoryIndex', '$timeout', '$interval'
    , function ($scope, $http, ajax_factoryIndex, $timeout,$interval) {


        //获取不同电脑屏幕的宽度
        // $scope.fn_fertilizer_getWidth = function () {
        //     //获取echart 外层div的id
        //     var N_fertilizer_bar_wrapper = document.getElementById('N_fertilizer_bar_wrapper'),
        //         K_fertilizer_bar_wrapper = document.getElementById('K_fertilizer_bar_wrapper'),
        //         P_fertilizer_bar_wrapper = document.getElementById('P_fertilizer_bar_wrapper'),
        //         CO2_bar_wrapper = document.getElementById('CO2_bar_wrapper');
        //
        //     //获取echart 的div id
        //     var N_fertilizer_bar = document.getElementById('N_fertilizer_bar'),
        //         K_fertilizer_bar = document.getElementById('K_fertilizer_bar'),
        //         P_fertilizer_bar = document.getElementById('P_fertilizer_bar'),
        //         CO2_bar = document.getElementById('CO2_bar');
        //     //获取 网页自动撑高的可见区域高度 ，高度要写兼容、加单位
        //     var windowHeight = window.document.body.clientHeight || window.document.documentElement.clientHeight;
        //     var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
        //     //var oWidth = (windowWidth - 30) / 3 ;
        //     //公共 工具栏 获取屏幕宽度  减去  左侧菜单栏 的宽度，就可以得到 不同屏幕的可变宽度进行赋值
        //
        //
        //     if (windowWidth > 1600) {
        //         if (N_fertilizer_bar_wrapper) N_fertilizer_bar_wrapper.style.height = 595 + 'px';
        //         if (K_fertilizer_bar_wrapper) K_fertilizer_bar_wrapper.style.height = 595 + 'px';
        //         if (P_fertilizer_bar_wrapper) P_fertilizer_bar_wrapper.style.height = 595 + 'px';
        //         if (CO2_bar_wrapper) CO2_bar_wrapper.style.height = 595 + 'px';
        //
        //
        //     }
        //     else {
        //         if (N_fertilizer_bar_wrapper) {
        //             N_fertilizer_bar_wrapper.style.height = 495 + 'px';
        //             N_fertilizer_bar_wrapper.style.top = 68 + 'px';
        //         }
        //         if (K_fertilizer_bar_wrapper) {
        //             K_fertilizer_bar_wrapper.style.height = 495 + 'px';
        //             K_fertilizer_bar_wrapper.style.top = 595 + 'px';
        //         }
        //         if (P_fertilizer_bar_wrapper) {
        //             P_fertilizer_bar_wrapper.style.height = 495 + 'px';
        //             P_fertilizer_bar_wrapper.style.top = 68 + 'px';
        //
        //         }
        //         if (CO2_bar_wrapper) {
        //             CO2_bar_wrapper.style.height = 495 + 'px';
        //             CO2_bar_wrapper.style.top = 595 + 'px';
        //
        //         }
        //         if (N_fertilizer_bar) {
        //             N_fertilizer_bar.style.height = 420 + 'px';
        //             N_fertilizer_bar.style.top = 10 + 'px';
        //             N_fertilizer_bar.style.width = 830 + 'px';
        //             N_fertilizer_bar.style.position = 'relative';
        //
        //         }
        //         if (K_fertilizer_bar) {
        //             K_fertilizer_bar.style.height = 420 + 'px';
        //             K_fertilizer_bar.style.width = 830 + 'px';
        //             K_fertilizer_bar.style.top = 10 + 'px';
        //             K_fertilizer_bar.style.position = 'relative';
        //
        //         }
        //         if (P_fertilizer_bar) {
        //             P_fertilizer_bar.style.width = 830 + 'px';
        //             P_fertilizer_bar.style.height = 420 + 'px';
        //             P_fertilizer_bar.style.top = 10 + 'px';
        //             P_fertilizer_bar.style.position = 'relative';
        //
        //         }
        //         if (CO2_bar) {
        //             CO2_bar.style.width = 830 + 'px';
        //             CO2_bar.style.height = 420 + 'px';
        //             CO2_bar.style.top = 10 + 'px';
        //             CO2_bar.style.position = 'relative';
        //         }
        //
        //
        //
        //     }
        //
        //
        // };
        // $scope.fn_fertilizer_getWidth();

        $scope.show_production_bar1 = true;
        $scope.show_production_bar2 = false;
        $scope.show_production_bar3 = true;
        $scope.show_production_bar4 = false;


        var count = 0;
        var interval = function () {
            if (count == 0) {
                $scope.show_production_bar1 = true;
                $scope.show_production_bar2 = false;
                count++;
                return
            } else if (count == 1) {

                $scope.show_production_bar1 = false;
                $scope.show_production_bar2 = true;
                count++;
                return
            } else if (count == 2) {
                $scope.show_production_bar3 = true;
                $scope.show_production_bar4 = false;
                count++;
                return
            } else if (count == 3) {
                $scope.show_production_bar3 = false;
                $scope.show_production_bar4 = true;
                count = 0;
                return
            }
        };
        $interval(interval,3000);


        /*
         左1 - 国家农业科技展示园 生产图
         * */
        (function () {
            var production_bar1 = echarts.init(document.getElementById('production_bar1'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;

            option = {
                legend: {
                    show: true,
                    data: ['黄瓜', '叶菜', '番茄', '青菜'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: windowWidth > 1600 ? 17 : 13
                    }
                },
                radiusAxis: {
                    type: 'category',
                    data: ['一月', '二月', '三月', '四月', '五月', '六月'],
                    z: 10,
                    axisLine: {
                        lineStyle: {
                            color: '#fff',
                        }
                    },
                },
                angleAxis: {
                    axisLine: {
                        lineStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F6EC66'
                            }, {
                                offset: 1,
                                color: '#F65454'
                            }]),
                            width: 5
                        }
                    },
                    axisLabel: {
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: '#fff'
                    }
                },
                tooltip: {
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#ffffff',
                        fontSize: 22
                    }
                },
                polar: {
                    radius: '85%'
                },
                series: [{
                    type: 'bar',
                    data: [2, 2, 3, 4, 5, 6],
                    coordinateSystem: 'polar',
                    name: '黄瓜',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F65454'
                            }, {
                                offset: 1,
                                color: '#F6EC66'
                            }]),
                            opacity: 1,
                        }
                    }
                }, {
                    type: 'bar',
                    data: [3, 4, 6, 8, 5, 5],
                    coordinateSystem: 'polar',
                    name: '叶菜',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F65454'
                            }, {
                                offset: 1,
                                color: '#F6EC66'
                            }]),
                            opacity: 1,
                        }
                    }
                }, {
                    type: 'bar',
                    data: [3, 2, 3, 4, 5, 4],
                    coordinateSystem: 'polar',
                    name: '番茄',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F6EC66'
                            }, {
                                offset: 1,
                                color: '#F65454'
                            }]),
                            opacity: 1,
                        }
                    }
                }, {
                    type: 'bar',
                    data: [3, 2, 3, 4, 3, 1],
                    coordinateSystem: 'polar',
                    name: '青菜',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F6EC66'
                            }, {
                                offset: 1,
                                color: '#F65454'
                            }]),
                            opacity: 1,
                        }
                    }
                }]
            };
            production_bar1.setOption(option);
        })();
        /*
        左2 - 中粮智慧农场 生产图
        * */
        (function () {
            var production_bar2 = echarts.init(document.getElementById('production_bar2'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;

            option = {
                legend: {
                    show: true,
                    data: ['黄瓜', '叶菜', '番茄', '青菜'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: windowWidth > 1600 ? 17 : 13
                    }
                },
                radiusAxis: {
                    type: 'category',
                    data: ['一月', '二月', '三月', '四月', '五月', '六月'],
                    z: 10,
                    axisLine: {
                        lineStyle: {
                            color: '#fff',
                        }
                    },
                },
                angleAxis: {
                    axisLine: {
                        lineStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F6EC66'
                            }, {
                                offset: 1,
                                color: '#F65454'
                            }]),
                            width: 5
                        }
                    },
                    axisLabel: {
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: '#fff'
                    }
                },
                tooltip: {
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#ffffff',
                        fontSize: 22
                    }
                },
                polar: {
                    radius: '85%'
                },
                series: [{
                    type: 'bar',
                    data: [2, 3, 2, 2, 4, 3],
                    coordinateSystem: 'polar',
                    name: '黄瓜',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F65454'
                            }, {
                                offset: 1,
                                color: '#F6EC66'
                            }]),
                            opacity: 1,
                        }
                    }
                }, {
                    type: 'bar',
                    data: [1, 5, 1, 5, 3, 4],
                    coordinateSystem: 'polar',
                    name: '叶菜',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F65454'
                            }, {
                                offset: 1,
                                color: '#F6EC66'
                            }]),
                            opacity: 1,
                        }
                    }
                }, {
                    type: 'bar',
                    data: [4, 4, 1, 2, 5, 4],
                    coordinateSystem: 'polar',
                    name: '番茄',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F6EC66'
                            }, {
                                offset: 1,
                                color: '#F65454'
                            }]),
                            opacity: 1,
                        }
                    }
                }, {
                    type: 'bar',
                    data: [1, 3, 2, 5, 4, 2],
                    coordinateSystem: 'polar',
                    name: '青菜',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F6EC66'
                            }, {
                                offset: 1,
                                color: '#F65454'
                            }]),
                            opacity: 1,
                        }
                    }
                }]
            };
            production_bar2.setOption(option);
        })();


        /*
         右1 - 东营一期 生产图
         * */
        (function () {
            var production_bar3 = echarts.init(document.getElementById('production_bar3'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
            option = {
                angleAxis: {
                    type: 'category',
                    data: ['一月', '二月', '三月', '四月', '五月', '六月'],
                    z: 10,
                    axisLine: {
                        lineStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00fcae'
                            }, {
                                offset: 1,
                                color: '#006388'
                            }]),
                            width: 5
                        }
                    },
                    axisLabel: {
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#fff'
                    }
                },
                legend: {
                    show: true,
                    data: ['黄瓜', '叶菜', '番茄', '青菜'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: windowWidth > 1600 ? 17 : 13
                    }
                },
                tooltip: {
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#ffffff',
                        fontSize: 22
                    }
                },
                radiusAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                },
                polar: {
                    radius: '85%'
                },
                series: [{
                    type: 'bar',
                    data: [1, 2, 3, 4, 3, 5, 1],
                    coordinateSystem: 'polar',
                    name: '黄瓜',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }, {
                    type: 'bar',
                    data: [2, 5, 5, 2, 5, 2, 1],
                    coordinateSystem: 'polar',
                    name: '叶菜',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }, {
                    type: 'bar',
                    data: [1, 2, 3, 4, 1, 2, 5],
                    coordinateSystem: 'polar',
                    name: '番茄',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }, {
                    type: 'bar',
                    data: [1, 5, 3, 4, 5, 5, 7],
                    coordinateSystem: 'polar',
                    name: '青菜',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }]
            };

            production_bar3.setOption(option);
        })();
        /*
         右2 - 贵阳园区 生产图
         * */
        (function () {
            var production_bar4 = echarts.init(document.getElementById('production_bar4'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
            option = {
                angleAxis: {
                    type: 'category',
                    data: ['一月', '二月', '三月', '四月', '五月', '六月'],
                    z: 10,
                    axisLine: {
                        lineStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00fcae'
                            }, {
                                offset: 1,
                                color: '#006388'
                            }]),
                            width: 5
                        }
                    },
                    axisLabel: {
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#fff'
                    }
                },
                legend: {
                    show: true,
                    data: ['黄瓜', '叶菜', '番茄', '青菜'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: windowWidth > 1600 ? 17 : 13
                    }
                },
                tooltip: {
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#ffffff',
                        fontSize: 22
                    }
                },
                radiusAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                },
                polar: {
                    radius: '85%'
                },
                series: [{
                    type: 'bar',
                    data: [1, 1, 1, 1, 1, 1, 1],
                    coordinateSystem: 'polar',
                    name: '黄瓜',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }, {
                    type: 'bar',
                    data: [2, 2, 2, 2, 2, 2, 2],
                    coordinateSystem: 'polar',
                    name: '叶菜',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }, {
                    type: 'bar',
                    data: [2, 1, 3, 2, 2, 3, 2],
                    coordinateSystem: 'polar',
                    name: '番茄',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }, {
                    type: 'bar',
                    data: [1, 1, 1, 1, 1, 1, 1],
                    coordinateSystem: 'polar',
                    name: '青菜',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }]
            };

            production_bar4.setOption(option);
        })();


    }]);

app.controller('qualityTraceCtrl', ['$scope', '$http', 'ajax_factoryIndex', '$timeout'
    , function ($scope, $http, ajax_factoryIndex, $timeout) {
        //获取菜单选中样式
        // $scope.fn_common_reload_style();

        /*
         js 获取 屏幕宽度 分三等分
         * */
        //获取不同电脑屏幕的宽度
        // $scope.fn_order_getWidth = function () {
        //     var storage_quality_radar = document.getElementById('storage_quality_radar');
        //     var purch_quality = document.getElementById('purch_quality');
        //     var product_quality = document.getElementById('product_quality');
        //     //获取 网页自动撑高的可见区域高度 ，高度要写兼容、加单位
        //     //var oHeight = window.document.body.clientHeight || window.document.documentElement.clientHeight;
        //     var _oWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
        //     var oWidth = (_oWidth - 30) / 3;
        //     //公共 工具栏 获取屏幕宽度  减去  左侧菜单栏 的宽度，就可以得到 不同屏幕的可变宽度进行赋值
        //     if (storage_quality_radar) storage_quality_radar.style.width = oWidth - 10 + 'px';
        //     if (purch_quality) purch_quality.style.width = oWidth + 60 + 'px';
        //     if (product_quality) product_quality.style.width = oWidth + 'px';
        // };
        // $scope.fn_order_getWidth();
        /*
         左上角 - 图表
         * */
        (function () {
            var myChart_storage_quality_radar = echarts.init(document.getElementById('storage_quality_radar'));

            dataBJ = [
                [532, 234, 267, 313, 309],   //最里面的深色 数组
            ];
            indicatorData = [
                {
                    name: '主仓库',
                    max: 600
                }, {
                    name: '在途',
                    max: 600,
                }, {
                    name: '当代门店',
                    max: 600
                }, {
                    name: '农科院门店',
                    max: 600
                }, {
                    name: '周转库',
                    max: 600
                }];
            option_storage_quality_radar = {
                // title: {
                //     text: '库存概况',
                //     x: 'center',
                //     y: -5,
                //     textStyle: {
                //         color: '#ffffff',
                //     },
                // },
                color: [
                    '#dccefd',
                    '#c264fe',
                    '#a82ffc',
                    '#7a08fa',
                ],
                tooltip: {
                    trigger: 'item',
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#fff',
                        fontSize: 22
                    }
                },
                radar: {
                    center: ['50%', '50%'],
                    indicator: indicatorData,
                    radius: '80%',
                    splitNumber: 1,
                    name: {
                        textStyle: {
                            fontWeight: 'bold',
                            color: '#c264fe',
                            fontSize: 17
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#c264fe',
                            opacity: 0.5
                        }
                    },
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: '#c0c0bb',
                            opacity: 0.1
                        }
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: '#c264fe',
                            opacity: 0.5
                        }
                    }
                },
                series: [
                    {
                        name: '雷达线13',
                        type: 'radar',
                        silent: true,
                        lineStyle: {
                            normal: {
                                type: 'solid',
                                color: "#c264fe",
                                width: 2,
                                opacity: 1
                            }
                        },
                        data: [
                            [600, 600, 600, 600, 600]
                        ],

                        itemStyle: {
                            normal: {
                                opacity: 0

                            }
                        },
                        areaStyle: {
                            normal: {
                                color: '#dbdbd6',
                                opacity: 0.1
                            }
                        }
                    },
                    {
                        name: '雷达线14',
                        type: 'radar',
                        silent: true,
                        lineStyle: {
                            normal: {
                                type: 'solid',
                                color: "#c264fe",
                                width: 2,
                                opacity: 1,

                            }
                        },
                        data: [
                            [500, 500, 500, 500, 500]
                        ],

                        itemStyle: {
                            normal: {
                                opacity: 0

                            }
                        },
                        areaStyle: {
                            normal: {
                                color: '#acaca7',
                                opacity: 0.1
                            }
                        }
                    },
                    {
                        name: '雷达线2',
                        type: 'radar',
                        silent: true,
                        lineStyle: {
                            normal: {
                                type: 'solid',
                                color: "#c264fe",
                                width: 2,
                                opacity: 0.8,

                            }
                        },
                        data: [
                            [400, 400, 400, 400, 400]
                        ],

                        itemStyle: {
                            normal: {
                                opacity: 0

                            }
                        },
                        areaStyle: {
                            normal: {
                                color: 'rgba(0,0,0,0)',
                                opacity: 0.1
                            }
                        }
                    },
                    {
                        name: '雷达线3',
                        type: 'radar',
                        silent: true,
                        lineStyle: {
                            normal: {
                                type: 'solid',
                                color: "#c264fe",
                                width: 2,
                                opacity: 0.6,

                            }
                        },
                        data: [
                            [300, 300, 300, 300, 300]
                        ],

                        itemStyle: {
                            normal: {
                                opacity: 0

                            }
                        },
                        areaStyle: {
                            normal: {
                                color: 'rgba(0,0,0,0)',
                                opacity: 0.1
                            }
                        }
                    },
                    {
                        name: '雷达线4',
                        type: 'radar',
                        silent: true,
                        lineStyle: {
                            normal: {
                                type: 'solid',
                                color: "#c264fe",
                                width: 2,
                                opacity: 0.4,

                            }
                        },
                        data: [
                            [200, 200, 200, 200, 200]
                        ],

                        itemStyle: {
                            normal: {
                                opacity: 0

                            }
                        },
                        areaStyle: {
                            normal: {
                                color: 'rgba(0,0,0,0)',
                                opacity: 0.1
                            }
                        }
                    },
                    {
                        name: '雷达线5',
                        type: 'radar',
                        silent: true,
                        lineStyle: {
                            normal: {
                                type: 'solid',
                                color: "#c264fe",
                                width: 2,
                                opacity: 0.2,

                            }
                        },
                        data: [
                            [100, 100, 100, 100, 100]
                        ],

                        itemStyle: {
                            normal: {
                                opacity: 0

                            }
                        },
                        areaStyle: {
                            normal: {
                                color: 'rgba(0,0,0,0)',
                                opacity: 0.1
                            }
                        }
                    },
                    {
                        name: '仓储量（kg）',
                        type: 'radar',
                        lineStyle: {
                            normal: {
                                width: 1,
                                opacity: 0.5
                            }
                        },
                        data: dataBJ,
                        symbolSize: 4,
                        itemStyle: {
                            normal: {
                                borderColor: '02C39A',
                                borderWidth: 5,

                            }
                        },
                        areaStyle: {
                            normal: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0, color: '#cb9ffa' // 0% 处的颜色
                                    }, {
                                        offset: 1, color: '#a22ffe' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                opacity: 0.5
                            }
                        }
                    },
                    {
                        name: '雷达线',
                        type: 'radar',
                        silent: true,
                        lineStyle: {
                            normal: {
                                type: 'dotted',
                                width: 4,
                                opacity: 0.3,
                            }
                        },
                        data: [
                            [6, 5, 6, 4, 2]
                        ],

                        itemStyle: {
                            normal: {
                                opacity: 0
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: '#fc85ae',
                                opacity: 0.2
                            }
                        }
                    }

                ]
            };
            myChart_storage_quality_radar.setOption(option_storage_quality_radar);
        })();

        /*
         * 右上角  -  图表 劳动力
         * */
        (function () {
            var myChart_purch_quality = echarts.init(document.getElementById('purch_quality'));
            // var colors = ['green', '#1E90FF', 'yellow', 'red',];
            var availData = [249.6, 201.6, 135.6, 105.6, 57.6, 9.6];
            var purchData = [297.6, 100, 50, 20, 10, 0];
            var useData = [48, 48, 48, 48, 48, 48];
            option_purch_quality = {
                // title: {
                //     text: '硝酸钙-采购统计',
                //     textStyle: {
                //         color: '#fff',
                //         fontStyle: 'normal',
                //         fontWeight: 'bolder',
                //         //fontFamily: 'sans-serif',
                //         fontSize: 18
                //     },
                //     //x: "center",  //标题的 x y 轴坐标位置
                //     x:130,
                //     y:0
                // },
                // color: colors,
                // tooltip: {
                //     trigger: 'axis'
                // },
                // grid: {
                //     right: '20%'
                // },
                // legend: {
                //     data: ['剩余量', '领用量', '采购量'],
                //     textStyle: {
                //         color: "white",
                //     },
                //     x: 80,  //标题的 x y 轴坐标位置
                //     //x: "center",  //居中
                //     y: 30
                // },
                // dataZoom: [{
                //     show: true,
                //     height: 20,
                //     y: 470,  //下边缩放条的位置
                //     xAxisIndex: [
                //         0
                //     ],
                //     bottom: 30,
                //     start: 0,
                //     end: 80,
                //     handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
                //     handleStyle: {
                //         color: "#d3dee5",
                //     },
                //     textStyle: {
                //         color: "#fff"
                //     },
                //     borderColor: "#90979c"
                // }, {
                //     "type": "inside",
                //     "show": true,
                //     "height": 15,
                // }],
                // xAxis: [{
                //     type: 'category',
                //     data: ['2017.01', '2017.02', '2017.03', '2017.04', '2017.05', '2017.06'],
                //     "splitLine": {
                //         "show": false
                //     },
                //     "axisLine": {
                //         lineStyle: {
                //             color: '#90979c'
                //         }
                //     },
                //     "axisTick": {
                //         "show": false
                //     },
                //     "axisLabel": {
                //         "interval": 0,
                //
                //     },
                //     "splitArea": {
                //         "show": false
                //     },
                // }],
                // yAxis: [{
                //     type: 'value',
                //     "splitLine": {
                //         "show": false
                //     },
                //     "axisLine": {
                //         lineStyle: {
                //             color: '#90979c'
                //         }
                //     },
                //     "axisTick": {
                //         "show": false
                //     },
                //     "axisLabel": {
                //         "interval": 0,
                //
                //     },
                //     "splitArea": {
                //         "show": false
                //     },
                // }],
                // series: [{
                //     name: '剩余量',
                //     type: 'line',
                //     data: availData
                // }, {
                //     name: '领用量',
                //     type: 'bar',
                //     barWidth: 25,
                //     stack: '总量',
                //     label: {
                //         normal: {
                //             //show: true,
                //             //position: 'inside'
                //         }
                //     },
                //     data: useData
                // }, {
                //     name: '采购量',
                //     type: 'bar',
                //     barWidth: 25,
                //     stack: '总量',
                //     label: {
                //         normal: {
                //             //show: true,
                //             //position: 'inside'
                //         }
                //     },
                //     data: purchData
                // }]

                // color: [
                //     '#02C39A',
                //     '#028090',
                //     '#02916f',
                // ],
                color: [
                    '#dccefd',
                    '#c264fe',
                    '#a82ffc',
                    '#7a08fa',
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#fff',
                        fontSize: 22
                    }
                },
                legend: {
                    data: ['剩余量', '领用量', '采购量'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 17
                    }
                },
                grid: {
                    top: '8%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['一月', '二月', '三月', '四月', '五月', '六月'],
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                series: [

                    {
                        name: '采购量',
                        type: 'bar',
                        // stack: '天然气用量',
                        data: purchData,
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                            }
                        }
                    },
                    {
                        name: '领用量',
                        type: 'bar',
                        data: useData,
                        markLine: {
                            lineStyle: {
                                normal: {
                                    type: 'dashed'
                                }
                            },
                            // data: [
                            //     [{type: 'min'}, {type: 'max'}]
                            // ]
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                            }
                        }
                    },
                    {
                        name: '剩余量',
                        type: 'line',
                        data: availData,
                        markLine: {
                            lineStyle: {
                                normal: {
                                    type: 'dashed'
                                }
                            },
                            // data: [
                            //     [{type: 'min'}, {type: 'max'}]
                            // ]
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 5,
                            }
                        }
                    },

                ]
            };
            myChart_purch_quality.setOption(option_purch_quality);
        })();


        (function () {

            var myChart_product_quality = echarts.init(document.getElementById('product_quality'));
            option_product_quality = {
                // title: {
                //     text: '病虫害处理作业',
                //     x: 'center',
                //     textStyle: {
                //         color: '#ffffff',
                //     },
                // },
                // color: [
                //     '#02C39A',
                //     '#028090',
                //     '#02916f',
                // ],
                color: [
                    '#dccefd',
                    '#c264fe',
                    '#a82ffc',
                    '#7a08fa',
                ],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} {b} :{d}%",
                    textStyle: {
                        color: '#fff',
                        fontSize: 22
                    }
                },

                legend: {
                    top: '0%',
                    left: '1%',
                    orient: 'vertical',
                    data: ['生物防治', '物理防治'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 17
                    }
                },
                series: [{
                    name: '',
                    type: 'pie',
                    //roseType:'radius',
                    radius: '33%',
                    center: ['30%', '20%'],
                    data: [{
                        value: 35,
                        name: '生物防治',
                        itemStyle: {
                            normal: {
                                color: ''
                            }
                        },
                    }, {
                        value: 55,
                        name: '物理防治',
                        itemStyle: {
                            normal: {
                                color: ''
                            }
                        },
                    },
                        /*{value:335, name:'3'},
                         {value:1548, name:'4'},
                         {value:1548, name:'5'}*/
                    ],
                    label: {
                        normal: {
                            textStyle: {
                                color: '',
                                fontSize: 17,
                                fontWeight: 'bold'
                            }
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }, {
                    name: '',
                    type: 'pie',
                    radius: '33%',
                    center: ['70%', '20%'],
                    data: [{
                        value: 5,
                        name: '生物防治',
                        itemStyle: {
                            normal: {
                                color: ''
                            }
                        },
                    }, {
                        value: 25,
                        name: '物理防治',
                        itemStyle: {
                            normal: {
                                color: ''
                            }
                        },
                    },
                        /*{value:335, name:'3'},
                         {value:1548, name:'4'},
                         {value:1548, name:'5'}*/
                    ],
                    label: {
                        normal: {
                            offset: [, 100],
                            textStyle: {
                                color: '',
                                fontSize: 17,
                                fontWeight: 'bold'
                            }
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }, {
                    name: '',
                    type: 'pie',
                    //roseType:'radius',
                    radius: '33%',
                    center: ['30%', '65%'],
                    data: [{
                        value: 35,
                        name: '生物防治',
                        itemStyle: {
                            normal: {
                                color: ''
                            }
                        },
                    }, {
                        value: 90,
                        name: '物理防治',
                        itemStyle: {
                            normal: {
                                color: ''
                            }
                        },
                    },
                        /*{value:335, name:'3'},
                         {value:1548, name:'4'},
                         {value:1548, name:'5'}*/
                    ],
                    label: {
                        normal: {
                            textStyle: {
                                color: '',
                                fontSize: 17,
                                fontWeight: 'bold'
                            }
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }, {
                    name: '',
                    type: 'pie',
                    //roseType:'radius',
                    radius: '33%',
                    center: ['70%', '65%'],
                    data: [{
                        value: 15,
                        name: '生物防治',
                        itemStyle: {
                            normal: {
                                color: ''
                            }
                        },
                    }, {
                        value: 90,
                        name: '物理防治',
                        itemStyle: {
                            normal: {
                                color: ''
                            }
                        },

                    },
                        /*{value:335, name:'3'},
                         {value:1548, name:'4'},
                         {value:1548, name:'5'}*/
                    ],
                    label: {
                        normal: {
                            position: 'outside',
                            textStyle: {
                                color: '',
                                fontSize: 17,
                                fontWeight: 'bold'
                            }
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                },]
            };
            myChart_product_quality.setOption(option_product_quality);

        })();

        // $scope.storage_quality_arr = [
        //     {
        //         checkNo: "AG172501T",
        //         checkName: "番茄",
        //         storageTime: "2017.06.22",
        //         storagePosition: "主仓库",
        //         storageTemp: "12℃",
        //         storageHumidity: "80%RH",
        //         PackingWay: "塑料",
        //     },
        //     {
        //         checkNo: "AG172501C",
        //         checkName: "黄瓜",
        //         storageTime: "2017.06.22",
        //         storagePosition: "主仓库",
        //         storageTemp: "13.2℃",
        //         storageHumidity: "80.8%RH",
        //         PackingWay: "纸盒",
        //     },
        //     {
        //         checkNo: "AG172503T",
        //         checkName: "番茄",
        //         storageTime: "2017.06.30",
        //         storagePosition: "农科院门店",
        //         storageTemp: "12.7℃",
        //         storageHumidity: "80.5%RH",
        //         PackingWay: "聚乙烯盒",
        //     },

        // {
        //     checkNo: "AG172501N",
        //     checkName: "滑子菇",
        //     storageTime: "2017.06.21",
        //     storagePosition: "在途",
        //     storageTemp: "11.6℃",
        //     storageHumidity: "80.5%RH",
        //     PackingWay: "聚乙烯盒",
        // },
        //
        // {
        //     checkNo: "AG172402V",
        //     checkName: "奶油生菜",
        //     storageTime: "2017.06.15",
        //     storagePosition: "农科院门店",
        //     storageTemp: "13.5℃",
        //     storageHumidity: "81%RH",
        //     PackingWay: "纸盒",
        // },

        // {
        //     checkNo: "AG172403C",
        //     checkName: "黄瓜",
        //     storageTime: "2017.06.15",
        //     storagePosition: "当代门店",
        //     storageTemp: "12℃",
        //     storageHumidity: "81%RH",
        //     PackingWay: "聚乙烯盒",
        // },
        // {
        //     checkNo: "AG172402E",
        //     checkName: "茄子",
        //     storageTime: "2017.06.12",
        //     storagePosition: "农科院门店",
        //     storageTemp: "13.5℃",
        //     storageHumidity: "81%RH",
        //     PackingWay: "塑料",
        // },
        //
        // {
        //     checkNo: "AG172302P",
        //     checkName: "榆黄菇",
        //     storageTime: "2017.06.09",
        //     storagePosition: "主仓库",
        //     storageTemp: "12.3℃",
        //     storageHumidity: "81%RH",
        //     PackingWay: "塑料",
        // },
        // {
        //     checkNo: "AG172302T",
        //     checkName: "番茄",
        //     storageTime: "2017.06.07",
        //     storagePosition: "农科院门店",
        //     storageTemp: "12.5℃",
        //     storageHumidity: "80%RH",
        //     PackingWay: "塑料",
        // },
        //
        // {
        //     checkNo: "AG172302P",
        //     checkName: "榆黄菇",
        //     storageTime: "2017.06.06",
        //     storagePosition: "周转库",
        //     storageTemp: "12℃",
        //     storageHumidity: "80%RH",
        //     PackingWay: "聚乙烯盒",
        // },
        // {
        //     checkNo: "AG172302M",
        //     checkName: "舞茸",
        //     storageTime: "2017.06.05",
        //     storagePosition: "当代门店",
        //     storageTemp: "13℃",
        //     storageHumidity: "80%RH",
        //     PackingWay: "纸盒",
        // },
    // ]
        //     ;

        $scope.check_arr = [
            {
                checkNo: "AG172101V",
                checkPhoto: "checkJPG1.jpg",
                checkName: "奶油生菜",
                checkDate: "2017.06.01",
                checkMechanism: "农业部蔬菜品质监督检查测试中心（北京）",
                checkResult: "合格",
                checkUserName: "毕有成"
            },
            {
                checkNo: "AG172103V",
                checkPhoto: "checkJPG1.jpg",
                checkName: "奶油生菜",
                checkDate: "2017.06.01",
                checkMechanism: "农业部蔬菜品质监督检查测试中心（北京）",
                checkResult: "合格",
                checkUserName: "毕有成"
            },
            {
                checkNo: "AG172103T",
                checkPhoto: "checkJPG4.jpg",
                checkName: "番茄",
                checkDate: "2017.06.01",
                checkMechanism: "PONY谱尼测试",
                checkResult: "合格",
                checkUserName: "毕有成"
            },
            {
                checkNo: "AG172102T",
                checkPhoto: "checkJPG2.jpg",
                checkName: "榆黄菇",
                checkDate: "2017.06.01",
                checkMechanism: "PONY谱尼测试",
                checkResult: "合格",
                checkUserName: "毕有成"
            },

            {
                checkNo: "AG172102M",
                checkPhoto: "checkJPG3.jpg",
                checkName: "姬松茸",
                checkDate: "2017.05.29",
                checkMechanism: "PONY谱尼测试",
                checkResult: "合格",
                checkUserName: "毕有成"
            },
            // {
            //     checkNo: "AG172101T",
            //     checkPhoto: "checkJPG4.jpg",
            //     checkName: "番茄",
            //     checkDate: "2017.05.29",
            //     checkMechanism: "PONY谱尼测试",
            //     checkResult: "合格",
            //     checkUserName: "毕有成"
            // },
            // {
            //     checkNo: "AG171602T",
            //     checkPhoto: "checkJPG4.jpg",
            //     checkName: "番茄",
            //     checkDate: "2017.05.03",
            //     checkMechanism: "PONY谱尼测试",
            //     checkResult: "合格",
            //     checkUserName: "付翰"
            // },
            // {
            //     checkNo: "AG171603M",
            //     checkPhoto: "checkJPG3.jpg",
            //     checkName: "姬松茸",
            //     checkDate: "2017.05.03",
            //     checkMechanism: "PONY谱尼测试",
            //     checkResult: "合格",
            //     checkUserName: "付翰"
            // },
            // {
            //     checkNo: "AG171502V",
            //     checkPhoto: "checkJPG1.jpg",
            //     checkName: "奶油生菜",
            //     checkDate: "2017.04.24",
            //     checkMechanism: "农业部蔬菜品质监督检查测试中心（北京）",
            //     checkResult: "合格",
            //     checkUserName: "付翰"
            // },
            // {
            //     checkNo: "AG172103V",
            //     checkPhoto: "checkJPG1.jpg",
            //     checkName: "奶油生菜",
            //     checkDate: "2017.04.24",
            //     checkMechanism: "农业部蔬菜品质监督检查测试中心（北京）",
            //     checkResult: "合格",
            //     checkUserName: "付翰"
            // },
        ];

        $scope.storage_quality_arr = [
            {
                checkNo: "AG172501T",
                checkName: "番茄",
                storageTime: "2017.06.22",
                storagePosition: "主仓库",
                storageTemp: "12℃",
                storageHumidity: "80%RH",
                PackingWay: "塑料",
            },
            {
                checkNo: "AG172501C",
                checkName: "黄瓜",
                storageTime: "2017.06.22",
                storagePosition: "主仓库",
                storageTemp: "13.2℃",
                storageHumidity: "80.8%RH",
                PackingWay: "纸盒",
            },
            {
                checkNo: "AG172503T",
                checkName: "番茄",
                storageTime: "2017.06.30",
                storagePosition: "农科院门店",
                storageTemp: "12.7℃",
                storageHumidity: "80.5%RH",
                PackingWay: "聚乙烯盒",
            },

            {
                checkNo: "AG172501N",
                checkName: "滑子菇",
                storageTime: "2017.06.21",
                storagePosition: "在途",
                storageTemp: "11.6℃",
                storageHumidity: "80.5%RH",
                PackingWay: "聚乙烯盒",
            },

            {
                checkNo: "AG172402V",
                checkName: "奶油生菜",
                storageTime: "2017.06.15",
                storagePosition: "农科院门店",
                storageTemp: "13.5℃",
                storageHumidity: "81%RH",
                PackingWay: "纸盒",
            },

            // {
            //     checkNo: "AG172403C",
            //     checkName: "黄瓜",
            //     storageTime: "2017.06.15",
            //     storagePosition: "当代门店",
            //     storageTemp: "12℃",
            //     storageHumidity: "81%RH",
            //     PackingWay: "聚乙烯盒",
            // },
            // {
            //     checkNo: "AG172402E",
            //     checkName: "茄子",
            //     storageTime: "2017.06.12",
            //     storagePosition: "农科院门店",
            //     storageTemp: "13.5℃",
            //     storageHumidity: "81%RH",
            //     PackingWay: "塑料",
            // },
            //
            // {
            //     checkNo: "AG172302P",
            //     checkName: "榆黄菇",
            //     storageTime: "2017.06.09",
            //     storagePosition: "主仓库",
            //     storageTemp: "12.3℃",
            //     storageHumidity: "81%RH",
            //     PackingWay: "塑料",
            // },
            // {
            //     checkNo: "AG172302T",
            //     checkName: "番茄",
            //     storageTime: "2017.06.07",
            //     storagePosition: "农科院门店",
            //     storageTemp: "12.5℃",
            //     storageHumidity: "80%RH",
            //     PackingWay: "塑料",
            // },
            //
            // {
            //     checkNo: "AG172302P",
            //     checkName: "榆黄菇",
            //     storageTime: "2017.06.06",
            //     storagePosition: "周转库",
            //     storageTemp: "12℃",
            //     storageHumidity: "80%RH",
            //     PackingWay: "聚乙烯盒",
            // },
            // {
            //     checkNo: "AG172302M",
            //     checkName: "舞茸",
            //     storageTime: "2017.06.05",
            //     storagePosition: "当代门店",
            //     storageTemp: "13℃",
            //     storageHumidity: "80%RH",
            //     PackingWay: "纸盒",
            // },
        ];


    }]);


app.controller('waterCtrl', ['$scope', '$http', 'ajax_factoryIndex', '$timeout'
    , function ($scope, $http, ajax_factoryIndex, $timeout) {


        // //获取不同电脑屏幕的宽度
        // $scope.fn_water_getWidth = function () {
        //     //获取echart 外层div的id
        //     var water_sankey_wrapper = document.getElementById('water_sankey_wrapper'),
        //         gas_bar_wrapper = document.getElementById('gas_bar_wrapper'),
        //         water_bar_wrapper = document.getElementById('water_bar_wrapper');
        //
        //     //获取echart 的div id
        //     var water_sankey = document.getElementById('water_sankey'),
        //         gas_bar = document.getElementById('gas_bar'),
        //         water_bar = document.getElementById('water_bar');
        //     //获取 网页自动撑高的可见区域高度 ，高度要写兼容、加单位
        //     var windowHeight = window.document.body.clientHeight || window.document.documentElement.clientHeight;
        //     var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
        //     //var oWidth = (windowWidth - 30) / 3 ;
        //     //公共 工具栏 获取屏幕宽度  减去  左侧菜单栏 的宽度，就可以得到 不同屏幕的可变宽度进行赋值
        //     //
        //     // if (windowWidth > 1600) {
        //     //     if (water_sankey_wrapper) water_sankey_wrapper.style.height = 1220 + 'px';
        //     //     if (gas_bar_wrapper) gas_bar_wrapper.style.height = 595 + 'px';
        //     //     if (water_bar_wrapper) water_bar_wrapper.style.height = 595 + 'px';
        //     //
        //     //
        //     // }
        //     // else {
        //     //     if (water_sankey_wrapper) {
        //     //         water_sankey_wrapper.style.height = 1020 + 'px';
        //     //         water_sankey_wrapper.style.top = 65 + 'px';
        //     //     }
        //     //     if (gas_bar_wrapper) {
        //     //         gas_bar_wrapper.style.height = 500 + 'px';
        //     //         gas_bar_wrapper.style.top = 65 + 'px';
        //     //     }
        //     //     if (water_bar_wrapper) {
        //     //         water_bar_wrapper.style.height = 500 + 'px';
        //     //         water_bar_wrapper.style.top = 585 + 'px';
        //     //
        //     //     }
        //     //     if (water_sankey) {
        //     //         water_sankey.style.height = 990 + 'px';
        //     //         water_sankey.style.top = -10 + 'px';
        //     //         water_sankey.style.width = 1200 + 'px';
        //     //         water_sankey.style.position = 'relative';
        //     //         water_sankey.style.left = 25 + 'px';
        //     //
        //     //     }
        //     //     if (gas_bar) {
        //     //         gas_bar.style.height = 430 + 'px';
        //     //         gas_bar.style.width = 545 + 'px';
        //     //         gas_bar.style.top = 15 + 'px';
        //     //         gas_bar.style.position = 'relative';
        //     //
        //     //     }
        //     //     if (water_bar) {
        //     //         water_bar.style.width = 500 + 'px';
        //     //         water_bar.style.height = 440 + 'px';
        //     //
        //     //     }
        //     //
        //     //
        //     // }
        //
        //
        // };
        // // $scope.fn_water_getWidth();
        /*
           左 - 水 - 桑基图
           * */
        (function () {
            var myChart_sankey = echarts.init(document.getElementById('water_sankey'));

            var data = {
                "nodes": [
                    {"name": "总用水量"},
                    {"name": "国家农业科技展示园"},
                    {"name": "中粮智慧农场"},
                    {"name": "东营一期"},
                    {"name": "贵阳园区"},

                    {"name": "温室"},
                    {"name": "植物工厂"},
                    {"name": "食用菌工厂"},
                    {"name": "其他"},

                    {"name": "施肥机"},
                    {"name": "空调"},
                    {"name": "锅炉"},
                    {"name": "暖气"},

                    {"name": "办公设备"},
                    {"name": "冷库"},
                    {"name": "机房"},
                    {"name": "中控室"},
                    {"name": "加湿设备"},
                    {"name": "其它"},
                ],
                "links": [
                    {"source": "总用水量", "target": "中粮智慧农场", "value": 4455},
                    {"source": "总用水量", "target": "国家农业科技展示园", "value": 7977},
                    {"source": "总用水量", "target": "东营一期", "value": 6354},
                    {"source": "总用水量", "target": "贵阳园区", "value": 9540},

                    {"source": "国家农业科技展示园", "target": "温室", "value": 1020},
                    {"source": "国家农业科技展示园", "target": "植物工厂", "value": 201},
                    {"source": "国家农业科技展示园", "target": "食用菌工厂", "value": 141},
                    {"source": "国家农业科技展示园", "target": "其他", "value": 5700},
                    {"source": "中粮智慧农场", "target": "温室", "value": 1086},
                    {"source": "中粮智慧农场", "target": "植物工厂", "value": 2772},
                    {"source": "中粮智慧农场", "target": "食用菌工厂", "value": 135},
                    {"source": "中粮智慧农场", "target": "其他", "value": 444},
                    {"source": "东营一期", "target": "温室", "value": 3600},
                    {"source": "东营一期", "target": "其他", "value": 1314},
                    {"source": "东营一期", "target": "食用菌工厂", "value": 1407},
                    {"source": "贵阳园区", "target": "温室", "value": 2600},
                    {"source": "贵阳园区", "target": "其他", "value": 1314},
                    {"source": "贵阳园区", "target": "食用菌工厂", "value": 4070},

                    {"source": "温室", "target": "暖气", "value": 1000},
                    {"source": "温室", "target": "施肥机", "value": 5280},
                    {"source": "温室", "target": "包装设备", "value": 3990},
                    {"source": "温室", "target": "其它", "value": 3000},


                    {"source": "植物工厂", "target": "其它", "value": 3000},

                    {"source": "食用菌工厂", "target": "锅炉", "value": 1830},
                    {"source": "食用菌工厂", "target": "暖气", "value": 1000},
                    {"source": "食用菌工厂", "target": "其它", "value": 5000},

                    {"source": "其他", "target": "冷库", "value": 1308},
                    {"source": "其他", "target": "机房", "value": 3360},
                    {"source": "其他", "target": "中控室", "value": 1330},

                ]
            };

            var option_sankey = {

                tooltip: {
                    trigger: 'item',
                    triggerOn: 'mousemove',
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#fff',
                        fontSize: 22
                    }
                },
                series: [{
                    type: 'sankey',
                    layout: 'none',
                    data: data.nodes, //b
                    links: data.links,
                    itemStyle: {
                        normal: {
                            borderWidth: 0.5,
                            borderColor: '#878787',
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: '#89eedf' // 0% 处的颜色
                                }, {
                                    offset: 1, color: '#00bbf0' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            }
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: '#2d70ae',
                            curveness: 0.5,
                            opacity: 0.3,
                            shadowBlur: 20,
                            shadowColor: '#fff',
                            shadowOffsetX: 0,
                            shadowOffsetY: 0
                        },
                        emphasis: {
                            color: '#cdcdcd',
                            opacity: 0.2,
                            curveness: 0.5,
                            shadowBlur: 20,
                            shadowColor: 20,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            offset: [0][0],
                            // //formatter: '{b}:{a}',
                            // formatter: function (data, ticket, callback) {
                            //     var res = data.nodes + data.links;
                            //     return res;
                            // },
                            textStyle: {
                                color: '#a2dbbd',
                                fontStyle: 'normal',
                                fontWeight: 'bold',
                                fontFamily: 'sans-serif',
                                fontSize: 18
                            }
                        }
                    }
                }]
            };
            myChart_sankey.setOption(option_sankey);
        })();

        /*
         * 右上 - 天然气近期柱状图
         * */
        (function () {
            var myChart = echarts.init(document.getElementById('gas_bar'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;

            var option = {
                color:[
                    '#78fff0',
                    '#005792',
                    '#00BBF0',
                    '#0074E4',
                    '#D9FAFF',
                ],
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    },
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#fff',
                        fontSize: 22
                    }
                },
                legend: {
                    data:['国家农业科技展示园','中粮智慧农场','东营园区','贵州园区'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: windowWidth > 1600?17:13
                    }
                },
                grid: {
                    top:'8%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        data : ['一月','二月','三月','四月','五月','六月'],
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        }
                    }
                ],
                series : [
                    {
                        name:'国家农业科技展示园',
                        type:'bar',
                        data:[320, 332, 301, 334, 390, 330],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                                // color: new echarts.graphic.LinearGradient(
                                //     0, 0, 0, 1,
                                //     [
                                //         {offset: 0, color: '#14c8d4'},
                                //         {offset: 1, color: '#43eec6'}
                                //     ]
                                // )
                            }
                        }
                    },
                    {
                        name:'中粮智慧农场',
                        type:'bar',
                        stack: '天然气用量',
                        data:[120, 132, 101, 134, 90, 230],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,

                            }
                        }
                    },
                    {
                        name:'东营园区',
                        type:'bar',
                        stack: '天然气用量',
                        data:[220, 182, 191, 234, 290, 330],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,

                            }
                        }
                    },
                    {
                        name:'贵州园区',
                        type:'bar',
                        data:[362, 418, 564, 626, 779, 800],
                        markLine : {
                            lineStyle: {
                                normal: {
                                    type: 'dashed'
                                }
                            },
                            data : [
                                [{type : 'min'}, {type : 'max'}]
                            ]
                        },
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,

                            }
                        }
                    },

                ]
            };
            myChart.setOption(option);
        })();


        /*
         右下 - 用水量近期柱状图
         * */
        (function () {
            var myChart_water_bar = echarts.init(document.getElementById('water_bar'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;

            var water_bar = {
                color:[
                    '#78fff0',
                    '#005792',
                    '#00BBF0',
                    '#0074E4',
                    '#D9FAFF',
                ],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    },
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#fff',
                        fontSize: 22
                    }
                },
                legend: {
                    data: ['国家农业科技展示园', '中粮智慧农场', '东营园区', '贵阳园区'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: windowWidth > 1600?17:13
                    }
                },
                grid: {
                    top: '8%',
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: {
                    type: 'value',
                    boundaryGap: [0, 0.01],
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                },
                yAxis: {
                    type: 'category',
                    data: ['一月','二月','三月','四月','五月','六月'],
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    }
                },
                series: [
                    {
                        name: '国家农业科技展示园',
                        type: 'bar',
                        data: [8203, 35489, 45879, 114970, 91744, 30230],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                                // color: new echarts.graphic.LinearGradient(
                                //     0, 0, 0, 1,
                                //     [
                                //         {offset: 0, color: '#14c8d4'},
                                //         {offset: 1, color: '#43eec6'}
                                //     ]
                                // )
                            }
                        }
                    },
                    {
                        name: '中粮智慧农场',
                        type: 'bar',
                        data: [9325, 34538, 69852, 21594, 34141, 81807],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                                // color: new echarts.graphic.LinearGradient(
                                //     0, 0, 0, 1,
                                //     [
                                //         {offset: 0, color: '#14c8d4'},
                                //         {offset: 1, color: '#43eec6'}
                                //     ]
                                // )
                            }
                        }
                    },
                    {
                        name: '东营园区',
                        type: 'bar',
                        data: [88325, 58438, 50000, 121594, 54141, 61807],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                                // color: new echarts.graphic.LinearGradient(
                                //     0, 0, 0, 1,
                                //     [
                                //         {offset: 0, color: '#14c8d4'},
                                //         {offset: 1, color: '#43eec6'}
                                //     ]
                                // )
                            }
                        }
                    },
                    {
                        name: '贵阳园区',
                        type: 'bar',
                        data: [93425, 88438,60000, 90000, 52141, 71807],
                        itemStyle: {
                            normal: {
                                barBorderRadius: 10,
                                // color: new echarts.graphic.LinearGradient(
                                //     0, 0, 0, 1,
                                //     [
                                //         {offset: 0, color: '#14c8d4'},
                                //         {offset: 1, color: '#43eec6'}
                                //     ]
                                // )
                            }
                        }
                    }
                ]
            };
            myChart_water_bar.setOption(water_bar);
        })();



    }]);

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