var dolphinScore = [96, 108, 89];
var koalaScore = [88, 91, 100];

function CalculateEverage(scores) {
    var totalScore = scores.reduce((acc, scores) => acc + scores, 0)
    return totalScore / scores.length;
}

//task 1
var everageDolphinScore = CalculateEverage(dolphinScore);
console.log("everage DolphinScore: " + everageDolphinScore);
var everageKoalaScore = CalculateEverage(koalaScore);
console.log("everage KoalaScore: " + everageKoalaScore);

// task 2
function compare(everageDolphinScore, everageKoalaScore) {
    if (everageDolphinScore > everageKoalaScore)
        console.log("Dolphin is winner!");
    else if (everageDolphinScore < everageKoalaScore)
        console.log("Koala is winner!");
    else console.log("the two teams drew");
}
compare(everageDolphinScore, everageKoalaScore)

//task 3 and 4
console.log("");

function checkMinmumScore(scores) {
    return scores >= 100;
}
if (everageDolphinScore > everageKoalaScore && checkMinmumScore(everageDolphinScore))
    console.log("Dolphin is winner!");
else if (everageDolphinScore < everageKoalaScore && checkMinmumScore(everageKoalaScore))
    console.log("Koala is winner!");
else if (everageDolphinScore == everageKoalaScore && checkMinmumScore(everageDolphinScore) && checkMinmumScore(everageKoalaScore))
    console.log("The two teams drew");
else console.log("No one wins to the trophy ");