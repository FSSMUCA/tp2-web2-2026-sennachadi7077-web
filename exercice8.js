let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"

let nomClean = nom.trim();
if (nomClean === "") {
    nomClean = "Inconnu";
}


let ageEntier = parseInt(age, 10);
let ageValid = Number.isNaN(ageEntier) && ageEntier > 0;

let emailValid = false;
if (typeof email === "string") {
    const atIndex = email.indexOf("@");
    if (atIndex !== -1) {
        const dotAfter = email.indexOf(".", atIndex + 1);
        emailValid = dotAfter !== -1;
    }
}


let scoreNum = parseInt(scoreJeu, 10);
if (Number.isNaN(scoreNum)) {
    scoreNum = 0;
}


let adminBool;
if (estAdmin === "true") {
    adminBool = true;
} else if (estAdmin === "false") {
    adminBool = false;
} else {
   
    adminBool = estAdmin === "true";
}


let derniere = derniereConnexion ?? "Jamais connecté";


let connexionsNum = parseInt(nombreConnexions, 10);
let connexionsMsg;
if (isNaN(connexionsNum) || connexionsNum === 0) {
    connexionsMsg = "Aucune connexion";
} else {
    connexionsMsg = connexionsNum;
}

console.log("=== Rapport de validation ===");
console.log("Nom :", nomClean);
if (ageValid) {
    console.log("Age :", ageEntier);
} else {
    console.log("Age : valeur invalide (", age, ")");
}
console.log("Email :", emailValid ? "valide" : "invalide");
console.log("Score de jeu :", scoreNum);
console.log("Est admin :", adminBool);
console.log("Dernière connexion :", derniere);
console.log("Nombre connexions :", connexionsMsg);
