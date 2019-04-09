import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';
import MaterialIcons from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import NavigationUtil from "../navigator/NavigationUtil";
const TABS={
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor, focus}) => (
                <MaterialCommunityIcons
                    name={'heart-multiple-outline'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: ({tintColor, focus}) => (
                <AntDesign
                    name={'earth'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: '消息',
            tabBarIcon: ({tintColor, focus}) => (
                <AntDesign
                    name={'message1'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focus}) => (
                <AntDesign
                    name={'user'}
                    size={26}
                    style={{color: tintColor}}
                />
            ),

        }
    },
}
export default class DynamicTabNavigator extends Component<Props> {
    _tabnavigator() {
        const {PopularPage,TrendingPage,FavoritePage,MyPage}=TABS;
        const tabs={PopularPage,TrendingPage,FavoritePage};
        return createBottomTabNavigator(tabs);
    }

    render() {
        NavigationUtil.navigation=this.props.navigation;
        const Tab = this._tabnavigator();
        return <Tab/>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});
