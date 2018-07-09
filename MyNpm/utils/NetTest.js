import { Text, AsyncStorage, ToastAndroid} from "react-native";
import React, {Component} from 'react'; //导入React的依赖
import NetUtils from "./NetUtils";

export default class NetTest extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

        //加载数据
        var url = 'https://api.douban.com/v2/book/1220562';
        NetUtils.get(url, null, (result) => {
            ToastAndroid.show(result.toString(), ToastAndroid.SHORT);
        });
    };

    render() {
        return (
            <Text>Hi The World</Text>
        );
    }
}