'use strict'; //js文件的生命 使用严格模式
import React, {Component} from 'react'; //导入React的依赖
import {AppRegistry, StyleSheet, Text, View} from 'react-native'; //从react-native包中导入我们需要用的控件，这些控件都是fb官方帮我们在js端封装过的，对应的在native端也已经按照规则暴露并注册过了即在2.4的getPackages()中我们z注册的MainReactPackage


/**
 * state实践例子
 */
class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { showText: true };

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}



/**
 * props实践例子
 */

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}!</Text>
        );
    }
}


class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Rexxar'/>
                <Greeting name='Jaina'/>
                <Greeting name='Valeera'/>
            </View>
        );
    }
}


/*
 * JS端注册要暴漏出去的组件 前边引号内的名字需要与我们
 * 在Native端声明的要加载到native端的组件名字（2.4步骤中getMainComponentName）相同
 * */
AppRegistry.registerComponent('RNFirstComponent', () => BlinkApp);
