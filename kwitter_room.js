var firebaseConfig = {
    apiKey: "AIzaSyCsyC65mQ_6ukGmRyueRKM0axUC-_KJI4c",
    authDomain: "hdiduhjv.firebaseapp.com",
    databaseURL: "https://hdiduhjv-default-rtdb.firebaseio.com",
    projectId: "hdiduhjv",
    storageBucket: "hdiduhjv.appspot.com",
    messagingSenderId: "465115594303",
    appId: "1:465115594303:web:f18becfb245c08e7ba828a",
    measurementId: "G-0HTF9S3EYK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });

}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
