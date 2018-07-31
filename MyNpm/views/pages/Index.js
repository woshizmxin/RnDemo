'use strict'; //js文件的生命 使用严格模式
import React, {Component} from 'react'; //导入React的依赖
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import StoryList from "../components/StoryList";
import TopIcons from "../components/TopIcons";
import MmBanner from "../components/MmBanner";
import RCTCircle from '../rn/circle';


const {screenWidth, screenHeight} = Dimensions.get('window');


export default class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <MmBanner style={styles.MmBanner}/>
                <TopIcons style={styles.topIcons}/>
                <View style={styles.divideLine}/>
                <StoryList style={styles.StoryList}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    divideLine: {
        width: screenWidth,
        height: 0.3,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#ccc'
    },
    topIcons: {
        height: 70
    },
    StoryList: {},
    MmBanner: {},
});
