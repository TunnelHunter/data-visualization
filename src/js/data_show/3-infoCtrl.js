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
