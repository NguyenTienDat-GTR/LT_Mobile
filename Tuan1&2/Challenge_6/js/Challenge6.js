// Task 1  Write a function 'calcTip' that takes any bill value as an input and returns
//the corresponding tip, calculated based on the rules above (you can check out
//the code from first tip calculator challenge if you need to). Use the function
//type you like the most. Test the function using a bill value of 100
const calcTip = (bill) =>
    (bill >= 50 && bill <= 300 ? tip = bill * 0.15 : tip = bill * 0.2);

//test CalcTip with 100
calcTip(100);
console.log("Tip for 100 is " + tip);

//task 2 And now let's use arrays! So create an array 'bills' containing the test data below
const bills = [125, 555, 44];

//task 3 Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
const tips = bills.map(calcTip)

//task 4 Bonus: Create an array 'total' containing the total values, so the bill + tip
const totals = bills.map((bill, index) => bill + tips[index]);

//print results in console
console.log("Bills: " + bills);
console.log("Tips: " + tips);
console.log("Totals: " + totals);