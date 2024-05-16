const validateSignUpForm = (firstname, lastname, email, password, errorMsg) =>{
	let errorStatus = false;
	if(!firstname || !lastname || !email || !password){
		errorStatus: true;
		errorMsg.style.visibility = 'visible';
		errorMsg.textContent = 'Please fill out all fields!';
	} else {
		errorMsg = false;
		errorMsg.style.visibility = 'hidden';
		errorMsg.style.visibility = '';
	}
	const signUpErrorStatus = ()=>{
		return errorStatus
	}

	return {signUpErrorStatus}
}

export {validateSignUpForm}