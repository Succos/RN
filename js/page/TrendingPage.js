import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView, Image, TouchableOpacity} from 'react-native';
import request from '../common/request';
export default class TrendingPage extends Component<Props> {
    constructor(props) {
        super(props);
        let dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.state = {
            listDates: dataSource
        }
    }
    componentDidMount(){
        this.getMoviesFromApiAsync();
    }

    getMoviesFromApiAsync() {
        return request.get('http://rap2api.taobao.org/app/mock/164534/list').then((data)=>{
            this.setState({
                listDates:this.state.listDates.cloneWithRows(data.data)
            })
        })
    }

    renderlistDates(rowData, sectionID, rowID, highlightRow) {
        return (
            <TouchableOpacity>
                <View style={styles.cellViewStyle}>
                    {/* 左边的图片*/}
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:rowData.thump}} style={{width: 26, height: 26}}/>
                    </View>
                    {/* 右边的数据*/}
                    <View style={styles.rightViewStyle}>
                        {/* 上边的标题*/}
                        <View>
                            <Text style={styles.titleStyle}>{rowData.title}</Text>
                            {/* 下边的数据*/}
                            <Text style={styles.itemViewStyle}>{rowData.time}</Text>
                        </View>
                        <View style={styles.bottomViewStyle}>
                            <Text style={styles.itemViewStyle}>{rowData.category}</Text>
                            <Text style={styles.itemViewStyle}>{rowData.skim}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.listDates}
                    renderRow={this.renderlistDates}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,

    },
    cellViewStyle: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    leftViewStyle: {
        flex:0.2,
        justifyContent:'center',
        alignItems:'center'

    },
    rightViewStyle: {
        flex:0.8,
        borderColor:'rgba(100,53,201,0.1)',
        borderBottomWidth: 1
    },
    bottomViewStyle: {
        flexDirection: 'row'
    },
    itemViewStyle: {
        marginRight: 26
    },
    titleStyle:{
        fontWeight:'bold'
    }
});
