alert('test');

import { validate } from "json-schema";
import { validateSignInForm } from "./signInValidation";

// selecting the sign in form elements

const emailInput = document.querySelector('.email');
const passwordInput = document.querySelector('.password');
const signInButton = document.querySelector('.sign-in-button');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const signInForm = document.querySelector('.sign-in-form');
const submissionError =  document.querySelector('.submission-error');


signInButton.addEventListener("click", (e) => {
	e.preventDefault();
	validateSignInForm(
	emailInput.value,
	passwordInput.value,
	emailError,
	passwordError
	);
});

console.log('test');


