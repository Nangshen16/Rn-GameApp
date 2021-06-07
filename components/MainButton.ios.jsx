import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

import Colors from '../constant/colors';

const MainButton = props => {
    
    return (
        
            <TouchableOpacity activeOpacity={0.2} onPress= {props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                         {props.children} 
                    </Text>
                </View>
            </TouchableOpacity>
       
    )

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 35

    },
    
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 8

    }
});


export default MainButton;