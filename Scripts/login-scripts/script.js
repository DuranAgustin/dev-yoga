import { getUserByEmail } from '../../CRUD/get-flows.js';
import { submitUser } from '../../CRUD/post-flows.js';
//Get input information
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('passwordconfirm');
const submitBtn = document.getElementById('create-user-btn');
const loginEmail = document.getElementById('login-email');
const emailConfirm = document.getElementById('emailconfirm');
const loginPassword = document.getElementById('login-password');
// Get the modal
const modal = document.getElementsByClassName('modal');
const signUp = document.getElementById('signuplink');
const loginBtn = document.getElementById('login-modal');

// closes modal when user clicks "x"
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

//LOGIN SCRIPT
loginBtn.addEventListener('click', async () => {
  let email = loginEmail.value;
  let password = loginPassword.value;

  try {
    const userObj = await getUserByEmail(email);
    if (!userObj) {
      alert('No user exists with that e-mail');
    }
    let uId = userObj._id;
    let uEmail = userObj.email;
    let uPwd = userObj.password;
    if (email === uEmail && password === uPwd) {
      localStorage.setItem('currentUser', uId);
      //to get the item JSON.parse(localstorage.getItem('currentUser')
      location.href = './Views/dashboard.html';
    } else {
      alert('Login information incorrect, please try again');
    }
  } catch (error) {
    console.log(error);
  }
});

//USER CREATION
submitBtn.addEventListener('click', () => {
  let firstNameVal = firstName.value;
  let lastNameVal = lastName.value;
  let emailVal = email.value;
  let emailConfirmVal = emailConfirm.value;
  let passwordVal = password.value;
  let passwordConfirmVal = passwordConfirm.value;

  //Validating that user information provided is adequate
  if (firstNameVal && lastNameVal && emailVal && passwordVal) {
    if (ValidateEmail(emailVal)) {
      if (passwordVal === passwordConfirmVal && emailVal === emailConfirmVal) {
        submitUser(firstNameVal, lastNameVal, emailVal, passwordVal);
        firstNameVal = '';
        lastNameVal = '';
        emailVal = '';
        emailConfirmVal = '';
        passwordVal = '';
        passwordConfirmVal = '';
        alert('Account successfully created!');
      } else {
        alert('Email or Password confirmations do not match');
      }
    }
  } else {
    alert('Please provide information in all fields');
  }
});

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  alert('You have entered an invalid email address!');
  return false;
}
