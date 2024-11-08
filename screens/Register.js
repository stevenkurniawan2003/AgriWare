import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet, Alert } from 'react-native';
import { auth } from '../config/firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth'; 

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = () => {
        if (email === '' || password === '') {
            Alert.alert('Perhatian!', 'Email dan Password tidak boleh kosong!');
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            
                Alert.alert('Pendaftaran Berhasil!', 'Anda telah berhasil mendaftar.');
                console.log('User registered:', userCredential.user);
              
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                Alert.alert('Pendaftaran Gagal!', errorMessage);
                console.error('Registration error:', errorMessage);
            });
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <StatusBar backgroundColor={'#fafafa'} barStyle={'dark-content'} />

                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                    <Image source={require('../assets/emojik.jpg')} style={styles.logo} />
                </View>

                <Text style={styles.textLogin}>Register</Text>

                <Text style={{ textAlign: 'center' }}>
                    Daftarkan Email Dan Password
                </Text>

                <TextInput
                    value={email}
                    style={styles.textemail}
                    placeholder="Masukkan Email"
                    onChangeText={text => setEmail(text)}
                />

                <TextInput
                    value={password}
                    style={styles.textpw}
                    placeholder="Masukkan Password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.buttonregister} onPress={registerUser}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Register</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 20,
        borderWidth: 2,
        borderColor: 'blue'
    },
    textLogin: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000'
    },
    textemail: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 10,
        paddingLeft: 10,
        paddingVertical: 5
    },
    textpw: {
        backgroundColor: '#FFFFFF',
        elevation: 3,
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 10,
        paddingLeft: 10,
        paddingVertical: 5
    },
    buttonregister: {
        backgroundColor: '#76d1ff',
        marginVertical: 20,
        paddingVertical: 12,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 3,
        marginBottom: 150
    }
});

export default Register;
