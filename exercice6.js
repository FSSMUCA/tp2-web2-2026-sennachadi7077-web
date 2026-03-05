let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false
console.log("Partie A : utilisation de ??");
console.log("nom ?? \"valeur par défaut\"    ->", nom ?? "valeur par défaut");
console.log("age ?? \"valeur par défaut\"    ->", age ?? "valeur par défaut");
console.log("ville ?? \"valeur par défaut\"  ->", ville ?? "valeur par défaut");
console.log("score ?? \"valeur par défaut\"  ->", score ?? "valeur par défaut");
console.log("actif ?? \"valeur par défaut\"  ->", actif ?? "valeur par défaut");


console.log("\nPartie B : utilisation de ||");
console.log("nom || \"valeur par défaut\"    ->", nom || "valeur par défaut");
console.log("age || \"valeur par défaut\"    ->", age || "valeur par défaut");
console.log("ville || \"valeur par défaut\"  ->", ville || "valeur par défaut");
console.log("score || \"valeur par défaut\"  ->", score || "valeur par défaut");
console.log("actif || \"valeur par défaut\"  ->", actif || "valeur par défaut");

console.log("\nPartie C : comparaison ?? vs ||");
const vars = {nom, age, ville, score, actif};
for (const [key, value] of Object.entries(vars)) {
    const nullish = value ?? "valeur par défaut";
    const logical = value || "valeur par défaut";
    const comparison = (nullish === logical) ? "même résultat" : "résultat différent";
    console.log(`${key} : ?? et || -> ${comparison}`);
}
