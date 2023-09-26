import {createElement, injectElements, injectResultats, renewTag} from "./functions/dom.js";
import {recettes} from "./api/coffee.js";

const wrapper = document.querySelector('#controle')

function etape2() {
    const labelSasie = createElement('label', {for: 'saisie'})
    labelSasie.innerText = "Nombre de tasses de café : "
    const saisie = createElement('input', {type: 'text', id: 'saisie'})
    wrapper.prepend(saisie)
    wrapper.prepend(labelSasie)
    const buttonCalcul = document.querySelector('#start')
    buttonCalcul.innerText = "Calculer"

}

function calculEtape2() {
    const resultat = [
        {ingredient: 'water', quantite: 0, message: " ml d'eau"},
        {ingredient: 'milk', quantite: 0, message: " ml de lait"},
        {ingredient: 'coffee', quantite: 0, message: " g de grains de café"}]

    const nombreTasse = document.querySelector('#saisie').value * 1
    const {ingredients} = recettes.find((nom) => nom.title === "cafe")

    for (let ingredientsKey in ingredients) {
        resultat.find((element) => {
            if(element.ingredient === ingredientsKey)
                element.quantite = ingredients[ingredientsKey] * nombreTasse
        })
    }
    const listeResultat = renewTag('ul');
    wrapper.append(listeResultat)

    injectResultats(resultat, listeResultat)

}

document.querySelector('#start').addEventListener('click', calculEtape2)
etape2()


