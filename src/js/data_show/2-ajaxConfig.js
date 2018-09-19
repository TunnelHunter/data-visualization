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