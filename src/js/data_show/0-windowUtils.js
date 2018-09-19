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