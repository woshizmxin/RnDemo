'use strict'; //js文件的生命 使用严格模式
import React, {Component} from 'react'; //导入React的依赖
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS,
    Dimensions
} from 'react-native';

import StoryCell from './StoryCell'

const {screenWidth, screenHeight} = Dimensions.get('window');

export default class StoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        };
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        fetch('http://guangdiu.com/api/gethots.php')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                        dataSource: this.state.dataSource.cloneWithRows(responseData.data)
                    }
                );
            }).done();
    };

    renderRow(rowData) {
        return (
            <StoryCell
                image={rowData.image}
                title={rowData.title}
            />
        );
    };

    componentDidMount() {
        this.fetchData();
    };

    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}//加载数据
                    renderRow={this.renderRow}
                    showVerticalScrollIndicator={false}
                    style={styles.listviewStyle}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 40
    },
    listviewStyle: {
        width: screenWidth
    }
});