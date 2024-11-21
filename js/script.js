let cle = Object.keys(SAE)
let description = []
let compétences = []
let sae = ""

for (let index = 0; index < cle.length; index++) {

    description.push(SAE[cle[index]].titre)
    compétences.push(SAE[cle[index]].compétences)

}

for (let forme = 0; forme < cle.length; forme++) {

    sae += '<a href="sae.html"><div class="sae"><h2>' + cle[forme] + '</h2><div class="block">' + description[forme]
    + '</div><div class="block">' + compétences[forme] + '</div></div></a>'

}

document.querySelector(".liste").innerHTML = sae

