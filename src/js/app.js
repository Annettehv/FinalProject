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


  /* signInButton.addEventListener("click", (e) => {
	e.preventDefault();
	validateSignInForm(
	emailInput.value,
	passwordInput.value,
	emailError,
	passwordError
	);
});   */

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
		/* .then((err)=> console.log(err.message)) */
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

/* ----------------------------------- */ /* underneth i just pasted the whole code from finalapitest2 */


// Function to search books

async function searchBooks() {
    const searchInput = document.getElementById('searchInput').value;
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous search results

    try {
        const response = await fetch(`https://openlibrary.org/search.json?q=${searchInput}`);
        const data = await response.json();
        
        // Render only the first 15 books
        data.docs.slice(0, 15).forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book-card');
            bookElement.innerHTML = `
                <h2>${book.title}</h2>
                <p>${book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</p>
            `;
            const coverUrl = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : '';
            if (coverUrl) {
                const coverImg = document.createElement('img');
                coverImg.src = coverUrl;
                coverImg.classList.add('cover-img');
                bookElement.appendChild(coverImg);
            }

            const addButton = document.createElement('button');
            addButton.textContent = 'Add to Reading List';
            addButton.onclick = function() {
                addToReadingList({
                    title: book.title,
                    author: book.author_name ? book.author_name.join(', ') : 'Unknown Author',
                    cover: coverUrl
                });
            };
            bookElement.appendChild(addButton);

            searchResults.appendChild(bookElement);
        });
        document.getElementById('readingListButton').style.display = 'block'; // Show the button
    } catch (error) {
        console.error('Error searching books:', error);
    }
}

// Function to add a book to the reading list
function addToReadingList(book) {
    const readingList = JSON.parse(localStorage.getItem('readingList')) || [];
    // Check if the book is already in the reading list
    const bookExists = readingList.some(item => item.title === book.title && item.author === book.author);
    if (!bookExists) {
        readingList.push(book);
        localStorage.setItem('readingList', JSON.stringify(readingList));
    }
}

// Function to display reading list
function displayReadingList() {
    const readingList = JSON.parse(localStorage.getItem('readingList')) || [];
    const readingListContainer = document.getElementById('readingList');
    readingListContainer.innerHTML = ''; // Clear previous list

    readingList.forEach(book => {
        // Check if the book object is valid
        if (book && book.title && book.author) {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book-card');
            bookElement.innerHTML = `
                <h2>${book.title}</h2>
                <p>${book.author}</p>
            `;
            if (book.cover) {
                const coverImg = document.createElement('img');
                coverImg.src = book.cover;
                coverImg.classList.add('cover-img');
                bookElement.appendChild(coverImg);
            }
            readingListContainer.appendChild(bookElement);
        }
    });
}

// Function to navigate to the reading list page
function goToReadingList() {
    window.location.href = 'my_reading_list.html';
}

// Function to navigate to the main page
function goToMainPage() {
    window.location.href = 'index.html';
}