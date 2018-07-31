'use strict'; //js文件的生命 使用严格模式
import React, {Component} from 'react'; //导入React的依赖
import {
    View,
    Image,
    StyleSheet,
    Dimensions,
    processColor,
    NativeModules
} from 'react-native';
import RCTCircle from '../rn/circle';


const {screenWidth, screenHeight} = Dimensions.get('window');


export default class My extends Component {
    render() {
        let rnToastAndroid = NativeModules.ToastByAndroid;
        //1. 调原生代码
        rnToastAndroid.getPackageName();
        // 2. 调原生代码，并拿到值；
        rnToastAndroid.tryCallBack("luo", "131", (errorCallback) => {
            alert(errorCallback)
        }, (successCallback) => {
            alert(successCallback);
        });
        //3. Promise ES6 语法实现回调
        rnToastAndroid.tryPromise('luo', '131').then((map)=> {
            alert(map['user_id']);}, (code, message)=> {
            alert(message);
        });

        return (
            <View style={styles.container}>
                <RCTCircle style={styles.RCTCircle}
                           color={processColor('#ff0000')}
                           radius={50}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    RCTCircle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
});