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
