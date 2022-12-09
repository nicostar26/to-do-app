import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBWjEsv2ne6CWOo3tXXKwiXth2b_wMAbw0",
  authDomain: "lightning-list-5b57f.firebaseapp.com",
  databaseURL: "https://lightning-list-5b57f-default-rtdb.firebaseio.com",
  projectId: "lightning-list-5b57f",
  storageBucket: "lightning-list-5b57f.appspot.com",
  messagingSenderId: "861024989154",
  appId: "1:861024989154:web:5eab86c283b3bb1afc53bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

createApp(App).mount('#app')
