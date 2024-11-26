let sae = Object.keys(SAE); // Récupère les clés des SAE
console.log(sae);

let titresae = ''; // Génère la liste des SAE

let titre = Object.values(SAE).map(sae => sae.titre); // Titres des SAE
console.log(titre);

let compétences = Object.values(SAE).map(sae => sae.compétences); // Compétences des SAE

// Génère la liste des SAE (pour la page 2)
for (let i = 0; i < sae.length; i++) {
    titresae += `
        <a href='/SAE.html?sae=${sae[i]}'> 
            <div class='sae'> 
                <h1 class='centre'>${sae[i]}</h1> 
                <p>${titre[i]}</p> 
                <p class='compétence'> ${compétences[i].join(', ')}</p>
            </div>
        </a>
    `;
}

if (document.querySelector(".listee")) {
    document.querySelector(".listee").innerHTML = titresae;
}


document.querySelector(".liste").innerHTML = sae;

const params = new URLSearchParams(windows.location.search);

const saeID = params.get('sae');

if (saeID && SAE[saeID]) {
    const saeData = SAE[saeID];
    let content = `
    <div class="sae-contenue">
        <p><strong class='description'>Description :</strong> ${saeData.description}</p>
        <h3>Activités</h3>
        <ul>
            <li>${saeData.AC ? Object.values(saeData.AC).join('</li><li>') : 'Aucune activité'}</li>
        </ul>
        <h3>Ressources</h3>
        <ul>
            <li>${saeData.ressources ? Object.values(saeData.ressources).join('</li><li>') : 'Aucune ressource'}</li>
        </ul>
        <p><strong>Semestre :</strong> ${saeData.semestre}</p>
         </div>
    `;

    document.getElementById('app').innerHTML = content;

} 
