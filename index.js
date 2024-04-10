// first question //

let celcuis=+prompt("Enter your celcuis? : ");
let fahrenheit=(celcuis*9/5)+32;
console.log("The tempreture in celcuis is : ",fahrenheit);

// second question //

let baseSalary = +prompt("Enter your base Salary? : ");
let hra = +prompt("Enter your hra? : ");
let da = +prompt("Enter your da? : ");
let ta = +prompt("Enter your ta? : ");
hra = baseSalary * hra / 100;
da = baseSalary * da / 100;
ta = baseSalary * ta / 100;
console.log("Your hra is : ", hra);
console.log("Your da is : ", da);
console.log("Your ta is : ", ta);
let grossSalary = baseSalary + hra + da + ta;
console.log("Your gross salary is : ", grossSalary);

// third question //

let fAngle=+prompt("Enter your first angle? : ");
let sAngle=+prompt("Enter your second angle? : ");
let tAngle=180-fAngle+sAngle;
console.log(tAngle);