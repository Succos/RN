import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';


import {createMaterialTopTabNavigator} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';
type Props = {};
export default class PopularPage extends Component<Props> {
    constructor(props){
        super(props);
        this.tabNams=['javascript','java','php','react','java','php','react'];
    }
    _getTabs(){
        const tabs={};
        this.tabNams.forEach((item,index)=>{

            tabs[`tabs${index}`]={
                screen:PopularTap,
                navigationOptions: {
                    title: item
                }
            }
        });
        console.log(tabs);
        return tabs;
    }
    render() {

        const TabNavigator = createMaterialTopTabNavigator(this._getTabs(),{
            tabBarOptions:{
                tabStyle:styles.tabStyle,
                upperCaseLabel:false,
                scrollEnabled:true,
                style:{
                    backgroundColor: 'green'
                },
                indicatorStyle:styles.indicatorStyle,
                labelStyle:styles.labelStyle
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
    tabStyle:{
        minWidth:30
    },
    indicatorStyle:{
        height:2,
        backgroundColor:'#FFFFFF'
    },
    labelStyle:{
        fontSize: 13,
        marginTop:6
    }
});
