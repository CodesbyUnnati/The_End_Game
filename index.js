var firebaseConfig = {
    apiKey: "AIzaSyB6TR6PmXug4xA5sky2S7CCvmdT-PYvR-o",
    authDomain: "loginform-79ccd.firebaseapp.com",
    databaseURL: "https://loginform-79ccd.firebaseio.com",
    projectId: "loginform-79ccd",
    storageBucket: "loginform-79ccd.appspot.com",
    messagingSenderId: "395311633462",
    appId: "1:395311633462:web:f2cbcbcb1171e90588f497",
    measurementId: "G-5JC1QY75HS"
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
    var message = getInputVal('message');
    saveMessage(name, email, phone, message);
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
        message: message,

    });
}