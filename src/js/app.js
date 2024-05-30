import firebaseConfig  from "./firebaseConfig";
import {initializeApp} from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword} from "firebase/auth";

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

// selecting the sign out button

const signOutButton = document.querySelector('.sign-out-button');

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



  signUpButton.addEventListener('click', (e) => {
	e.preventDefault();
	validateSignUpForm(
	signUpFirstname.value,
	signUpLastname.value,
	signUpEmail.value,
	signUpPassword.value,
	signUpError
	);
})   

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
		.catch((err) => console.log('Error creating user:', err.message));
	}
}

signUpButton.addEventListener('click', (e)=>{
	e.preventDefault();
	signUpUser();
})

// handle sign out action

function signOutUser(){
	signOut(authService)
	.then(()=>{
		console.log('signed out successfully');
		signOutButton.style.visibility = 'hidden';
		signInForm.style.display = 'flex';
	})
	.catch((err)=> console.log('sign out error'))
}

signOutButton.addEventListener('click', (e)=>{
	e.preventDefault();
	signOutUser();
})

// handle sign in action

function signInUser (){
	const {signInFormStatus} = validateSignInForm(
		emailInput.value,
		passwordInput.value,
		emailError,
		passwordError
		);
		if(signInFormStatus()){
			return
		} else {
			const email = emailInput.value.trim();
			const password = passwordInput.value.trim();
			signInWithEmailAndPassword(authService, email, password)
			.then(()=>{
				signInForm.reset();
				signOutButton.style.visibility = 'visible';
				console.log('successfully signed in');
				//redirect to new html
				window.location.href = 'searchbooks.html';
			})
			.catch(err => {
				submissionError.textContent = err.message
			})
		}
}

signInButton.addEventListener('click', (e)=>{
	e.preventDefault();
	signInUser();
})

