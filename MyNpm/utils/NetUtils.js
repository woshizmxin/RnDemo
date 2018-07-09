import React, {Component} from 'react';

//这里引入了一个md5加密的库，Github https://github.com/kmend/react-native-md5
//引入方式很简单，npm install react-native-md5 --save
//然后打开项目的package.json 查看，发现此时多了一个依赖

import MD5 from "react-native-md5";
import {
    ToastAndroid,
} from 'react-native';


/**
 * 网络请求的工具类
 */
export default class NetUtils extends Component {


    //构造函数，默认的props，以及state 都可以在这里初始化了
    constructor(props) {
        super(props);
    }

    /**
     * 普通的get请求
     * @param {*} url 地址
     * @param {*} params  参数
     * @param {*} callback  成功后的回调
     */
    static get(url, params, callback) {
        fetch(url, {
            method: 'GET',
            body: params
        })
            .then((response) => {
                if (response.ok) {//如果相应码为200
                    return response.json(); //将字符串转换为json对象
                }
            })
            .then((json) => {
                callback(json);
            }).catch(error => {
            ToastAndroid.show("netword error", ToastAndroid.SHORT);
        });
    };

    /**
     * post key-value 形式 hader为'Content-Type': 'application/x-www-form-urlencoded'
     * @param {*} url
     * @param {*} service
     * @param {*} params
     * @param {*} callback
     */
    static post(url, service, params, callback) {
        //添加公共参数
        var newParams = this.getNewParams(service, params);//接口自身的规范，可以忽略

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'//key-value形式
            },
            body: newParams
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((json) => {
                callback(json);
            }).catch(error => {
            alert(error);
            //ToastAndroid.show("netword error",ToastAndroid.SHORT);
        });
    };

    /**
     * post json形式  header为'Content-Type': 'application/json'
     * @param {*} url
     * @param {*} service
     * @param {*} jsonObj
     * @param {*} callback
     */
    static postJson(url, service, jsonObj, callback) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            },
            body: JSON.stringify(jsonObj),//json对象转换为string
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((json) => {
                callback(json);
            }).catch(error => {
            ToastAndroid.show("netword error", ToastAndroid.SHORT);
        });
    };

    /**
     * 获取当前系统时间 yyyyMMddHHmmss
     */
    static getCurrentDate() {
        var space = "";
        var dates = new Date();
        var years = dates.getFullYear();
        var months = dates.getMonth() + 1;
        if (months < 10) {
            months = "0" + months;
        }

        var days = dates.getDate();
        if (days < 10) {
            days = "0" + days;
        }

        var hours = dates.getHours();
        if (hours < 10) {
            hours = "0" + hours;
        }

        var mins = dates.getMinutes();
        if (mins < 10) {
            mins = "0" + mins;
        }

        var secs = dates.getSeconds();
        if (secs < 10) {
            secs = "0" + secs;
        }
        var time = years + space + months + space + days + space + hours + space + mins + space + secs;
        return time;
    };

    /**
     * 设置公共参数
     * @param {*} service  服务资源类型
     * @param {*} oldParams 参数 key-value形式的字符串
     * @return 新的参数
     */
    static getNewParams(service, oldParams) {
        var newParams = "";
        var currentDate = this.getCurrentDate();
        var MD5KEY = "XXXXXX";
        var digestStr = MD5KEY + service + currentDate + MD5KEY;
        newParams = oldParams + "&timestamp=" + currentDate + "&digest=" + this.MD5(digestStr);
        return newParams;
    };

    /**
     * 字符串加密
     * @param {*} str
     */
    static MD5(str) {
        return MD5.hex_md5(str);
    };


    /**
     * 获取当前系统时间 yyyyMMddHH
     */
    static getCurrentDateFormat() {
        var space = "";
        var dates = new Date();
        var years = dates.getFullYear();
        var months = dates.getMonth() + 1;
        if (months < 10) {
            months = "0" + months;
        }

        var days = dates.getDate();
        if (days < 10) {
            days = "0" + days;
        }
        var time = years + space + months + space + days;
        return time;
    };
}