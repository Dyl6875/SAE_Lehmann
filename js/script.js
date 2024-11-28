let sae = Object.keys(SAE);
console.log(sae);

let titresae = '<div class="flex2">';
let titre = Object.values(SAE).map(sae => sae.titre);
console.log(titre);

let compétences = Object.values(SAE).map(sae => sae.compétences);

for (let i = 0; i < sae.length; i++) {
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

if (document.querySelector(".listee")) {
    document.querySelector(".listee").innerHTML = titresae;
}

const params = new URLSearchParams(window.location.search);
const saeID = params.get('sae');



if (saeID && SAE[saeID]) {
    const saeData = SAE[saeID];

    let content = `
    <div class="cent">
        <p><strong class='block centre'>Description :</strong> ${saeData.description}</p>
        <h3 class="cent2">Activités :</h3>
        <ul>
            - ${saeData.AC ? Object.values(saeData.AC).join('<br> - ') : 'Aucune activité'}
        </ul>
        <h3 class="cent2">Ressources :</h3>
        <ul>
            - ${saeData.ressources ? Object.values(saeData.ressources).join('<br> - ') : 'Aucune ressource'}
        </ul>
        <p><strong class="cent2">Semestre :</strong> ${saeData.semestre}</p>
         </div>
    `;

    document.getElementById('app').innerHTML = content;

}

else if (document.getElementById('app')) {

    document.getElementById('app').innerHTML = '<p class="centre" >La page est introuvable...</p>';
}