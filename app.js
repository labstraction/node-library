

import { question } from 'readline-sync';
import Library from './model/library.js'


const library = new Library('Berio')

console.log('benvenuti in super library manager 4.2\n\n')

while(true){
    const introString = "Ecco le funzionalita':\n" +
                    "1)aggiungi utente\n" +
                    "2)aggiungi libro\n" +
                    "3)lista utenti\n" +
                    "4)aggiungi libri\n" +
                    "5)Esci\n" +
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
            process.exit(0)
            break;
        default:
            console.log('scelta non valida')
            break;
    }


}


function addUser(){

}

function addBook(){

}

function listUsers(){

}

function listBooks(){
    
}


