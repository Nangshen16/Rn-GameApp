import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Button, Text, Image, Dimensions, ScrollView, SafeAreaView} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constant/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style = {styles.screen}>
                    <TitleText>The Game is Over!</TitleText>
                    <View style={styles.imageContainer}>
                    <Image  
                // source={('../assets/reactApp.png')}  */}
                     source={{uri: 'https://q-xx.bstatic.com/images/hotel/max1024x768/224/224447518.jpg'}} 
                     style={styles.image} resizeMode="cover"/>
                    </View>
                    <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>Your phone needed{''} <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to the guess the number {''}<Text style={styles.highlight}>{props.userNumber}</Text>.</BodyText>
                   </View>
                   <MainButton onPress={props.onRestart}>
                     NEW GAME
                  </MainButton>
                </View>
            </ScrollView>
        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'OpenSans-Bold',
        paddingVertical: 10
    },
    imageContainer:{
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7/2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height/ 30

    },
    image: {
        width: '100%',
        height: '100%',
        
    },
    resultContainer: {
        marginHorizontal: 20,
        marginVertical: Dimensions.get('window').height/60
        
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'OpenSans-Bold',
        textAlign: 'center'
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height<400? 16: 20
    }

});


export default GameOverScreen;