/**
 * @typedef {coffee: number, milk: number, water: number} Ingredients
 * @property {number} coffee
 * @property {number} milk
 * @property {number} water
 *
 * @typedef {title: string, tarif: number, ingredients: Object} Recette
 * @property {string} title
 * @property {number} tarif
 * @property {Ingredients} ingredients
 *
 */

/**
 * @type {[{tarif: number, ingredients: {Ingredients}, title: string}]}
 */
export const recettes = [
    {
        title: "Expresso",
        tarif: 4,
        ingredients: {
            coffee: 16,
            milk: 0,
            water: 200,
        }
    },
    {
        title: "Latte", tarif: 7, ingredients: {
            coffee: 20, milk: 75, water: 350,
        },
    },
    {
        title: "Cappuccino", tarif: 6, ingredients: {
            coffee: 12, milk: 100, water: 200,
        }
    }]

/**
 *
 * @type {{bank: number, coffee: number, milk: number, cups: number, water: number}}
 */
export const cafetiere = {
    cups: 9, coffee: 120, water: 4000, milk: 540, bank: 0
}

/**
 *
 * @param {number} qLait
 * @param {number} qEau
 * @param {number} qCafe
 * @param {number} qTasse
 */
export function addIngredients(qLait, qEau, qCafe, qTasse) {
    cafetiere.milk += qLait
    cafetiere.water += qEau
    cafetiere.coffee += qCafe
    cafetiere.cups += qTasse
}

/**
 * Calcul le nombre de tasses possible entre une quantité en stock
 * et une quantité dans la recette
 * @param {number} stock
 * @param {number} recette
 * @return {number}
 */
function checkStock(stock, recette) {
    return Math.floor(stock / recette);
}

/**
 *
 * @return {number}
 */
function checkTasse() {
    return cafetiere.cups > 0 ? 1 : 0;
}

/**
 * Calcule le nombre de tasses possible avec la quantité d'ingrédients
 * de la machine pour une recette donnée
 * @param {string} nomRecette
 * @return {number}
 */
export function checkRecette(nomRecette) {
    const {ingredients} = recettes.find((boisson) => boisson.title === nomRecette)

    let lesRetours = [checkStock(cafetiere.water, ingredients.water), checkStock(cafetiere.milk, ingredients.milk), checkStock(cafetiere.coffee, ingredients.coffee), checkTasse()];

    return Math.min(...lesRetours);
}