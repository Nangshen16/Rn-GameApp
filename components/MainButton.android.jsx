import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform} from 'react-native';

import Colors from '../constant/colors';

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;


    if(Platform.Version === 'android' && Platform.Version >=21){
        ButtonComponent = TouchableNativeFeedback;
    }
    return (
        <View style= {styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.2} onPress= {props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                         {props.children} 
                    </Text>
                </View>
            </ButtonComponent>
        </View>
    );

};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 35

    },
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden'

    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 8

    }
});


export default MainButton;