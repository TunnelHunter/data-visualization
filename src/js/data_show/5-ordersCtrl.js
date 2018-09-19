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
