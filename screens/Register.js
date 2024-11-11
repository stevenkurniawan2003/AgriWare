import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert,StatusBar } from 'react-native';
import { auth, db } from '../config/firebase'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'; 
import { Picker } from '@react-native-picker/picker';
import Login from './Login';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); 

  const registerUser = () => {
    if (email === '' || password === '' || role === '') {
      Alert.alert('Perhatian!', 'Tidak Boleh Kosong!');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Perhatian!', 'Password harus terdiri dari minimal 6 karakter.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          role: role
        });

        Alert.alert('Pendaftaran Berhasil!', 'Anda telah berhasil mendaftar.');
        console.log('User registered:', user);

        setEmail('');
        setPassword('');
        setRole('');

        navigation.navigate(Login)
      })
      .catch((error) => {
        const errorMessage = error.message;
        Alert.alert('Pendaftaran Gagal!', errorMessage);
        console.error('Registration error:', errorMessage);
      });
  };

  const Home = () => {
    navigation.navigate('Home')
  }

  return (
  <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.container}>
        <TouchableOpacity style={{ marginRight:320 }} onPress={Home} >
          <Icon name="arrow-left-long" size={30} />
        </TouchableOpacity>
      <StatusBar barStyle={'light-content'} backgroundColor={'#B99B6B'}/>
      <Image source={require('../assets/logofix.png')} style={styles.icon} />
      <Text style={styles.title}>CREATE ACCOUNT</Text>

      <TextInput
        value={email}
        style={styles.input}
        placeholder="Masukkan Email"
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        value={password}
        style={styles.input}
        placeholder="Masukkan Password 6 Kata"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      <View style={styles.pickerContainer}>
        <Picker selectedValue={role} onValueChange={(itemValue) => setRole(itemValue)} style={styles.picker}>
          <Picker.Item label="Pilih Role" value="" />
          <Picker.Item label="Petani" value="petani" />
          <Picker.Item label="Customer" value="customer" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.signupButton} onPress={registerUser}>
        <Text style={styles.signupButtonText}>SIGN UP</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>
          Already have an account? <Text style={styles.loginLink}>Login</Text>
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
    paddingHorizontal: 20,
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 50,
    marginTop:60
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  pickerContainer: {
    width: '100%',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
  },
  picker: {
    width: '100%',
    height: 50,
  },
  signupButton: {
    width: '100%',
    height: 45,
    backgroundColor: '#3C552D',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 20
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginText: {
    fontSize: 14,
    color: '#000000',
    marginBottom:160
  },
  loginLink: {
    color: '#3C552D',
    fontWeight: 'bold',
  },
});

export default Register;



//-----------------------------------------------------------------------------------------------------------------------//

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,Alert } from 'react-native';
// import { auth } from '../config/firebase'; 
// import { createUserWithEmailAndPassword } from 'firebase/auth'; 
// import { Picker } from '@react-native-picker/picker';
// import Login from './Login';

// const Register = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState(''); // State untuk role

//   const registerUser = () => {
//       if (email === '' || password === '' || role === '') {
//           Alert.alert('Perhatian!', 'Semua bidang harus diisi, termasuk role!');
//           return;
//       }
//       if (password.length < 6) {
//           Alert.alert('Perhatian!', 'Password harus terdiri dari minimal 6 karakter.');
//           return;
//       }

//       createUserWithEmailAndPassword(auth, email, password)
//           .then((userCredential) => {
//               Alert.alert('Pendaftaran Berhasil!', 'Anda telah berhasil mendaftar.');
//               console.log('User registered:', userCredential.user);
            
//               setEmail('');
//               setPassword('');
//               setRole('');

//               navigation.navigate(Login)
//           })
//           .catch((error) => {
//               const errorMessage = error.message;
//               Alert.alert('Pendaftaran Gagal!', errorMessage);
//               console.error('Registration error:', errorMessage);
//           });
//   };

//   return (
//     <View style={styles.container}>

//       <Image
//         source={require('../assets/logofix.png')} 
//         style={styles.icon}
//       />

//       <Text style={styles.title}>Create Account</Text>

//       <TextInput placeholder="Name" style={styles.input} />
//       <TextInput
//                     value={email}
//                     style={styles.input}
//                     placeholder="Masukkan Email"
//                     onChangeText={text => setEmail(text)}
//                 />

//                 <TextInput
//                     value={password}
//                     style={styles.input}
//                     placeholder="Masukkan Password 6 Kata"
//                     onChangeText={text => setPassword(text)}
//                     secureTextEntry
//                 />
//               <View style={styles.pickerContainer}>
//                 <Picker
//                     selectedValue={role}
//                     onValueChange={(itemValue) => setRole(itemValue)}
//                     style={styles.picker}
//                 >
//                     <Picker.Item label="Pilih Role" value="" />
//                     <Picker.Item label="Petani" value="petani" />
//                     <Picker.Item label="Customer" value="customer" />
//                 </Picker>
//             </View>

//       <TouchableOpacity style={styles.signupButton} onPress={registerUser}>
//         <Text style={styles.signupButtonText}>SIGN UP</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={() => navigation.navigate('LoginCust')}>
//         <Text style={styles.loginText}>
//           Already have an account? <Text style={styles.loginLink}>Login</Text>
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#B99B6B',
//     paddingHorizontal: 20,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 40,
//     left: 20,
//   },
//   backText: {
//     fontSize: 24,
//     color: '#000000',
//   },
//   icon: {
//     width: 80,
//     height: 80,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: '700',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#CCCCCC',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//   },
//   pickerContainer: {
//     width: '100%',
//     borderColor: '#CCCCCC',
//     borderWidth: 1,
//     borderRadius: 8,
//     marginBottom: 15,
//     overflow: 'hidden',
// },  
//   picker: {
//     width: '100%',
//     height: 50,
//   },
//   signupButton: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#3C552D',
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//     marginTop: 20,
//   },
//   signupButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   loginText: {
//     marginTop: 15,
//     fontSize: 14,
//     color: '#000000',
//   },
//   loginLink: {
//     color: '#3C552D',
//     fontWeight: 'bold',
//   },
// });

// export default Register;

