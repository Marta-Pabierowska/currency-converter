console.log("Hello!");

const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

const rateUSD = 4.42;
const rateEUR = 4.70;
const rateGBP = 5.36;
const rateCHF = 4.77;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    let result;

    switch (currency) {
        case "USD":
            result = amount / rateUSD;
            break;

        case "EUR":
            result = amount / rateEUR;
            break;

        case "GBP":
            result = amount / rateGBP;
            break;

        case "CHF":
            result = amount / rateCHF;
            break;
    }

    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});