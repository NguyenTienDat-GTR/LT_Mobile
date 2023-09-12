//task 1 tao mang "bills" chua 10 gia tri ngau nhien
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// task 2 tao mang trong cho tien tip va tong hoa don
const tips = [];
const totals = [];

const calcTip = (bill) =>
    (bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.2);

// task 3 su dung vong lap for de tinh tien tip va tong hoa don
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

//in ket qua
console.log("List bill: ", bills);
console.log("List tip: ", tips);
console.log("List total: ", totals);