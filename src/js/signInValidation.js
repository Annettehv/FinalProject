
const validateSignInForm = (email, password, emailErrorElement, passErrorElement) => {
	const errors = {
		errorStatus: false,
		emailError: "",
		passwordError: "",
	};

	if (!email && !password) {
		errors.errorStatus = true,
		errors.emailErrorElement = "Email is required!",
		errors.passwordError = "Password is required!",

		emailErrorElement.style.visibility = 'visible';
		passErrorElement.style.visibility = 'visible';

		emailErrorElement.textContent = errors.emailError;
		passErrorElement.textContent = errors.passwordError;
		
		console.log("Both email and password are empty");
		
	} else if (!email){
		errors.errorStatus = true,
		errors.emailErrorElement = "Email is required!",
		errors.passwordError = "",

		emailErrorElement.style.visibility = 'visible';
		passErrorElement.style.visibility = 'hidden';

		emailErrorElement.textContent = errors.emailError;
		passErrorElement.textContent = errors.passwordError;

		console.log("Email is empty");

	} else if (!password){
		errors.errorStatus = true,
		errors.emailErrorElement = "",
		errors.passwordError = "Password is required!",

		emailErrorElement.style.visibility = 'hidden';
		passErrorElement.style.visibility = 'visible';

		emailErrorElement.textContent = errors.emailError;
		passErrorElement.textContent = errors.passwordError;

		console.log("Password is empty");


	} else {
		errors.errorStatus = false,
		errors.emailErrorElement = "",
		errors.passwordError = "",

		emailErrorElement.style.visibility = 'hidden';
		passErrorElement.style.visibility = 'hidden';

		emailErrorElement.textContent = errors.emailError;
		passErrorElement.textContent = errors.passwordError;

		console.log("Both email and password are filled");

	}

	const signInFormStatus = ()=>{
		return errors.errorStatus
	}

	return { signInFormStatus }
	
};

export {validateSignInForm}