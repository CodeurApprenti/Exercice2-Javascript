// déclaration de mes variables 

let nbrPhotocopie;
let prixTotal;
let bouton = document.getElementById('bouton');
let message = document.getElementById('message');

// Function calcul prix

function Calcul(){
    nbrPhotocopie = document.getElementById('valeur-saisie').value;

    if(nbrPhotocopie <= 10){
        prixTotal = nbrPhotocopie * 0.1;
    }else if(nbrPhotocopie <= 30){
        prixTotal = (10 * 0.1 + (nbrPhotocopie - 10) * 0.09).toFixed(2);
    }else{
        prixTotal = ((10 * 0.1) + (20 * 0.09) + ((nbrPhotocopie - 30) * 0.08)).toFixed(2);
    }

    // Affichage du message 

    message.innerHTML = "Le prix total est de : " + prixTotal + " euros";
}

// Bouton gestion click 

bouton.addEventListener('click', Calcul, false);