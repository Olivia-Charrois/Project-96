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

user_name = localStorage.getItem("user_name");
document.getElementById("user-name").innerHTML = "Welcome" + user_name + "!";

 function addRoom()
 {
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       });
       localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";
 }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
  });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}