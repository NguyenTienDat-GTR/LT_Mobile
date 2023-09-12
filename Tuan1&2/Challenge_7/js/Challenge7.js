// task 1 Tao doi tuong cho Mark va John
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
}
const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
}

//task 2 tao phuong thuc "calcBMI" de tinh chi so BMI
mark.calcBMI = function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
}
john.calcBMI = function() {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI.toFixed(2);
}

//task 3 so sanh BMI va in ket qua
if (mark.calcBMI() > john.calcBMI()) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI.toFixed(2)}) is higher than ${john.fullName}'s (${john.BMI.toFixed(2)})!`);
} else if (mark.BMI < john.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI.toFixed(2)}) is higher than ${mark.fullName}'s (${mark.BMI.toFixed(2)})!`);
} else {
    console.log(`${mark.fullName}'s BMI (${mark.BMI.toFixed(2)}) is equal to ${john.fullName}'s (${john.BMI.toFixed(2)})!`);
}