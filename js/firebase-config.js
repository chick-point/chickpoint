// ============================================================
// FIREBASE CONFIGURATION
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyAXxnQFVppkpLWfCMBk-pEEJxfqxiLNPxI",
    authDomain: "cloud-chickpoint.firebaseapp.com",
    projectId: "cloud-chickpoint",
    storageBucket: "cloud-chickpoint.firebasestorage.app",
    messagingSenderId: "794896593049",
    appId: "1:794896593049:web:ede71767d065b621dc0808"
};

const app = initializeApp(firebaseConfig);
export { app };