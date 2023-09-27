import {createElement, injectButton, injectInput, injectResultats, removeClass, renewTag} from "./functions/dom.js";
import {addIngredients, cafetiere, checkRecette, recettes} from "./api/coffee.js";

const wrapper = document.querySelector('#controle')
let message
let listeEtat

function clearMenu() {
    removeClass(".prendre")
    removeClass(".acheter")
    removeClass(".remplir")
}

function clearScreen() {
    clearMenu()
    removeClass("div.propositions")
}

function afficheEtat() {
    listeEtat = renewTag('ul');
    wrapper.append(listeEtat)
    let messages = []

    if (message !== undefined) {
        messages.push(message)
    }

    for (const cafetiereKey in cafetiere) {
        switch (cafetiereKey) {
            case "cups":
                messages.push(`Il y a ${cafetiere[cafetiereKey]} tasses`)
                break
            case "coffee":
                messages.push(`Il y a ${cafetiere[cafetiereKey]} g de grains de café`)
                break
            case "water":
                messages.push(`Il y a ${cafetiere[cafetiereKey]} ml d'eau`)
                break
            case "milk":
                messages.push(`Il y a ${cafetiere[cafetiereKey]} ml de lait`)
                break
            case "bank":
                messages.push(`Il y a ${cafetiere[cafetiereKey]} euro en caisse`)
                break
        }
    }

    injectResultats(messages, listeEtat)
}


function acheter() {
    clearMenu();

    message = "Choissez votre boisson"
    const divAcheter = createElement('div', {class: "acheter"})
    wrapper.append(divAcheter)

    injectButton(divAcheter, "Cappuccino");
    injectButton(divAcheter, "Latte");
    injectButton(divAcheter, "Expresso");

    document.querySelector('#Expresso').addEventListener('click', cafe.bind(null, "Expresso"))
    document.querySelector('#Latte').addEventListener('click', cafe.bind(null, "Latte"))
    document.querySelector('#Cappuccino').addEventListener('click', cafe.bind(null, "Cappuccino"))

    afficheEtat()
}

function cafe(boisson) {
    const {tarif, ingredients} = recettes.find((element) => element.title === boisson)
    const retour = checkRecette(boisson)

    if (retour > 0) {
        cafetiere.bank += tarif
        cafetiere.cups--
        cafetiere.milk -= ingredients.milk
        cafetiere.water -= ingredients.water
        cafetiere.coffee -= ingredients.coffee
        message = `Votre ${boisson} est servi !`
    }
    else {
        message = `Il n'y a pas assez d'ingrédients pour faire votre ${boisson} !`

    }
    clearScreen()
    etape4()
}


function prendre() {
    message = `J'ai retiré ${cafetiere.bank} euro de la caisse`
    cafetiere.bank = 0

    clearScreen()
    etape4()
}


function ajouter() {
    const qLait = Number(document.querySelector("#saisieMilk").value)
    const qEau = Number(document.querySelector("#saisieWater").value)
    const qCafe = Number(document.querySelector("#saisieCoffee").value)
    const qTasse = Number(document.querySelector("#saisieCups").value)

    addIngredients(qLait, qEau, qCafe, qTasse)
    message = "La cafetière a été remplie !"
    clearScreen()
    etape4()
}

function remplir() {
    clearMenu();
    const divRemplir = createElement('div', {class: "remplir"})
    const propal = document.querySelector(".propositions")
    propal.after(divRemplir)

    injectInput(divRemplir, 'saisieWater', "Quantité d'eau : ")
    injectInput(divRemplir, 'saisieMilk', "Quantité de lait : ")
    injectInput(divRemplir, 'saisieCoffee', "Quantité de café : ")
    injectInput(divRemplir, 'saisieCups', "Nombre de tasses : ")
    injectButton(divRemplir, "Ajouter");

    document.querySelector('#Ajouter').addEventListener('click', ajouter)
}


function etape4() {
    const propositions = createElement('div', {class: "propositions"})
    wrapper.append(propositions)
    injectButton(propositions, "Prendre");
    injectButton(propositions, "Remplir");
    injectButton(propositions, "Acheter");

    document.querySelector('#Acheter').addEventListener('click', acheter)
    document.querySelector('#Remplir').addEventListener('click', remplir)
    document.querySelector('#Prendre').addEventListener('click', prendre)

    afficheEtat()
}

document.querySelector('#start').remove()
etape4()


