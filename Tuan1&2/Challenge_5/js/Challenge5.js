// task 1 Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) =>
    (score1 + score2 + score3) / 3;

//task 2 Use the function to calculate the average for both teams
var avgDolphinsData1 = calcAverage(44, 23, 71);
var avgKoalasData1 = calcAverage(65, 54, 49);

var avgDolphinsData2 = calcAverage(85, 54, 41);
var avgKoalasData2 = calcAverage(23, 34, 27);

//task 3 Create a function 'checkWinner' that takes the average score of each team as parameters 
//('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, 
//according to the rule above.
//Example: "Koalas win (30 vs. 13)".
var checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log("Dolphins win (" + avgDolphins + ") vs. " + avgKoalas + ")");
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log("Koalas win (" + avgKoalas + ") vs. " + avgDolphins + ")");
    } else {
        console.log("No team wins");
    }
}

//task 4 Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
checkWinner(avgDolphinsData1, avgKoalasData1);
checkWinner(avgDolphinsData2, avgKoalasData2);