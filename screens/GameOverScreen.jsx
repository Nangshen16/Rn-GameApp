import React from 'react';
import {View, StyleSheet, Button, Text, Image} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constant/colors';

const GameOverScreen = props => {
    return (
        <View style = {styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image  source={require('../assets/reactApp.png')} 
            // fadeDuration={1000} source={{uri: 'https://q-xx.bstatic.com/images/hotel/max1024x768/224/224447518.jpg'}} 
            style={styles.image} resizeMode="cover"/>
        </View>
        <View style={styles.resultContainer}>

            <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{props.userNumber}</Text> rounds to the guess the number<Text> {props.userNumber}</Text></BodyText>

        </View>
            

            
            <Button title="NEW GAME" onPress={props.onRestart}/>
        </View>
    )

};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'OpenSans-Bold'
    },
    imageContainer:{
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
         overflow: 'hidden',
         marginVertical: 30

    },
    image: {
        width: '100%',
        height: '100%',
        
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: 15
        
    },
    highlight: {
        color: Colors.primary,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }

});


export default GameOverScreen;