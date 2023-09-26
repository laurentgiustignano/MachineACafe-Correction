import {createElement, injectInput, renewTag} from "./functions/dom.js";
import {checkCafe} from "./api/coffee.js";

const wrapper = document.querySelector('#controle')


function etape3() {

    injectInput(wrapper, 'saisieWater', "Quantité d'eau : ")
    injectInput(wrapper, 'saisieMilk', "Quantité de lait : ")
    injectInput(wrapper, 'saisieCoffee', "Quantité de café : ")

    const buttonCalcul = document.querySelector('#start')
    buttonCalcul.innerText = "Calculer"

}

function calculEtape3() {

    const quantiteEau = Number(document.querySelector('#saisieWater').value)
    const quantiteLait = Number(document.querySelector('#saisieMilk').value)
    const quantiteCafe = Number(document.querySelector('#saisieCoffee').value)

    const retour = checkCafe(quantiteEau, quantiteLait, quantiteCafe)
    console.log(retour)

    const listeResultat = renewTag('ul');
    wrapper.append(listeResultat)
    const resultat = createElement('li')
    const unS = retour > 1 ? "s" : ""
    resultat.innerText = `Avec ces ingrédient, je peux faire ${retour} café${unS}`
    listeResultat.append(resultat)

}

document.querySelector('#start').addEventListener('click', calculEtape3)
etape3()


