import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC1nUYWq1rnYZaZJ7IkjrirgZlQ03kj9f0",
    authDomain: "agriware-031124.firebaseapp.com",
    projectId: "agriware-031124",
    storageBucket: "agriware-031124.firebasestorage.app",
    messagingSenderId: "72166216406",
    appId: "1:72166216406:web:2ecb071759211eb4c1ef77"
  };
  const app = initializeApp(firebaseConfig);
  const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
  const db = getFirestore(app);
  const storage = getStorage(app);

  export{auth,db,storage}