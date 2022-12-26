var firebaseConfig = {
    apiKey: "AIzaSyB83sVIXQ0H8_ySzdki30wol-kJDlhHKus",
    authDomain: "kwitter-a0aa8.firebaseapp.com",
    databaseURL: "https://kwitter-a0aa8-default-rtdb.firebaseio.com",
    projectId: "kwitter-a0aa8",
    storageBucket: "kwitter-a0aa8.appspot.com",
    messagingSenderId: "824624537421",
    appId: "1:824624537421:web:0b7c565ceeef0f83332104"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
       });
    localStorage.setItem("room_name", room_name);
    
    window.location = "chat_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
           console.log("Room Name - "+ Room_names);
           row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
           document.getElementById("output").innerHTML += row;
   //End code
   });
});
}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "chat_page.html";
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}