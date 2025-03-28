// auth.js

// Initialize Firebase Authentication
const auth = firebase.auth();

// Listen for form submit on login page
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get user input
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Sign in with Firebase
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // On successful login, redirect based on role
      const user = userCredential.user;
      const uid = user.uid;
      
      // Check the role in the Firebase Realtime Database
      firebase.database().ref("users/" + uid).once("value").then(snapshot => {
        const role = snapshot.val().role;

        if (role === "admin") {
          window.location.href = "admin.html";  // Redirect to admin dashboard
        } else if (role === "teacher") {
          window.location.href = "teacher.html";  // Redirect to teacher dashboard
        } else if (role === "student") {
          window.location.href = "student.html";  // Redirect to student dashboard
        } else {
          document.getElementById("loginStatus").textContent = "Role not assigned. Contact Admin.";
        }
      });
    })
    .catch((error) => {
      // Handle login errors
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("loginStatus").textContent = `Error: ${errorMessage}`;
    });
});
