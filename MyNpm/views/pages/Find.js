'use strict'; //js文件的生命 使用严格模式
import React, {Component} from 'react'; //导入React的依赖
import {
    Text,
} from 'react-native';
import StoryList from "../components/StoryList";

export default class Find extends Component {
    render() {
        return (<StoryList>
            </StoryList>
        );
    }
}