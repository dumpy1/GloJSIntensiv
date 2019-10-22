'use strict';

var money = prompt('Ваш месячный доход?');
console.log('money: ', typeof(money));

var income = "1500" ;

var addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
addExpenses = addExpenses.split(',');
console.log('addExpenses: ', addExpenses);

console.log('addExpenses: ', typeof(addExpenses));

let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('deposit: ', typeof(deposit));

let mandatoryExpenses1 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let mandatoryExpenses1Cost = prompt('Во сколько это обойдется?');
mandatoryExpenses1Cost *= 1;

let mandatoryExpenses2 = prompt('Какие обязательные ежемесячные расходы у вас есть?');
let mandatoryExpenses2Cost = prompt('Во сколько это обойдется?');
mandatoryExpenses2Cost *= 1;
console.log('mandatoryExpenses2Cost: ', typeof(mandatoryExpenses2Cost));

let budgetMonth  = money - (mandatoryExpenses1Cost + mandatoryExpenses2Cost);

console.log('budgetMonth: ', budgetMonth);

const mission = 458016.52;

let period = mission / budgetMonth;
console.log('period: ', Math.ceil(period));

let budgetDay = budgetMonth / 30;

console.log('budgetDay: ', Math.floor(budgetDay));

console.log('остаток:', money % 30);


   if (budgetDay >= 800) {
    alert ('Высокий уровень дохода');
} else if (budgetDay < 800 && budgetDay >= 300) {
    alert ('Средний уровень дохода');
} else if (budgetDay < 300 && budgetDay >= 0) {
    alert ('Низкий уровень дохода');
} else {
    alert ('Что то пошло не так');
}



console.log('похоже, что всё работает!!!');