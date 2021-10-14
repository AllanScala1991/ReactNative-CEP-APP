import React, {useState} from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

export default function (nav) {

    const [getCep, setCep] = useState("")
    const [cepInfo, setCepInfo] = useState("")
    const [place, setPlace] = useState("")
    const [district, setDistrict] = useState("")
    const [city, setCity] = useState("")
    const [uf, setUf] = useState("")

    const cepAPI = async (cep: string) => {
        try {
            let response = await fetch(
                `https://viacep.com.br/ws/${cep}/json/`,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: 'GET'
                }
            )

            let json = await response.json()

            setCep("")

            setCepInfo(json.cep)       

            setPlace(json.logradouro)

            setDistrict(json.bairro)

            setCity(json.localidade)

            setUf(json.uf)

        } catch (error) {
            alert(error)
        }
    }

    return(
        <View style={style.container}>
            <Text style={style.label}>Insira um CEP válido</Text>

            <TextInput
                style={style.inputs}
                onChangeText={cep => setCep(cep)}
                value={getCep}
                maxLength={8}
                keyboardType='number-pad'
            />

            <TouchableOpacity
                style={style.button}
                onPress={() => cepAPI(getCep)}
            >
                <Text style={style.buttonText}>BUSCAR</Text>
            </TouchableOpacity>

            <View style={style.infoContainer}>
                <Text style={style.infoText}>CEP:</Text>
                <Text style={style.infoResult}>{cepInfo}</Text>
            </View>

            <View style={style.infoContainer}>
                <Text style={style.infoText}>Logradouro:</Text>
                <Text style={style.infoResult}>{place}</Text>
            </View>

            <View style={style.infoContainer}>
                <Text style={style.infoText}>Bairro:</Text>
                <Text style={style.infoResult}>{district}</Text>
            </View>

            <View style={style.infoContainer}>
                <Text style={style.infoText}>Localidade:</Text>
                <Text style={style.infoResult}>{city}</Text>
            </View>

            <View style={style.infoContainer}>
                <Text style={style.infoText}>UF:</Text>
                <Text style={style.infoResult}>{uf}</Text>
            </View>
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

    label: {
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10
    },

    inputs: {
        width: '70%',
        height: '6%',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 40,
        fontSize: 18,
        textAlign: 'center'
    },

    button: {
        width: '70%',
        height: '7%',
        backgroundColor: '#1597E5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 50
    },
    
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white'
    },

    infoContainer: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 20
    },

    infoText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#1597E5',
        marginRight: 10,
        width: '30%',
        textDecorationLine: 'underline'
    },

    infoResult: {
        fontSize: 17,
        fontWeight: 'bold',
    }
})