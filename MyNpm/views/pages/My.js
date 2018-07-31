'use strict'; //js文件的生命 使用严格模式
import React, {Component} from 'react'; //导入React的依赖
import {
    View,
    Image,
    StyleSheet,
    Dimensions, processColor
} from 'react-native';
import RCTCircle from '../rn/circle';


const {screenWidth, screenHeight} = Dimensions.get('window');


export default class Index extends Component {
    render() {
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
        flex:1,
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',
    }
});