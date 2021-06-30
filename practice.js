var firebaseConfig = {
 apiKey: "AIzaSyA9UL_GSB69LTujJy5x8WnHv8Odert99mQ",
 authDomain: "let-chat-web-app-11518.firebaseapp.com",
 databaseURL: "https://let-chat-web-app-11518-default-rtdb.firebaseio.com",
 projectId: "let-chat-web-app-11518",
 storageBucket: "let-chat-web-app-11518.appspot.com",
 messagingSenderId: "687738716639",
 appId: "1:687738716639:web:93eec2803354bbf864046a",
 measurementId: "G-GDN0R84562"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
 user_name = document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({
  key : "MY NAME IS OLIVIA"
 });
}