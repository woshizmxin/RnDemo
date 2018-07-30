import React , { Component } from 'react';
import {
    View,
    Image,
    BackHandler,
    Platform,
} from 'react-native';

import Login from './Login'
import NetTest from '../../utils/NetTest'


/**
 * 启动界面
 */

let navigator;

export default class Splash extends Component{

    constructor(props){
        super(props);
        navigator = this.props.navigator;
    }


    componentWillMount() {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }
    componentWillUnMount() {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid() {
        if (navigator) {
            let routes = navigator.getCurrentRoutes();
            if (routes.length > 3) {
                navigator.pop();
                return true;
            }
        }
        return false;
    }

    componentDidMount(){
        setTimeout(() => {
            const navigator = this.props.navigator;
            if(navigator){
                navigator.push({
                    name:'登录界面',
                    component:Login,
                    params:{
                        data:'login test',
                    }
                });
            }
        },200);
    }

    render(){
        return (
            <View style={{flex:1}}>
                <Image source={require('../img/hi.jpeg')}></Image>
            </View>
        );
    }
}
