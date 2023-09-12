function BMI(mass, height) {
    return mass / (height * height)
}
const MarkMass = 95 //78
const MarkHeight = 1.88 //1.69
const JohnMass = 85. //92
const JonhHeight = 1.76 //1.95

var MarkBMI = BMI(MarkMass, MarkHeight)
console.log("Mark's BMI: " + MarkBMI);

var JohnBMI = BMI(JohnMass, JonhHeight)
console.log("John's BMI: " + JohnBMI);

function HigherBMI(MarkBMI, JohnBMI) {
    if (MarkBMI > JohnBMI)
        console.log("Mark's BMI is higher than John's!");
    else console.log("John's BMI is higher than Mark's!");
}
HigherBMI(MarkBMI, JohnBMI);

function HigherBMIValue(MarkBMI, JohnBMI) {
    if (MarkBMI > JohnBMI)
        console.log("Mark's BMI (" + MarkBMI + ")is higher than John's(" + JohnBMI + ")!");
    else console.log("John's BMI (" + JohnBMI + ") is higher than Mark's(" + MarkBMI + ")!");
}
HigherBMIValue(MarkBMI, JohnBMI);