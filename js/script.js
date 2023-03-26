{
    const welcome = () => {
        console.log("WELCOME!");
    }

    welcome();
    
    const calculateResult = (amount, currency) => {
        const rateUSD = 4.42;
        const rateEUR = 4.70;
        const rateGBP = 5.36;
        const rateCHF = 4.77;

        switch (currency) {
            case "USD":
                return amount / rateUSD;

            case "EUR":
                return amount / rateEUR;

            case "GBP":
                return amount / rateGBP;

            case "CHF":
                return amount / rateCHF;
        }
    };

    const updateResultText = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        
        const currency = currencyElement.value;

        const result = calculateResult(+amountElement.value, currencyElement.value);

        updateResultText(result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}