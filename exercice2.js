
let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];
for (let i = 0; i < valeurs.length; i++) {
    let valeur = valeurs[i];
   let affichage = String(valeur);

    if (valeur === "") {
        affichage = "Chaîne vide";
    }
    if (valeur) {
        console.log(affichage + " : truthy");
    } else {
        console.log(affichage + " : falsy");
    }
}