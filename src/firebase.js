import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDVHB2KV2L3opRCSMla5q8MtnjlgPMd7j8",
  authDomain: "webapppush-b0123.firebaseapp.com",
  projectId: "webapppush-b0123",
  storageBucket: "webapppush-b0123.appspot.com",
  messagingSenderId: "1033350836744",
  appId: "1:1033350836744:web:6a14cca69e5080872897bd"
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);