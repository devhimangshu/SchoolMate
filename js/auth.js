// js/auth.js

// Login function for email and password authentication
const loginForm = document.getElementById('loginForm');
const loginStatus = document.getElementById('loginStatus');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Firebase sign-in logic
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;

      // Fetch user role from Firebase database
      firebase.database().ref('users/' + user.uid).once('value', function(snapshot) {
        const role = snapshot.val().role;

        // Redirect user based on their role
        if (role === 'admin') {
          window.location.href = 'admin.html';  // Admin Dashboard
        } else if (role === 'teacher') {
          window.location.href = 'teacher.html';  // Teacher Dashboard
        } else if (role === 'student') {
          window.location.href = 'student.html';  // Student Dashboard
        } else {
          loginStatus.textContent = 'Invalid role, please contact the admin.';
        }
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      // Display error messages
      loginStatus.textContent = `Error: ${errorMessage}`;
    });
});
