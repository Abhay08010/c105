//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB83sVIXQ0H8_ySzdki30wol-kJDlhHKus",
    authDomain: "kwitter-a0aa8.firebaseapp.com",
    databaseURL: "https://kwitter-a0aa8-default-rtdb.firebaseio.com",
    projectId: "kwitter-a0aa8",
    storageBucket: "kwitter-a0aa8.appspot.com",
    messagingSenderId: "824624537421",
    appId: "1:824624537421:web:0b7c565ceeef0f83332104"
  };

  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data('name');
message = message_data('message');
like = message_data('like')
name_with_tag = "<h4>" + name + "</h4>";
message_with_tag = "<h4 class= 'message_h4'>" + message + "</h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick= 'updateLike(this.id)' >Likes : "+Like +"</h4";


row = name_with_tag + message_with_tag + like_button;
document.getElementById("output").innerHTML = row;
//End code
    } });  }); }
getData();

function send(){
    document.getElementById("msg").value;
    firebase.database().ref(room_name).puse({
          name:user_name,
          message:msg,
    });
    document.getElementById("msg").value = "";
}

function updateLike(message_id)
{
console.log("Clicked on like button -" + message_id);
message_id = button_id;
document.getElementById(button_id).value;
updated_likes = Number(likes)+1;
console.log(updated_likes);
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}