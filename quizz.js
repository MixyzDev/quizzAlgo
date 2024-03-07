const prompt = require("prompt-sync")()
choice = ""
let quizz = [
    
    ["Quel est la capital de l'Italie?", "Naples", "Rome", "Turin", "Milan"],
    ["En quelle années est tombé le mur de Berlin?", "1979", "1989", "1789", "2024"],
    ["En quelle année a été déclarer l'indépendance de la Belgique?", "1924", "1769", "1858", "1830"],
    ["Combien il y a t-il de continents?", "3", "4", "6", "5"],
    ["Au plus près, a quelle distance est la Lune de la Terre?", "362 km", "256400 km", "362600 km", "406300 km"]
]
let response = ["Rome", "1989", "1830", "5", "362600 km"]
let count = 0

for (let i = 0; i < quizz.length; i++) {
    for (let j = 0; j < quizz.length; j++) {
        console.log(quizz[i][j]);
    }
    choice = prompt("Quelle est ta réponse?");
    if (response[i].toLowerCase() == choice.toLowerCase()) {
        console.log("Bravo");
        count++
    } else if (response[i].toLowerCase != choice.toLowerCase()) {
        console.log("looser");
        count--
    }
    console.log(count);
}
console.log("Vous avez obtenu " + count);


