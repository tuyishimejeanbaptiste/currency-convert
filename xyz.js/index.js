   // Conversion rates (example rates, you would need to update these with actual exchange rates)
   var conversionRates = {
    'USD-$': 1,     // 1 USD = 1 USD
    'RWF': 100,     // 1 USD = 100 RWF
    'SHILINGS': 200  // 1 USD = 200 SHILINGS
    // Add more currencies as needed
};

// Perform the conversion
var result = amount * conversionRates[fromCurrency] / conversionRates[toCurrency];

// Display the result
document.querySelector('.result label').innerText = 'Result: ' + result.toFixed(2) + ' ' + toCurrency.split('-')[1];


// Attach event listener to the convert button
document.querySelector('.convert button').addEventListener('click', convertCurrency);