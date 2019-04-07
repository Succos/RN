
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
export default class DetailPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Dege</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth:1,
        borderColor:'red',
    }
});
