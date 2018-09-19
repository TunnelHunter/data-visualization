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
