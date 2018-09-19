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