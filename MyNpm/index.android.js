import {AppRegistry, Text, AsyncStorage, ToastAndroid} from "react-native";
import React, {Component} from 'react'; //导入React的依赖
import NetTest from "./utils/NetTest";


AppRegistry.registerComponent('RNFirstComponent', () => NetTest);
