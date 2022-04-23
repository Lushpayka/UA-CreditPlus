let yourSum = document.querySelector('.your-sum');
let yourDay = document.querySelector('.your-day');
const sum = document.querySelector('.sum');
const day = document.querySelector('.day');
let dayBack = document.querySelector('.day-info');
let sumBack = document.querySelector('.sum-info');
let stepSum = 500;
let actualPrice = 500;
let stepDay = 5;
let actualDay = 5;


sum.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('minus')) {
        if (actualPrice <= 500) {
            return `${actualPrice} грн`;
        } else {
            actualPrice -= stepSum;
            yourSum.textContent = `${actualPrice} грн`;
        }
    }
    if (target.classList.contains('plus')) {
        if (actualPrice >= 15000) {
            return `${actualPrice} грн`;
        } else {
            actualPrice += stepSum;
            yourSum.textContent = `${actualPrice} грн`;
        }
    }
    sumBack.textContent = `${actualPrice} грн`;
});
day.addEventListener('click', (event) => {
    let target = event.target;
    if (target.classList.contains('minus')) {
        if (actualDay <= 5) {
            return `${actualDay} днів`;
        } else {
            actualDay -= stepDay;
            yourDay.textContent = `${actualDay} днів`;
        }
    };
    if (target.classList.contains('plus')) {
        if (actualDay >= 30) {
            return `${actualDay} + днів`;
        } else {
            actualDay += stepDay;
            yourDay.textContent = `${actualDay} днів`;
        }
    };

    let date = new Date();

    let yearValue = new Date(Date.parse(date)).getFullYear();
    let monthValue = new Date(Date.parse(date)).getMonth() + 1;
    let dayValue = new Date(Date.parse(date)).getDate();

    dayValue +=actualDay;

    dayBack.textContent = `${dayValue}.${monthValue}.${yearValue}`;
    console.log(dayValue)

    
});


