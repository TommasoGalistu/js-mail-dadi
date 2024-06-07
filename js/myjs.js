let contMessaggio = document.querySelector('.contMessaggio');
let buttn = document.querySelector('button');
let textInput = document.querySelector('input').value;

// array contenenti tutte le email
let arrEmail = ['tommaso.galistu@gmail.it', 'tommasogalistu@gmail.con', 'tommasogallo@gmail.com', 'tommasogalistu92@gmail.com']
let click = 0;
buttn.addEventListener('click', () =>{
    // prima soluzione più veloce
    // let a = arrEmail.includes(textInput)
    // console.log(a)
    
    // seconda soluzione con ciclo
    for (let i = 0; i < arrEmail.length; i++) {
        
        
        if(arrEmail[i] === textInput && click === 0){
            let messPositivo = document.createElement('p')
            messPositivo.classList.add('messaggioPositivo')
            messPositivo.append('La tua email è presente nel database')
            contMessaggio.append(messPositivo)
            click++
        } else if(i === arrEmail.length - 1 && click === 0){
            let messNegativo = document.createElement('p')
            messNegativo.classList.add('messaggioNegativo')
            messNegativo.append('Valori non validi')
            contMessaggio.append(messNegativo)
            click++
        } 
        
        
        
    }
    
})