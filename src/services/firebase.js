// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB6ou40q-8crwFrXh7uVWxgwHVrNs2Hf5k",
	authDomain: "rpg-react-5e0c6.firebaseapp.com",
	projectId: "rpg-react-5e0c6",
	storageBucket: "rpg-react-5e0c6.appspot.com",
	messagingSenderId: "547063499953",
	appId: "1:547063499953:web:cf897f7fce00642bb7a690",
	measurementId: "G-4KHM02H6YK",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
