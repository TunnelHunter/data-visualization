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
