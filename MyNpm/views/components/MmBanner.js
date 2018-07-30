import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image, ListView
} from 'react-native';
import Swiper from 'react-native-swiper';

const {width, height} = Dimensions.get('window');

const images = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533559230&di=915a3a3f41db4be166d498f63dac9bf1&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F15%2F14%2F44%2F42Z58PICMGu_1024.jpg',
    'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1585319616,4257522558&fm=27&gp=0.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532964510924&di=b681b954d85239f496594aab4c48a311&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1311%2F28%2Fc49%2F29113504_1385654152694.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532964510923&di=7098f34b5748170524b37812599fddca&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fxian%2Fpics%2Fhv1%2F196%2F236%2F1839%2F119641351.jpg',
];

export default class MmBanner extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{height:100}}>
                <Swiper
                    height={100}
                    loop={true}
                    autoplay={true}
                    horizontal={true}
                    paginationStyle={{bottom: 5}}
                    showsButtons={false}
                    autoplayTimeout={1.5}
                    style={styles.banner}>
                    {this.renderImg()}
                </Swiper>
            </View>
        );
    }

    renderImg() {
        let imageViews = [];
        for (let i = 0; i < images.length; i++) {
            imageViews.push(
                <Image style={styles.img}
                       key={i}
                       source={{uri: images[i]}}
                />
            );
        }
        return imageViews;
    }
}

const styles = StyleSheet.create({
    banner: {
    },
    img: {
        flex:1,
        justifyContent:'center',
        resizeMode:'stretch',
        alignItems: 'center',
    }
});
