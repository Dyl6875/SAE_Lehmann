let param = new URLSearchParams(location.search)
let info = param.get("num")
document.querySelector(".titre").innerHTML=SAE[info].titre
document.querySelector(".compétences").innerHTML=SAE[info].compétences
document.querySelector(".déscription").innerHTML=SAE[info].déscription
document.querySelector(".AC").innerHTML=SAE[info].AC
document.querySelector(".ressources").innerHTML=SAE[info].ressources
document.querySelector(".semestre").innerHTML=SAE[info].semestre