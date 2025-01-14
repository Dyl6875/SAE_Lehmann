let sae = Object.keys(SAE); // Récupère les clés de l'objet SAE
console.log(sae); // Affiche les clés de SAE dans la console pour débogage

let titresae = '<div class="flex2">'; // Initialise la variable qui contiendra le HTML généré pour les SAÉ
let titre = Object.values(SAE).map(sae => sae.titre); // Récupère tous les titres des SAÉ
console.log(titre); // Affiche les titres de SAE dans la console pour débogage

let compétences = Object.values(SAE).map(sae => sae.compétences); // Récupère toutes les compétences des SAÉ

for (let i = 0; i < sae.length; i++) { // Boucle pour chaque SAÉ pour générer le HTML
    titresae += `
    <div>
        <a href='/sae.html?sae=${sae[i]}'> 
            <div class='sae'> 
                <h1 class='centre'>${sae[i]}</h1>
                <p>${titre[i]}</p> 
                <p class='bout boutt'> ${compétences[i].join(', ')}</p>
            </div>
        </a>
    </div>
    `;
}

if (document.querySelector(".listee")) { // Ajoute le contenu généré dans la page avec la classe "listee"
    document.querySelector(".listee").innerHTML = titresae;
}

const params = new URLSearchParams(window.location.search); // Récupère les paramètres de l'URL pour identifier quelle SAÉ est choisi
const saeID = params.get('sae'); // Extrait la valeur du paramètre "sae"

const lienpdf = { // définition du lien vers le pdf de chaque SAE
    "SAE1.01": "/pdf/SAE101.pdf",
    "SAE1.02": "/pdf/SAE102.pdf",
    "SAE1.03": "/pdf/SAE103.pdf",
    "SAE1.04": "/pdf/SAE104.pdf",
    "SAE1.05": "/pdf/SAE105.pdf",
    "SAE1.06": "/pdf/SAE106.pdf",
    "SAE2.01": "/pdf/SAE201.pdf",
    "SAE2.02": "/pdf/SAE202.pdf",
    "SAE2.03": "/pdf/SAE203.pdf",
    "SAE2.04": "/pdf/SAE204.pdf",
}


if (saeID && SAE[saeID]) { // Vérifie si l'SAÉ fourni dans l'URL existe dans l'objet SAE
    const saeData = SAE[saeID]; // Récupère les données de cette SAÉ

    let content = // Génère le contenu HTML pour afficher le contenu de la SAÉ choisi
    ` 
    <div class="cent">
        <p><h1 class='tcentre'>Titre : ${saeData.titre}</p></h1>
        <strong class='grand2'><h2>Description :</strong></h2> <div class='grand'>${saeData.description}</div>
        <h3 class="grand">Compétence(s) ciblée(s) :</h3>
        <ul>
        <div class='grand'> - ${saeData.compétences ? Object.values(saeData.compétences).join('<br> - ') : 'Aucune compétence(s)'}</div>
        </ul>
        <h3 class="grand">Apprentissages critiques :</h3>
        <ul>
          <div class='grand'> <a href="${lienpdf[saeID]}" target="_blank"> - ${saeData.AC ? Object.entries(saeData.AC).map(([key, value]) => `${key} : ${value}`).join('<br> - ') : 'Aucun AC'}</a> </div>
        </ul>
        <h3 class="grand">Ressources :</h3>
        <ul>
          <div class='grand'> - ${saeData.ressources ? Object.values(saeData.ressources).join('<br> - ') : 'Aucune ressource'}</div>
        </ul>
         <div class='grand'><h3>Semestre : ${saeData.semestre}</h3></div>
        </div>
    `;

    document.getElementById('app').innerHTML = content; // Met tout le contenu généré dans l'élément avec l'ID "app"

}

else if (document.getElementById('app')) { // Si aucune SAÉ ne correspond, afficher un message d'erreur

    document.getElementById('app').innerHTML = '<p class="centre" >La page est introuvable...</p>';
}


