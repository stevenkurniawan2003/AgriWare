import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Text,StatusBar} from 'react-native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import LogoSplashScreen from '../assets/logofix.png';

 const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('WelcomeScreen');
        }, 3000)
    }, [navigation]);

    return (
        <View style = {styles.containerStyle}>
            <StatusBar backgroundColor={'#ABBA7C'} barStyle={'light-content'}/>
            <View style={{ alignItems:'center',marginTop:40 }} >
                <Text style={{ fontSize:40,fontWeight:'bold',color:'#3e6b3a' }} >Agriware</Text>
            </View>
            <Image style = {styles.splashScreen} source = {LogoSplashScreen}/>
            <Text style={styles.Text}>Version 1.0</Text>
        </View>
    )
}
export default Splash;

const styles = StyleSheet.create({
    containerStyle : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor:'#ABBA7C'
    },
    splashScreen : {
        width : 100,
        height : 100,
        marginTop : responsiveHeight(30),
        resizeMode : 'stretch'
    },
    Text : {
        color : '#3e6b3a',
        fontWeight : 'bold',
        fontSize : 12,
        marginTop : responsiveHeight(40)
    }
})

