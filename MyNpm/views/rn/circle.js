import React, { Component } from 'react';
import {
    View,
    requireNativeComponent,
    processColor  // 字符Color转换为数字
} from 'react-native';

//requireNativeComponent函数中的第一个参数就是刚刚CircleManager.getName返回的值。
const RCTCircle = requireNativeComponent('MCircle', {
});
 module.exports=RCTCircle;