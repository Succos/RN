import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


import {createMaterialTopTabNavigator} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {};
export default class PopularPage extends Component<Props> {
    render() {
        const TabNavigator = createMaterialTopTabNavigator({
            PopularTab1: {
                screen: PopularTap,
                navigationOptions: {
                    title: 'Tab1'
                }
            },
            PopularTab2: {
                screen: PopularTap,
                navigationOptions: {
                    title: 'Tab2'
                }
            }
        });
        return <View style={{flex: 1}}>
            <TabNavigator/>
        </View>
    }
}

class PopularTap extends Component {
    render() {
        const {tabLabel} = this.props
        return (
            <View>
                <Text>{tabLabel}</Text>
                <Text onPress={() => {
                    NavigationUtil.goPage({navigation: this.props.navigation}, 'DetailPage')
                }}>跳转到详情</Text>
            </View>
        )
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
