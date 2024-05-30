# FinalProject
For my final assignment I decided to create a “library” website called Readly. Readly is a website where the user can create an account and log in, and then use the open library api to search through all kinds of books and add them to their reading list, to keep track. When the user has added books to their list they can filter trough them by genre, and also remove books they are finished reading or don’t want to keep in their list anymore. 

I have used  firebase authentication for the sign up and sign in functions, and webpack as the bundler. I have also used the “search” api from openlibrary combined with the “covers” api to display the matching covers. The books the user puts in their reading list gets saved in local storage. 

Note that the api is sometimes a bit slow, the books will render eventually. 

Designwise I have kept the layout clean, consistent and modern and used flexbox for layout. 

https://openlibrary.org/developers/api
https://openlibrary.org/dev/docs/api/search
https://openlibrary.org/dev/docs/api/covers
https://www.youtube.com/watch?v=reN_okp2Gq4