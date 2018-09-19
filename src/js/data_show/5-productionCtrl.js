app.controller('productionCtrl', ['$scope', '$http', 'ajax_factoryIndex', '$timeout', '$interval'
    , function ($scope, $http, ajax_factoryIndex, $timeout,$interval) {


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

        $scope.show_production_bar1 = true;
        $scope.show_production_bar2 = false;
        $scope.show_production_bar3 = true;
        $scope.show_production_bar4 = false;


        var count = 0;
        var interval = function () {
            if (count == 0) {
                $scope.show_production_bar1 = true;
                $scope.show_production_bar2 = false;
                count++;
                return
            } else if (count == 1) {

                $scope.show_production_bar1 = false;
                $scope.show_production_bar2 = true;
                count++;
                return
            } else if (count == 2) {
                $scope.show_production_bar3 = true;
                $scope.show_production_bar4 = false;
                count++;
                return
            } else if (count == 3) {
                $scope.show_production_bar3 = false;
                $scope.show_production_bar4 = true;
                count = 0;
                return
            }
        };
        $interval(interval,3000);


        /*
         左1 - 国家农业科技展示园 生产图
         * */
        (function () {
            var production_bar1 = echarts.init(document.getElementById('production_bar1'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;

            option = {
                legend: {
                    show: true,
                    data: ['黄瓜', '叶菜', '番茄', '青菜'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: windowWidth > 1600 ? 17 : 13
                    }
                },
                radiusAxis: {
                    type: 'category',
                    data: ['一月', '二月', '三月', '四月', '五月', '六月'],
                    z: 10,
                    axisLine: {
                        lineStyle: {
                            color: '#fff',
                        }
                    },
                },
                angleAxis: {
                    axisLine: {
                        lineStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F6EC66'
                            }, {
                                offset: 1,
                                color: '#F65454'
                            }]),
                            width: 5
                        }
                    },
                    axisLabel: {
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: '#fff'
                    }
                },
                tooltip: {
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#ffffff',
                        fontSize: 22
                    }
                },
                polar: {
                    radius: '85%'
                },
                series: [{
                    type: 'bar',
                    data: [2, 2, 3, 4, 5, 6],
                    coordinateSystem: 'polar',
                    name: '黄瓜',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F65454'
                            }, {
                                offset: 1,
                                color: '#F6EC66'
                            }]),
                            opacity: 1,
                        }
                    }
                }, {
                    type: 'bar',
                    data: [3, 4, 6, 8, 5, 5],
                    coordinateSystem: 'polar',
                    name: '叶菜',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F65454'
                            }, {
                                offset: 1,
                                color: '#F6EC66'
                            }]),
                            opacity: 1,
                        }
                    }
                }, {
                    type: 'bar',
                    data: [3, 2, 3, 4, 5, 4],
                    coordinateSystem: 'polar',
                    name: '番茄',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F6EC66'
                            }, {
                                offset: 1,
                                color: '#F65454'
                            }]),
                            opacity: 1,
                        }
                    }
                }, {
                    type: 'bar',
                    data: [3, 2, 3, 4, 3, 1],
                    coordinateSystem: 'polar',
                    name: '青菜',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F6EC66'
                            }, {
                                offset: 1,
                                color: '#F65454'
                            }]),
                            opacity: 1,
                        }
                    }
                }]
            };
            production_bar1.setOption(option);
        })();
        /*
        左2 - 中粮智慧农场 生产图
        * */
        (function () {
            var production_bar2 = echarts.init(document.getElementById('production_bar2'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;

            option = {
                legend: {
                    show: true,
                    data: ['黄瓜', '叶菜', '番茄', '青菜'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: windowWidth > 1600 ? 17 : 13
                    }
                },
                radiusAxis: {
                    type: 'category',
                    data: ['一月', '二月', '三月', '四月', '五月', '六月'],
                    z: 10,
                    axisLine: {
                        lineStyle: {
                            color: '#fff',
                        }
                    },
                },
                angleAxis: {
                    axisLine: {
                        lineStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F6EC66'
                            }, {
                                offset: 1,
                                color: '#F65454'
                            }]),
                            width: 5
                        }
                    },
                    axisLabel: {
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: '#fff'
                    }
                },
                tooltip: {
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#ffffff',
                        fontSize: 22
                    }
                },
                polar: {
                    radius: '85%'
                },
                series: [{
                    type: 'bar',
                    data: [2, 3, 2, 2, 4, 3],
                    coordinateSystem: 'polar',
                    name: '黄瓜',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F65454'
                            }, {
                                offset: 1,
                                color: '#F6EC66'
                            }]),
                            opacity: 1,
                        }
                    }
                }, {
                    type: 'bar',
                    data: [1, 5, 1, 5, 3, 4],
                    coordinateSystem: 'polar',
                    name: '叶菜',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F65454'
                            }, {
                                offset: 1,
                                color: '#F6EC66'
                            }]),
                            opacity: 1,
                        }
                    }
                }, {
                    type: 'bar',
                    data: [4, 4, 1, 2, 5, 4],
                    coordinateSystem: 'polar',
                    name: '番茄',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F6EC66'
                            }, {
                                offset: 1,
                                color: '#F65454'
                            }]),
                            opacity: 1,
                        }
                    }
                }, {
                    type: 'bar',
                    data: [1, 3, 2, 5, 4, 2],
                    coordinateSystem: 'polar',
                    name: '青菜',
                    stack: 'a',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#F6EC66'
                            }, {
                                offset: 1,
                                color: '#F65454'
                            }]),
                            opacity: 1,
                        }
                    }
                }]
            };
            production_bar2.setOption(option);
        })();


        /*
         右1 - 东营一期 生产图
         * */
        (function () {
            var production_bar3 = echarts.init(document.getElementById('production_bar3'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
            option = {
                angleAxis: {
                    type: 'category',
                    data: ['一月', '二月', '三月', '四月', '五月', '六月'],
                    z: 10,
                    axisLine: {
                        lineStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00fcae'
                            }, {
                                offset: 1,
                                color: '#006388'
                            }]),
                            width: 5
                        }
                    },
                    axisLabel: {
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#fff'
                    }
                },
                legend: {
                    show: true,
                    data: ['黄瓜', '叶菜', '番茄', '青菜'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: windowWidth > 1600 ? 17 : 13
                    }
                },
                tooltip: {
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#ffffff',
                        fontSize: 22
                    }
                },
                radiusAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                },
                polar: {
                    radius: '85%'
                },
                series: [{
                    type: 'bar',
                    data: [1, 2, 3, 4, 3, 5, 1],
                    coordinateSystem: 'polar',
                    name: '黄瓜',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }, {
                    type: 'bar',
                    data: [2, 5, 5, 2, 5, 2, 1],
                    coordinateSystem: 'polar',
                    name: '叶菜',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }, {
                    type: 'bar',
                    data: [1, 2, 3, 4, 1, 2, 5],
                    coordinateSystem: 'polar',
                    name: '番茄',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }, {
                    type: 'bar',
                    data: [1, 5, 3, 4, 5, 5, 7],
                    coordinateSystem: 'polar',
                    name: '青菜',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }]
            };

            production_bar3.setOption(option);
        })();
        /*
         右2 - 贵阳园区 生产图
         * */
        (function () {
            var production_bar4 = echarts.init(document.getElementById('production_bar4'));
            var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
            option = {
                angleAxis: {
                    type: 'category',
                    data: ['一月', '二月', '三月', '四月', '五月', '六月'],
                    z: 10,
                    axisLine: {
                        lineStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00fcae'
                            }, {
                                offset: 1,
                                color: '#006388'
                            }]),
                            width: 5
                        }
                    },
                    axisLabel: {
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: '#fff'
                    }
                },
                legend: {
                    show: true,
                    data: ['黄瓜', '叶菜', '番茄', '青菜'],
                    textStyle: {
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: windowWidth > 1600 ? 17 : 13
                    }
                },
                tooltip: {
                    textStyle: {
                        fontWeight: 'normal', //标题颜色
                        color: '#ffffff',
                        fontSize: 22
                    }
                },
                radiusAxis: {
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                },
                polar: {
                    radius: '85%'
                },
                series: [{
                    type: 'bar',
                    data: [1, 1, 1, 1, 1, 1, 1],
                    coordinateSystem: 'polar',
                    name: '黄瓜',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }, {
                    type: 'bar',
                    data: [2, 2, 2, 2, 2, 2, 2],
                    coordinateSystem: 'polar',
                    name: '叶菜',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }, {
                    type: 'bar',
                    data: [2, 1, 3, 2, 2, 3, 2],
                    coordinateSystem: 'polar',
                    name: '番茄',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }, {
                    type: 'bar',
                    data: [1, 1, 1, 1, 1, 1, 1],
                    coordinateSystem: 'polar',
                    name: '青菜',
                    stack: 'a',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#00fcae'
                    }, {
                        offset: 1,
                        color: '#006388'
                    }]),
                }]
            };

            production_bar4.setOption(option);
        })();


    }]);
