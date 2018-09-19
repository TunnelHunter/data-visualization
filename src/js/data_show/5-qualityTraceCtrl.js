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

