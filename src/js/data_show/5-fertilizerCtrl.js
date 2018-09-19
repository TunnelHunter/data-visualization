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
