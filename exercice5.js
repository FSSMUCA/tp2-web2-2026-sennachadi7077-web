let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0]

function classifier(n) {
    if (Number.isNaN(n)) {
        return "INVALIDE";
    }
    if (n === Infinity || n === -Infinity) {
        return "INFINI";
    }
    
    if (Object.is(n, -0)) {
        return "ZERO NEGATIF";
    }
    if (Number.isInteger(n)) {
        if (Number.isSafeInteger(n)) {
            return "ENTIER SUR";
        } else {
            return "ENTIER HORS LIMITES";
        }
    }
    return "DECIMAL";
}
nombres.forEach(n => console.log(`${n} -> ${classifier(n)}`));