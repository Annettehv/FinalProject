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

            const genre = book.subject ? book.subject[0] : 'Unknown'; 
            console.log(`Genre assigned: ${genre}`); 

            const addButton = document.createElement('button');
            addButton.textContent = 'Add to reading-list';
            addButton.onclick = function() {
                addToReadingList({
                    title: book.title,
                    author: book.author_name ? book.author_name.join(', ') : 'Unknown Author',
                    cover: coverUrl,
                    genre: genre
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
    readingListContainer.innerHTML = ''; // Clear previous renders

    readingList.forEach(book => {
        // Check if the book object is valid
        if (book && book.title && book.author) {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book-card');
            bookElement.setAttribute('data-genre', book.genre); // Add data-genre attribute
            console.log(`Displaying book: ${book.title}, Genre: ${book.genre}`); // Debug: Log book and genre
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

            // Add the Remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove from reading-list';
            removeButton.onclick = function() {
                removeFromReadingList(book);
            };
            bookElement.appendChild(removeButton);

            readingListContainer.appendChild(bookElement);
        }
    });
}

// Function to remove a book from the reading list
function removeFromReadingList(bookToRemove) {
    let readingList = JSON.parse(localStorage.getItem('readingList')) || [];
    readingList = readingList.filter(book => book.title !== bookToRemove.title || book.author !== bookToRemove.author);
    localStorage.setItem('readingList', JSON.stringify(readingList));
    displayReadingList(); // Refresh the reading list 
}

// Function to filter reading list by genre
function filterByGenre() {
    const genreFilter = document.getElementById('genreFilter').value.toLowerCase();
    const bookCards = document.querySelectorAll('.book-card');
    console.log(`Filtering by genre: ${genreFilter}`); 

    bookCards.forEach(card => {
        const bookGenre = card.getAttribute('data-genre').toLowerCase();
        console.log(`Book genre: ${bookGenre}`); 
        if (genreFilter === 'all' || bookGenre.includes(genreFilter)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Function to navigate to the reading list page
function goToReadingList() {
    window.location.href = 'my_reading_list.html';
}

// Function to navigate to the main page
function goToMainPage() {
    window.location.href = 'searchbooks.html';
}