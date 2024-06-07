// script per il secondo esercizio
const buttonCalcolaPUnt = document.querySelector('.calcolaPunteggio');
const punteggio1 = document.querySelector('.punteggio1')
const punteggio2 = document.querySelector('.punteggio2')
const risultatoText = document.querySelector('.risultato')


// evento al click del bottone
buttonCalcolaPUnt.addEventListener('click', () =>{
    // creazione numeri casuali
    let numCasuale1 = Math.floor(Math.random() * 7)
    let numCasuale2 = Math.floor(Math.random() * 7)

    // scrittura su browser dei numeri casuali ad entrambi giocatori
    punteggio1.textContent = numCasuale1
    punteggio2.textContent = numCasuale2

    // chi ha vinto??
    if(numCasuale1 > numCasuale2){
        risultatoText.textContent = 'Ha vinto il Giocatore 1'
        
    }else if (numCasuale1 < numCasuale2){
        risultatoText.textContent = 'Ha vinto il Giocatore casuale'
    }else {
        risultatoText.textContent = 'Pareggio'
    }
    
})
