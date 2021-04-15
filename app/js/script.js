import * as data from './symbols.js';

// Import data object from symbols
const x = data.default;

// Selected option values
const defaultOne = "EUR";
const defaultTwo = "USD";

// Initialize first dropdown
for (let i in x) {
    var sel = document.getElementById('sel1');
    var opt = document.createElement('option');
    opt.text = i;
    sel.add(opt);
    if (opt.innerHTML === defaultOne) {
        opt.selected = true;
    }
}

// Initialize second dropdown
for (let i in x) {
    var sel = document.getElementById('sel2');
    var opt = document.createElement('option');
    opt.text = i;
    sel.add(opt);
    if (opt.innerHTML === defaultTwo) {
        opt.selected = true;
    }
}



document.addEventListener('DOMContentLoaded', () => {

    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');

    num1.addEventListener('keyup', () => {
        var sel1 = document.getElementById('sel1').value;
        var sel2 = document.getElementById('sel2').value;

        fetch(`https://free.currconv.com/api/v7/convert?q=${sel1}_${sel2}&compact=ultra&apiKey=54c6d584168c9ff655e3`)
        .then(response => response.json())
        .then(data => {

            num2.value = num1.value * parseFloat(`${data[`${sel1}_${sel2}`].toFixed(2)}`);
        });
    })

})



