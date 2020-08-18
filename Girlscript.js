var firebaseConfig = {
    apiKey: "AIzaSyDN6QBCsixjhnjU8Xh-LDo_4ld_7lj3IX0",
    authDomain: "girlscriptregistration.firebaseapp.com",
    databaseURL: "https://girlscriptregistration.firebaseio.com",
    projectId: "girlscriptregistration",
    storageBucket: "girlscriptregistration.appspot.com",
    messagingSenderId: "561765903887",
    appId: "1:561765903887:web:fdb089741d9417a277bd7a",
    measurementId: "G-VJTEX04LRY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database().ref('message');
document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    saveMessage(name, email, phone);
    document.querySelector('.alert').style.display = 'block';
    document.getElementById('contactForm').reset();
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(name, email, phone) {
    var newMessageRef = db.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,

    });
}