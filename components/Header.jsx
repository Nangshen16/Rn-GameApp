import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../constant/colors';
import TitleText from './TitleText';

const Header = props => {
   return (
       <View style={styles.Header}>
           <Text style={styles.headerTitle}>{props.title}</Text>
       </View>
   )
};

const styles = StyleSheet.create({
    Header: {
        color: 'red',
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'

    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'open-sans'

    }
});

export default Header;