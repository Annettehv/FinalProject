import firebaseConfig  from "./firebaseConfig";
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

// initialize firebase
initializeApp(firebaseConfig)

console.log(firebaseConfig)

// initialize auth service

const authService = getAuth()

import { validateSignInForm } from "./signInValidation";
import { validateSignUpForm } from "./signUpValidation";



// selecting the sign in form elements

const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const signInButton = document.querySelector('.sign-in-button');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const signInForm = document.querySelector('.sign-in-form');
const submissionError =  document.querySelector('.submission-error');

// selecting the sign up form elements

const signUpFirstname = document.querySelector('.firstname');
const signUpLastname = document.querySelector('.lastname');
const signUpEmail = document.querySelector('.sign-up-email');
const signUpPassword = document.querySelector('.sign-up-password');
const signUpError = document.querySelector('.sign-up-error');
const signUpForm = document.querySelector('.sign-up-form');
const closeSignUpFormButton = document.querySelector('.sign-up-form_close');
const openSignUpFormButton = document.querySelector('.sign-up-form_open');
const signUpFormContainer = document.querySelector('.sign-up-form-container');
const signUpButton = document.querySelector('.sign-up-button');

// open sign up modal

openSignUpFormButton.addEventListener('click', (e) =>{
	e.preventDefault();
	signUpFormContainer.style.display = 'block'
})

// close sign up modal

closeSignUpFormButton.addEventListener('click', (e) =>{
	e.preventDefault();
	signUpFormContainer.style.display = 'none'
})

console.log(emailError);

 /* signInButton.addEventListener("click", (e) => {
	e.preventDefault();
	validateSignInForm(
	emailInput.value,
	passwordInput.value,
	emailError,
	passwordError
	);
});  */

 /* signUpButton.addEventListener('click', (e) => {
	e.preventDefault();
	validateSignUpForm(
	signUpFirstname.value,
	signUpLastname.value,
	signUpEmail.value,
	signUpPassword.value,
	signUpError
	);
})   */

// handle sign up action

function signUpUser(){
	const { signUpErrorStatus } = validateSignUpForm(
	signUpFirstname.value.trim(),
	signUpLastname.value.trim(),
	signUpEmail.value.trim(),
	signUpPassword.value.trim(),
	signUpError
	);

	console.log('first name:', signUpFirstname.value);
	console.log('last name:', signUpLastname.value);
	console.log('email:', signUpEmail.value);
	console.log('password:', signUpPassword.value);


	if(signUpErrorStatus()){
		return;
	} else {
		const newUser = {
			firstname:signUpFirstname.value.trim(),
			lastname:signUpLastname.value.trim(),
			signUpEmail:signUpEmail.value.trim(),
			signUpPassword:signUpPassword.value.trim()
		}
		createUserWithEmailAndPassword(authService,newUser.signUpEmail,newUser.signUpPassword)
		.then(()=>{
			signUpForm.reset();
			signUpFormContainer.style.display = 'none';
		})
		/* .then((err)=> console.log(err.message)) */
		.catch((err) => console.log('Error creating user:', err.message));
	}
}

signUpButton.addEventListener('click', (e)=>{
	e.preventDefault();
	signUpUser();
})




