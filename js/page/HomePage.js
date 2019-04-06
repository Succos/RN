
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';

import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';
export default class HomePage extends Component<Props> {
    _tabnavigator(){
          return createBottomTabNavigator({
                                              PopularPage:{
                                                  screen:PopularPage
                                              },
                                              TrendingPage:{
                                                  screen:TrendingPage
                                              },
                                              FavoritePage:{
                                                  screen:FavoritePage
                                              },
                                              MyPage:{
                                                  screen:MyPage
                                              },
                                          })
}
    render() {
        const Tab=this._tabnavigator();
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
