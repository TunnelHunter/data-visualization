app.controller('environmentCtrl', ['$scope', '$rootScope', '$http', 'ajax_factoryIndex', '$timeout'
    , function ($scope, $rootScope, $http, ajax_factoryIndex, $timeout) {

        var N_fertilizer_bar = echarts.init(document.getElementById('N_fertilizer_bar'));
        var windowWidth = window.document.body.clientWidth || window.document.documentElement.clientWidth;
        var base = +new Date();
        var today = new Date();
        var oneDay = 24 * 3600 * 1000;
        var five_min = 5 * 1000;
        var date = [];

        var data1 = [Math.random() * 300];
        var data2 = [Math.random() * 300];
        var data3 = [Math.random() * 300];
        var data4 = [Math.random() * 300];

        for (var i = 1; i < 90; i++) {
            var now = new Date(base -= five_min);
            date.unshift([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

        }

        for (var i = 1; i < 90; i++) {
            data1.unshift(Math.round((Math.random() - 0.5) * 20 + data1[i - 1]));
            data2.unshift(Math.round((Math.random() - 0.5) * 20 + data2[i - 1]));
            data3.unshift(Math.round((Math.random() - 0.5) * 20 + data3[i - 1]));
            data4.unshift(Math.round((Math.random() - 0.5) * 20 + data4[i - 1]));
        }


        var option_N_fertilizer_bar = {
            tooltip: {
                trigger: 'axis',
                // position: function (pt) {
                //     return [pt[0], '10%'];
                // },
                textStyle: {
                    fontWeight: 'normal', //标题颜色
                    color: '#fff',
                    fontSize: windowWidth > 2500 ? 45 : 22
                }
            },
            legend: {
                data: ['温度', '湿度', '光照', 'CO2'],
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: windowWidth > 2500 ? 35 : 17
                }
            },
            grid: {
                top: '8%',
                left: '3%',
                right: '4%',
                bottom: '10%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date,
                axisLine: {
                    lineStyle: {
                        color: '#fff'
                    }
                },
                axisLabel: {
                    fontSize: windowWidth > 2500 ? 30 : 13
                }
            },
            yAxis: [
                {

                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }
                },
                {

                    nameLocation: 'start',
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }

                }
            ],
            dataZoom: [{
                type: 'inside',
                start: 50,
                end: 100
            }, {
                start: 50,
                end: 100,
                dataBackground: {
                    areaStyle: {
                        color: '#22d8d2'
                    }

                },
                borderColor: 'rgba(255, 255, 255, .001)',
                bottom: '0.5%',
                textStyle: {
                    color: '#32ba87',
                    fontSize: windowWidth > 2500 ? 30 : 15,
                    fontWeight: 'bold'
                },
                fillerColor: '#2b6580',
                handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                handleSize: windowWidth > 2500 ? '150%' : '80%',
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
                    name: '温度',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: '#2c88a2'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#45EBA5'
                            }, {
                                offset: 1,
                                color: '#1D566E'
                            }])
                        }
                    },
                    data: data1
                },
                {
                    name: '湿度',
                    type: 'line',
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: '#2c88a2'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#45EBA5'
                            }, {
                                offset: 1,
                                color: '#1D566E'
                            }])
                        }
                    },
                    data: data2
                },
                {
                    name: '光照',
                    type: 'line',
                    smooth: true,
                    yAxisIndex: 1,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: '#2c88a2'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#45EBA5'
                            }, {
                                offset: 1,
                                color: '#1D566E'
                            }])
                        }
                    },
                    data: data3
                },
                {
                    name: 'CO2',
                    type: 'line',
                    yAxisIndex: 1,
                    smooth: true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: '#2c88a2'
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#45EBA5'
                            }, {
                                offset: 1,
                                color: '#1D566E'
                            }])
                        }
                    },
                    data: data4
                }
            ]
        };

        N_fertilizer_bar.setOption(option_N_fertilizer_bar);


        setInterval(function () {
            date.splice(0,1);
            var now = new Date();
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

            data1.splice(0,1);
            data2.splice(0,1);
            data3.splice(0,1);
            data4.splice(0,1);

            data1.push(Math.round((Math.random() - 0.5) * 20 + data1[0]));
            data2.push(Math.round((Math.random() - 0.5) * 20 + data2[0]));
            data3.push(Math.round((Math.random() - 0.5) * 20 + data3[0]));
            data4.push(Math.round((Math.random() - 0.5) * 20 + data4[0]));

            N_fertilizer_bar.setOption(option_N_fertilizer_bar);
        }, 5000);

        /*
         * 下 - 左 - 钾肥柱状图
         * */

        var K_fertilizer_bar = echarts.init(document.getElementById('K_fertilizer_bar'));


        var date_k = [];

        var data1_k = [Math.random() * 300];
        var data2_k = [Math.random() * 300];
        var data3_k = [Math.random() * 300];
        var data4_k = [Math.random() * 300];

        for (var i = 1; i < 30; i++) {
            var now = new Date(base -= five_min);
            date_k.unshift([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

        }

        for (var i = 1; i < 30; i++) {
            data1_k.unshift(Math.round((Math.random() - 0.5) * 20 + data1_k[i - 1]));
            data2_k.unshift(Math.round((Math.random() - 0.5) * 20 + data2_k[i - 1]));
            data3_k.unshift(Math.round((Math.random() - 0.5) * 20 + data3_k[i - 1]));
            data4_k.unshift(Math.round((Math.random() - 0.5) * 20 + data4_k[i - 1]));
        }
        var option_K_fertilizer_bar = {
            color: [
                '#1D566E',
                '#163A5F',
                '#45EBA5',
                '#21ABA5',

            ],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#1D566E'
                    }
                },
                textStyle: {
                    fontWeight: 'normal', //标题颜色
                    color: '#fff',
                    fontSize: windowWidth > 2500 ? 45 : 22
                }
            },
            legend: {
                data: ['温度', '湿度', '光照', 'CO2'],
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: windowWidth > 2500 ? 35 : 17
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
                    boundaryGap: false,
                    data: date_k,
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }
                }
            ],
            yAxis: [
                {

                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }
                },
                {

                    nameLocation: 'start',
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }

                }
            ],
            series: [
                {
                    name: '温度',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    yAxisIndex: 1,
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data1_k
                },
                {
                    name: '湿度',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data2_k
                },
                {
                    name: '光照',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data3_k
                },
                {
                    name: 'CO2',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data4_k
                }
            ]
        };
        K_fertilizer_bar.setOption(option_K_fertilizer_bar);

        setInterval(function () {
            date_k.splice(0,1);
            var now = new Date();
            date_k.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

            data1_k.splice(0,1);
            data2_k.splice(0,1);
            data3_k.splice(0,1);
            data4_k.splice(0,1);

            data1_k.push(Math.round((Math.random() - 0.5) * 20 + data1_k[0]));
            data2_k.push(Math.round((Math.random() - 0.5) * 20 + data2_k[0]));
            data3_k.push(Math.round((Math.random() - 0.5) * 20 + data3_k[0]));
            data4_k.push(Math.round((Math.random() - 0.5) * 20 + data4_k[0]));

            K_fertilizer_bar.setOption(option_K_fertilizer_bar);
        }, 5000);
        /*
         *下 - 中 - 磷肥柱状图
         * */

        var P_fertilizer_bar = echarts.init(document.getElementById('P_fertilizer_bar'));
        var date_p = [];

        var data1_p = [Math.random() * 300];
        var data2_p = [Math.random() * 300];
        var data3_p = [Math.random() * 300];
        var data4_p = [Math.random() * 300];

        for (var i = 1; i < 30; i++) {
            var now = new Date(base -= five_min);
            date_p.unshift([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

        }

        for (var i = 1; i < 30; i++) {
            data1_p.unshift(Math.round((Math.random() - 0.5) * 20 + data1_p[i - 1]));
            data2_p.unshift(Math.round((Math.random() - 0.5) * 20 + data2_p[i - 1]));
            data3_p.unshift(Math.round((Math.random() - 0.5) * 20 + data3_p[i - 1]));
            data4_p.unshift(Math.round((Math.random() - 0.5) * 20 + data4_p[i - 1]));
        }
        var option_P_fertilizer_bar = {
            color: [
                '#163A5F',
                '#45EBA5',
                '#1D566E',
                '#21ABA5',
            ],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#1D566E'
                    }
                },
                textStyle: {
                    fontWeight: 'normal', //标题颜色
                    color: '#fff',
                    fontSize: windowWidth > 2500 ? 45 : 22
                }
            },
            legend: {
                data: ['温度', '湿度', '光照', 'CO2'],
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: windowWidth > 2500 ? 35 : 17
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
                    boundaryGap: false,
                    data: date_p,
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }
                }
            ],
            yAxis: [
                {

                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }
                },
                {

                    nameLocation: 'start',
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }

                }
            ],
            series: [
                {
                    name: '温度',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data1_p
                },
                {
                    name: '湿度',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data2_p
                },
                {
                    name: '光照',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data3_p
                },
                {
                    name: 'CO2',
                    type: 'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    areaStyle: {normal: {}},
                    data: data4_p
                }
            ]
        };
        P_fertilizer_bar.setOption(option_P_fertilizer_bar);

        setInterval(function () {
            date_p.splice(0,1);
            var now = new Date();
            date_p.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

            data1_p.splice(0,1);
            data2_p.splice(0,1);
            data3_p.splice(0,1);
            data4_p.splice(0,1);

            data1_p.push(Math.round((Math.random() - 0.5) * 20 + data1_p[0]));
            data2_p.push(Math.round((Math.random() - 0.5) * 20 + data2_p[0]));
            data3_p.push(Math.round((Math.random() - 0.5) * 20 + data3_p[0]));
            data4_p.push(Math.round((Math.random() - 0.5) * 20 + data4_p[0]));

            P_fertilizer_bar.setOption(option_P_fertilizer_bar);
        }, 5000);


        /*
         *下 - 右 - CO2柱状图
         * */

        var CO2_bar = echarts.init(document.getElementById('CO2_bar'));

        var date_CO2 = [];

        var data1_CO2 = [Math.random() * 300];
        var data2_CO2 = [Math.random() * 300];
        var data3_CO2 = [Math.random() * 300];
        var data4_CO2 = [Math.random() * 300];

        for (var i = 1; i < 30; i++) {
            var now = new Date(base -= five_min);
            date_CO2.unshift([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

        }

        for (var i = 1; i < 30; i++) {
            data1_CO2.unshift(Math.round((Math.random() - 0.5) * 20 + data1_CO2[i - 1]));
            data2_CO2.unshift(Math.round((Math.random() - 0.5) * 20 + data2_CO2[i - 1]));
            data3_CO2.unshift(Math.round((Math.random() - 0.5) * 20 + data3_CO2[i - 1]));
            data4_CO2.unshift(Math.round((Math.random() - 0.5) * 20 + data4_CO2[i - 1]));
        }

        var option_CO2_bar = {
            color: [
                '#45EBA5',
                '#21ABA5',
                '#1D566E',
                '#163A5F',
            ],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#1D566E'
                    }
                },
                textStyle: {
                    fontWeight: 'normal', //标题颜色
                    color: '#fff',
                    fontSize: windowWidth > 2500 ? 45 : 22
                }
            },
            legend: {
                data: ['温度', '湿度', '光照', 'CO2'],
                textStyle: {
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: windowWidth > 2500 ? 35 : 17
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
                    boundaryGap: false,
                    data: date_CO2,
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }
                }
            ],
            yAxis: [
                {

                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }
                },
                {

                    nameLocation: 'start',
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#fff'
                        }
                    },
                    axisLabel: {
                        fontSize: windowWidth > 2500 ? 30 : 13
                    }

                }
            ],
            series: [
                {
                    name: '温度',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data1_CO2
                },
                {
                    name: '湿度',
                    type: 'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data2_CO2
                },
                {
                    name: '光照',
                    type: 'line',
                    yAxisIndex: 1,
                    stack: '总量',
                    areaStyle: {normal: {}},
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    data: data3_CO2
                },
                {
                    name: 'CO2',
                    type: 'line',
                    yAxisIndex: 1,
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                fontWeight: 'bold',
                                fontSize: windowWidth > 2500 ? 35 : 15
                            }
                        }
                    },
                    areaStyle: {normal: {}},
                    data: data4_CO2
                }
            ]
        };
        CO2_bar.setOption(option_CO2_bar);


        setInterval(function () {
            date_CO2.splice(0,1);
            var now = new Date();
            date_CO2.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-').concat(' ').concat([now.getHours(), now.getMinutes(), now.getSeconds()].join(':')));

            data1_CO2.splice(0,1);
            data2_CO2.splice(0,1);
            data3_CO2.splice(0,1);
            data4_CO2.splice(0,1);

            data1_CO2.push(Math.round((Math.random() - 0.5) * 20 + data1_CO2[0]));
            data2_CO2.push(Math.round((Math.random() - 0.5) * 20 + data2_CO2[0]));
            data3_CO2.push(Math.round((Math.random() - 0.5) * 20 + data3_CO2[0]));
            data4_CO2.push(Math.round((Math.random() - 0.5) * 20 + data4_CO2[0]));

            CO2_bar.setOption(option_CO2_bar);
        }, 5000);


    }]);
