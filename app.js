

import { question } from 'readline-sync';
import Library from './model/library.js'
import User from './model/user.js'
import PremiumUser from './model/premium-user.js'
import { PhysicalBook } from "./model/book.js";


const library = new Library('Berio')

console.log('benvenuti in super library manager 4.2\n\n')

while(true){
    const introString = "Ecco le funzionalita':\n" +
                    "1)aggiungi utente\n" +
                    "2)aggiungi libro\n" +
                    "3)lista utenti\n" +
                    "4)aggiungi libri\n" +
                    "5)presta libro\n" +
                    "6)Esci\n" +
                    "inserisci il numero della funzionalita' desiderata\n"

    const answer = question(introString)

    switch (answer) {
        case '1':
            addUser()
            break;
        case '2':
            addBook()
            break;
        case '3':
            listUsers()
            break;
        case '4':
            listBooks()
            break;
        case '5':
            borrowBook()
            break;
        case '6':
            process.exit(0)
            break;
        default:
            console.log('scelta non valida')
            break;
    }


}


function addUser(){

    const newUser = createUser();

    if(newUser){
        console.log('complimenti, operazione riuscita!!!')
        library.addUser(newUser);
    } else {
        console.log('utente non creato')
    }

}


function createUser(){
    const name = question("inserire il nome dell utente\n");
    if(!name){
        return null;
    }
    const id = library.usersNumber + '';

    let newUser;

    const answer = question("Vuoi creare un utente Premium? (Y)es (N)o\n");
    if(answer.toUpperCase() === 'Y'){
        newUser = new PremiumUser(id, name);
    } else {
        newUser = new User(id, name);
    }

    return newUser;
}

function addBook(){
    const newBook = createBook();

    if(newBook){
        console.log('complimenti, operazione riuscita!!!')
        library.addBook(newBook);
    } else {
        console.log('libro non creato')
    }
}


function createBook(){
    const isbn = question("inserire l'isbn\n");
    const title = question("inserire il titolo\n");
    const author = question("inserire l'autore\n");
    const shelf= question("inserire lo scaffale\n");


    if(isbn && title && author && shelf){
        const newBook = new PhysicalBook(isbn, title, author, shelf);
        return newBook;
    }

    return null;
}

function listUsers(){

    for (const user of library.users) {
        console.log(user)
        console.log(user.toString() + '\n\n')
    }


}

function listBooks(){
    
}


function borrowBook(){
    const isbn = question("inserire l'isbn del  libro\n");
    const id = question("inserire l'id dell'utente\n");

    if (isbn && id) {
        const result = library.borrowBoowWithIdAndIsbn(id, isbn)
        if (result) {
            console.log('tutto ok!')
        } else {
            console.log('sticazzi 1')
        }
    } else {
        console.log('sticazzi 2')
    }
}