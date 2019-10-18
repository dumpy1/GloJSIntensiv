var money = 19800;

var income = "1500" ;

var addExpenses = "Комуналка, Кредит, алименты";

let deposit = true;

const mission = 458016.52;

const period = 6;



console.log('typeof money: ' +typeof(money));
console.log('typeof income: ' +typeof(income));
console.log('typeof deposit: ' +typeof(deposit));
console.log('income.length: ' +income.length);
console.log('Период ' + (period) + ' месяцев ');
console.log('Цель заработать ' + (mission) + ' рублей' );

addExpenses = addExpenses.toLocaleLowerCase ();
let arr = addExpenses.split(',');
console.log('arr: ', arr);

let budgetDay = money/30;

console.log('budgetDay: ', budgetDay);

console.log(money % 30);



console.log('похоже, что всё работает!!!');