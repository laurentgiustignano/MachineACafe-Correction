import {injectElements, renewTag} from "./functions/dom.js";

const wrapper = document.querySelector('#controle')

function start() {

    const etapes = [
        "Commence à faire le café",
        "Mouds les grains de café",
        "Fait chauffer l'eau",
        "Infuse les grains de café moulus",
        "Verse le café dans une tasse",
        "Ajoute un peu de lait dans la tasse",
        "Le café est terminé."
    ]
    const laListe = renewTag('ul');
    wrapper.append(laListe)

    injectElements(etapes, laListe)

}

document.querySelector('#start').addEventListener('click', start)


