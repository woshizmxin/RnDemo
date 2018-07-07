'use strict'; //js文件的生命 使用严格模式
import React from 'react'; //导入React的依赖
import { AppRegistry, StyleSheet, Text, View } from 'react-native'; //从react-native包中导入我们需要用的控件，这些控件都是fb官方帮我们在js端封装过的，对应的在native端也已经按照规则暴露并注册过了即在2.4的getPackages()中我们z注册的MainReactPackage

//JS端要暴露出去的组件，需要继承自Reactcomponent
class RNJSFirstComponent extends React.Component {
    render() { //render函数返回要渲染的布局
        return (
            <View style={styles.container}>
            <Text style={styles.textsty}>Hi Jamal</Text>
            </View> )
            }
        }
//定义的styleSheet 以便布局中引用
var styles = StyleSheet.create({
                                container: { flex: 1, justifyContent: 'center', },
                                textsty: { fontSize: 20, textAlign: 'center', margin: 10, },
                                    });
//JS端注册要暴漏出去的组件 前边引号内的名字需要与我们在Native端声明的要加载到native端的组件名字（2.4步骤中getMainComponentName）相同
AppRegistry.registerComponent('RNFirstComponent', () => RNJSFirstComponent);
