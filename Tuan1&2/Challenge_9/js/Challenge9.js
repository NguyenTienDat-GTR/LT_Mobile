//task 1 tao ham "printForecast" de in duu doan nhiet do
function printForecast(arr) {
    let forecaast = '';
    for (let i = 0; i < arr.length; i++) {
        forecaast += `${arr[i]}C in ${i+1} days ... `;
    }
    console.log(forecaast);
}

//task 2 su dng ham 'prinForecast' voi du lieu test
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log("data1: ", data1);
printForecast(data1);

console.log("data2: ", data2);
printForecast(data2);