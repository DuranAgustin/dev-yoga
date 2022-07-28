import { submitUser } from '../CRUD/post-flows.js';
//Get input information
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submitBtn = document.getElementById('create-user-btn');
// Get the modal
const modal = document.getElementsByClassName('modal');
const signUp = document.getElementById('signuplink');
const loginBtn = document.getElementById('login-modal');
/*signUp.addEventListener("click", ()=> {
    console.log(click)
})*/

// closes modal when user clicks "x"
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

//LOGIN SCRIPT
loginBtn.addEventListener('click', () => {
  location.href = './Views/dashboard.html';
});

//USER CREATION
submitBtn.addEventListener('click', () => {
  let firstNameVal = firstName.value;
  let lastNameVal = lastName.value;
  let emailVal = email.value;
  let passwordVal = password.value;

  submitUser(firstNameVal, lastNameVal, emailVal, passwordVal);
});
