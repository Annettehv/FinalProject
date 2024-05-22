/* const validateSignUpForm = (firstname, lastname, email, password, errorMsg) =>{
	let errorStatus = false;
	if(!firstname || !lastname || !email || !password){
		errorStatus = true;
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

export {validateSignUpForm} */

const validateSignUpForm = (firstname, lastname, email, password, errorMsg) => {
    let errorStatus = false;
    if (!firstname || !lastname || !email || !password) {
        errorStatus = true; // Corrected assignment
        errorMsg.style.visibility = 'visible';
        errorMsg.textContent = 'Please fill out all fields!';
    } else {
        errorStatus = false;
        errorMsg.style.visibility = 'hidden'; // Set visibility to hidden to hide the error message
    }

    const signUpErrorStatus = () => {
        return errorStatus;
    };

    return { signUpErrorStatus };
};

export { validateSignUpForm };