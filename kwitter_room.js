

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCpSp7mCzdUVj8TRYvR5d05ZprkX9nyoMA",
  authDomain: "kwitter-c715b.firebaseapp.com",
  databaseURL: "https://kwitter-c715b-default-rtdb.firebaseio.com",
  projectId: "kwitter-c715b",
  storageBucket: "kwitter-c715b.appspot.com",
  messagingSenderId: "339654987152",
  appId: "1:339654987152:web:24fb0f54b475b952e2f715"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
