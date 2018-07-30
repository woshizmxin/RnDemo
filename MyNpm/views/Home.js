import React, {Component} from 'react';
import {
    Text,
    Image,
    View,
    BackAndroid,
    Platform, StyleSheet,
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Index from './pages/Index';
import Find from './pages/Find';
import My from './pages/My';

/**
 * 主界面
 */



export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'index',//默认选中首页
        };
    }

    render() {
        return (
            <TabNavigator
                tabBarStyle={style.tab}
                sceneStyle={style.sceneStyle}
                tabBarShadowStyle={style.tabBarShadow}>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'index'}
                    title="首页"
                    titleStyle={style.tabText}
                    renderIcon={() => <Image style={style.Image} source={require('./img/ic_home_index.png')}/>}
                    selectedTitleStyle={style.selectedTabText}
                    renderSelectedIcon={() => <Image style={style.Image}
                                                     source={require('./img/ic_home_index_pressed.png')}/>}
                    onPress={() => this.setState({selectedTab: 'index'})}>
                    {
                        <View style={{flex: 1}}>
                            <Index {...this.props} ></Index>
                        </View>
                    }
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'find'}
                    title="保险"
                    selectedTitleStyle={style.selectedTabText}
                    renderIcon={() => <Image style={style.Image} source={require('./img/ic_home_find.png')}/>}
                    renderSelectedIcon={() => <Image style={style.Image}
                                                     source={require('./img/ic_home_find_pressed.png')}/>}
                    onPress={() => this.setState({selectedTab: 'find'})}>
                    {
                        <View style={{flex: 1}}>
                            <Find {...this.props}></Find>
                        </View>
                    }
                </TabNavigator.Item>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'my'}
                    title="我的"
                    selectedTitleStyle={style.selectedTabText}
                    renderIcon={() => <Image style={style.Image} source={require('./img/ic_home_my.png')}/>}
                    renderSelectedIcon={() => <Image style={style.Image}
                                                     source={require('./img/ic_home_my_pressed.png')}/>}
                    onPress={() => this.setState({selectedTab: 'my'})}>
                    {
                        <View style={{flex: 1}}>
                            <My {...this.props}></My>
                        </View>
                    }
                </TabNavigator.Item>
            </TabNavigator>
        );
    };
}

var style = StyleSheet.create({
    Image: {
        height: 20,
        width: 20
    },
    tab: {
        backgroundColor: '#fff',
        alignItems: 'center',
        height: 50,
        overflow: 'hidden',
    },
    sceneStyle:{
        paddingBottom: 0
    },
    selectedTabText:{
        marginTop: 1,
        color: '#ff6633',
        fontSize: 12
    },
    tabText:{
        fontSize: 12
    }
});
