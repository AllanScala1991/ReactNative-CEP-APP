import React from "react";
import { 
    StyleSheet, 
    View, 
    TouchableOpacity, 
    Image, 
    Text 
} from "react-native";

export default function (nav) {
    function accessHome () {
        nav.nav.navigate("Home")
    }

    return (
        <View style={style.container}>
            <Image style={style.logo} source={require('./logo.png')}/>
            <TouchableOpacity 
            style={style.button}
            onPress={accessHome}
            >
                <Text style={style.buttonText}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        backgroundColor: 'white'
    },

    logo: {
        width: '100%',
        height: '30%'
    },

    button: {
        width: '70%',
        height: '8%',
        backgroundColor: '#1597E5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 100
    },
    
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    }
})