import {injectElements, renewTag} from "./functions/dom.js";

const wrapper = document.querySelector('#controle')

function start() {

    const etapes = [
        {title: "Commence à faire le café", duree: 1},
        {title: "Mouds les grains de café", duree: 3},
        {title: "Fait chauffer l'eau", duree: 4},
        {title: "Infuse les grains de café moulus", duree: 5},
        {title: "Verse le café dans une tasse", duree: 3},
        {title: "Ajoute un peu de lait dans la tasse", duree: 2},
        {title: "Le café est terminé.", duree: 1}]

    const laListe = renewTag('ul');
    wrapper.append(laListe)

    injectElements(etapes, laListe)

}

document.querySelector('#start').addEventListener('click', start)


