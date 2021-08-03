import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBEglzYue4flJgY_pwuhjclGp88QXH3inE",
    authDomain: "reactnativesample-b04ac.firebaseapp.com",
    projectId: "reactnativesample-b04ac",
    storageBucket: "reactnativesample-b04ac.appspot.com",
    messagingSenderId: "335254816846",
    appId: "1:335254816846:web:4277f67911c11a522e9b1f",
    measurementId: "G-BY7KCCNDJN"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default async (uri) => {
    // Why are we using XMLHttpRequest? See:
    // https://github.com/expo/expo/issues/2402#issuecomment-443726662
    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
            resolve(xhr.response);
        };
        xhr.onerror = function (e) {
            console.log(e);
            reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", uri, true);
        xhr.send(null);
    });

    const ref = firebase.storage().ref("Contact-Pictures").child(new Date().toISOString());
    const snapshot = await ref.put(blob);

    // We're done with the blob, close and release it
    blob.close();

    return await snapshot.ref.getDownloadURL();
}