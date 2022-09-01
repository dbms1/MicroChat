const config = {
    apiKey: "AIzaSyALMKFK6ybOPzCnXcAwAhRxI8PITNJ85G0",
    authDomain: "friendlychat1-b015b.firebaseapp.com",
    projectId: "friendlychat1-b015b",
    storageBucket: "friendlychat1-b015b.appspot.com",
    messagingSenderId: "1038099708785",
    appId: "1:1038099708785:web:48c7624428f208a78314d0"
  };

export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
            'Add your web app\'s configuration object to firebase-config.js');
    } else {
        return config;
    }
}