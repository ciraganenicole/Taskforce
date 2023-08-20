importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js");

 const firebaseConfig = {
    apiKey: "AIzaSyBzfHRPjCR2QXjWUDtxf32kG4nY9MXjIMs",
    authDomain: "taskforce-7f5e1.firebaseapp.com",
    projectId: "taskforce-7f5e1",
    storageBucket: "taskforce-7f5e1.appspot.com",
    messagingSenderId: "166698756601",
    appId: "1:166698756601:web:7b5cafc83be25a7e0c3528",
    measurementId: "G-D3R2ZET0G0"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});