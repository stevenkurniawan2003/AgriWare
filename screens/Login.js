import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, Alert, ScrollView } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState(''); 

    const navigation = useNavigation();
    const auth = getAuth();

    const handleLogin = () => {
        if (!role) {
            Alert.alert('Alert!!', 'Semua Harus Diisi!');
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredentials) => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);

                const userDoc = await getDoc(doc(db, 'users', user.uid));
                if (userDoc.exists()) {
                    const userData = userDoc.data();

                    if (userData.role === role) {
                        Alert.alert('Login successful', `Welcome ${user.email}!`);
                        
                        setEmail('');
                        setPassword('');
                        setRole('');

                        if (role === 'petani') {
                            navigation.navigate('DashboardsPetani');
                        } else if (role === 'customer') {
                            navigation.navigate('DashboardsCust');
                        }
                    } else {
                        Alert.alert('Login failed', 'Role yang Anda pilih tidak sesuai dengan role yang terdaftar.');
                        auth.signOut(); 
                    }
                } else {
                    Alert.alert('Login failed', 'Data pengguna tidak ditemukan.');
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.error('Login error:', errorMessage);
                Alert.alert('Login failed', errorMessage);
            });
    };

    const handleSignup = () => {
        navigation.navigate('Register');
    };
    const back = () => {
        navigation.navigate('Home')
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                    <TouchableOpacity style={{ marginRight:320 }} onPress={back} >
                        <Icon name="arrow-left-long" size={30} />
                    </TouchableOpacity>
                <StatusBar backgroundColor={'#B99B6B'} barStyle={'light-content'} />
                <View style={styles.iconContainer}>
                    <Image
                        source={require('../assets/logofix.png')}
                        style={styles.icon}
                    />
                </View>
                <Text style={styles.title}>WELCOME BACK</Text>
          
                <TextInput
                    value={email}
                    style={styles.input}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                />

                <TextInput
                    value={password}
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
      
              <View style={styles.pickerContainer} >
                <Picker
                    selectedValue={role}
                    onValueChange={(itemValue) => setRole(itemValue)}
                    style={styles.picker}
                    >
                    <Picker.Item label="Pilih Role" value="" />
                    <Picker.Item label="Petani" value="petani" />
                    <Picker.Item label="Customer" value="customer" />
                </Picker>
              </View>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSignup} style={{ marginBottom: 120 }} >
                    <Text style={styles.signupText}>
                        Don’t have an account? <Text style={styles.signupLink}>Sign up</Text>
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B99B6B',
    },
    iconContainer: {
        marginBottom: 60,
    },
    icon: {
        width: 120,
        height: 120,
        marginTop:50
    },
    title: {
        fontSize: 24,
        fontWeight: '900',
        marginBottom: 20,
    },
    input: {
        width: '90%',
        height: 50,
        borderColor: '#D3D3D3',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 15,
    },
    pickerContainer: {
      width:'90%',
      borderColor: '#CCCCCC',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 15,
      overflow: 'hidden',
      height:50
    },
    loginButton: {
        backgroundColor: '#3C552D',
        paddingVertical: 10,
        width: '90%',
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 20,
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signupText: {
        fontSize: 14,
        marginBottom:50
    },
    signupLink: {
        color: '#3C552D',
        fontWeight: 'bold',
    },
});

export default Login;



//-------------------------------------------------------------------------------------------------------------------------//

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,StatusBar,Alert,ScrollView } from 'react-native';
// import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
// import Register from '../screens/Register';
// import { useNavigation } from '@react-navigation/native';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const navigation = useNavigation();
//     const auth = getAuth();

//   const handleLogin = () => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredentials) => {
//         const user = userCredentials.user;
//         console.log('Logged in with:', user.email);
//         Alert.alert('Login successful', `Welcome ${user.email}!`);
//         navigation.navigate('DashboardsPetani'); 
//       })
//       .catch((error) => {
//         const errorMessage = error.message;
//         console.error('Login error:', errorMessage);
//         Alert.alert('Login failed', errorMessage);
//       });
//   };

//     const Handlesignup = () => {
//         navigation.navigate(Register)
//     }
   
//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//     <View style={styles.container}>
//     <StatusBar backgroundColor={'#B99B6B'} barStyle={'light-content'}/>
//       <View style={styles.iconContainer}>
//         <Image 
//           source={require('../assets/logofix.png')}
//           style={styles.icon}
//         />
//       </View>

//       <Text style={styles.title}>WELCOME BACK</Text>
      
//       <TextInput
//         value={email}
//         style={styles.input}
//         placeholder="Email"
//         onChangeText={text => setEmail(text)}
//       />
    
//       <TextInput
//         value={password}
//         style={styles.input}
//         placeholder="Password" 
//         onChangeText={text => setPassword(text)}
//         secureTextEntry
//       />
      
//       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//         <Text style={styles.loginButtonText}>LOGIN</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={Handlesignup} style={{ marginBottom:120 }} >
//         <Text style={styles.signupText}>
//             Don’t have an account? <Text style={styles.signupLink}>Sign up</Text>
//         </Text>
//       </TouchableOpacity>  
//     </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#B99B6B',
//   },
//   iconContainer: {
//     marginBottom: 60,
//   },
//   icon: {
//     width: 120,
//     height: 120,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '900',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     height: 50,
//     borderColor: '#D3D3D3',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     fontSize: 16,
//     marginBottom: 15,
//   },
//   loginButton: {
//     backgroundColor: '#3C552D',
//     paddingVertical: 12,
//     width: '80%',
//     borderRadius: 8,
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   loginButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   signupText: {
//     fontSize: 14,
//   },
//   signupLink: {
//     color: '#3C552D',
//     fontWeight: 'bold',
//   },
// });

// export default Login;

