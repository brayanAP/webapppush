importScripts("https://www.gstatic.com/firebasejs/9.8.4/firebase-app-compat.js")
importScripts("https://www.gstatic.com/firebasejs/9.8.4/firebase-messaging-compat.js")



const firebaseConfig = {
    apiKey: "AIzaSyDVHB2KV2L3opRCSMla5q8MtnjlgPMd7j8",
    authDomain: "webapppush-b0123.firebaseapp.com",
    projectId: "webapppush-b0123",
    storageBucket: "webapppush-b0123.appspot.com",
    messagingSenderId: "1033350836744",
    appId: "1:1033350836744:web:6a14cca69e5080872897bd"
};

const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app);


messaging.onBackgroundMessage(payload => {
    console.log("Recibiste mensaje mientras estabas ausente");
    // previo a mostrar notificación
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png"
    }


    return self.registration.showNotification(
        notificationTitle,
        notificationOptions
    )
})