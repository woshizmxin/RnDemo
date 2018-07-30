import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class TopIcons extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Image style={styles.iconImg} source={require('../img/food.png')}/>
                    <Text style={styles.iconText}>美食</Text>
                </View>

                <View style={styles.item}>
                    <Image style={styles.iconImg} source={require('../img/movie.png')}/>
                    <Text style={styles.iconText}>电影</Text>
                </View>

                <View style={styles.item}>
                    <Image style={styles.iconImg} source={require('../img/inn.png')}/>
                    <Text style={styles.iconText}>酒店</Text>
                </View>

                <View style={styles.item}>
                    <Image style={styles.iconImg} source={require('../img/takeout.png')}/>
                    <Text style={styles.iconText}>外卖</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: width,
        alignItems: 'center',
        height: 70,
    },
    iconText: {
        fontSize: 14,
        color:'#444',
        marginTop:2
    },
    iconImg: {
        height: 30,
        width: 30
    },
    item: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
});
