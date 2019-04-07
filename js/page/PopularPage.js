import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ListView} from 'react-native';


type Props = {};
export default class PopularPage extends Component<Props> {
    constructor(props) {
        super(props);
        let listDates = [
            {id: 0, title: '肖 申 克 的 救 赎', time: '2019-4-7', category: 'JavaScript', skim: 45},
            {id: 1, title: '霸 王 别 姬', time: '2019-4-7', category: 'JavaScript', skim: 45},
            {id: 2, title: '这 个 杀 手 不 太 冷', time: '2019-4-7', category: 'JavaScript', skim: 45},
            {id: 3, title: '阿 甘 正 传', time: '2019-4-7', category: 'JavaScript', skim: 45},
            {id: 4, title: '美 丽 人 生', time: '2019-4-7', category: 'JavaScript', skim: 45},
        ];
        let dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2

        });
        this.state = {
            listDates: dataSource.cloneWithRows(listDates)
        }
    }
    renderlistDates (rowData, sectionID, rowID, highlightRow) {
        return (
            <View>
                <Text>{rowData.title}</Text>
            </View>
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
        borderColor: 'red',
    },
});
