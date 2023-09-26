export const recettes = [{
    title: "cafe",
    ingredients: {
        coffee: 15,
        milk: 50,
        water: 200,
    }
},
    {
        title: "moka",
        ingredients: {
            coffee: 30,
            milk: 50,
            water: 200,
        }
    }]

function checkEau(quantite, recette) {
    return Math.floor(quantite / recette);
}

function checkLait(quantite, recette) {
    return Math.floor(quantite / recette);
}

function checkGrain(quantite, recette) {
    return Math.floor(quantite / recette);
}

/**
 *
 * @param deLEau
 * @param duLait
 * @param desGrain
 * @return {number}
 */
export function checkCafe(deLEau, duLait, desGrain) {
    let lesRetours = [
        checkEau(deLEau, 200),
        checkLait(duLait, 50),
        checkGrain(desGrain, 15)];

    return Math.min(...lesRetours);

}