// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



