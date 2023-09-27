/**
 *
 * @param {string} tagName
 * @param {object} attributes
 * @return {HTMLElement}
 */
export function createElement(tagName, attributes = {}) {
    const element = document.createElement(tagName)
    for (const [attribute, value] of Object.entries(attributes)) {
        element.setAttribute(attribute, value)
    }

    return element
}

/**
 * Injecte les <button> en fonction de l'id
 * @param conteneur
 * @param {string} id
 */
export function injectButton(conteneur, id) {
    const newButton = createElement('button', {id: id})
    newButton.innerText = id
    conteneur.prepend(newButton)
}

/**
 * Injecte les <li> pour l'affichage à partir de lesMessages
 * @param {Array[string]} lesMessages
 * @param laListe
 * @return {Promise<void>}
 */
export async function injectResultats(lesMessages, laListe) {

    lesMessages.forEach((element) => {
        console.log(element)
        let liListe = createElement('li')
        liListe.innerText = element
        laListe.append(liListe)
    })

}

/**
 * Injecte des éléments de type input dans le wrapper
 * @param wrapper référence de l'élément parent
 * @param id identifiant de l'élément
 * @param message texte du label associé
 */
export function injectInput(wrapper, id, message) {
    const labelSaisieWater = createElement('label', {for: id})
    labelSaisieWater.innerText = message
    const saisieWater = createElement('input', {type: 'text', id: id})
    wrapper.prepend(saisieWater)
    wrapper.prepend(labelSaisieWater)
}

/**
 * Supprime si nécessaire un tag, puis le recréé
 * @param {string} tagName
 * @return {HTMLElement}
 */
export function renewTag(tagName) {
    const laListe = document.querySelector(tagName)
    if (laListe !== null) {
        laListe.remove()
    }
    return createElement(tagName)
}

/**
 * Supprime les éléments à partir d'une className
 * @param {string} className
 */
export function removeClass(className) {
    const element = document.querySelector(className)
    if (element !== null) {
        element.remove()
    }
}
