let sae = Object.keys(SAE); 
console.log(sae);

let titresae = ''; 
let titre = Object.values(SAE).map(sae => sae.titre); 
console.log(titre);

let compétences = Object.values(SAE).map(sae => sae.compétences); 

for (let i = 0; i < sae.length; i++) {
    titresae += `
        <a href='/sae.html?sae=${sae[i]}'> 
            <div class='S'> 
                <h1 class='titel'>${sae[i]}</h1> 
                <p>${titre[i]}</p> 
                <p class='compétence'> ${compétences[i].join(', ')}</p>
            </div>
        </a>
    `;
}

if (document.querySelector(".listee")) {
    document.querySelector(".listee").innerHTML = titresae;
}

const params = new URLSearchParams(window.location.search);
const saeID = params.get('sae'); 

if (saeID && SAE[saeID]) {
    const saeData = SAE[saeID]; 

    let content = `
    <div class="saecontenue">
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

else if (document.getElementById('app')) 
    {

    document.getElementById('app').innerHTML = '<p>SAE non trouvée !</p>';
}