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

		emailErrorElement.style.visability = 'visible';
		passErrorElement.style.visability = 'visible';

		emailErrorElement.textContent = errors.emailError;
		passErrorElement.textContent = errors.passwordError;
		
	} else if (!email){
		errors.errorStatus = true,
		errors.emailErrorElement = "Email is required!",
		errors.passwordError = "",

		emailErrorElement.style.visability = 'visible';
		passErrorElement.style.visability = 'hidden';

		emailErrorElement.textContent = errors.emailError;
		passErrorElement.textContent = errors.passwordError;

	} else if (!password){
		errors.errorStatus = true,
		errors.emailErrorElement = "",
		errors.passwordError = "Password is required!",

		emailErrorElement.style.visability = 'hidden';
		passErrorElement.style.visability = 'visible';

		emailErrorElement.textContent = errors.emailError;
		passErrorElement.textContent = errors.passwordError;


	} else {
		errors.errorStatus = false,
		errors.emailErrorElement = "",
		errors.passwordError = "",

		emailErrorElement.style.visability = 'hidden';
		passErrorElement.style.visability = 'hidden';

		emailErrorElement.textContent = errors.emailError;
		passErrorElement.textContent = errors.passwordError;

	}

	const signInFormStatus = ()=>{
		return errors.errorStatus
	}

	return { signInFormStatus }
	
};

export { validateSignInForm }