document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const resultField = document.getElementById("result");
    const buttons = document.querySelectorAll(".buttons button");

    // Initialize result field
    let resultValue = "";

    // Event listener for button clicks
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonText = this.innerText;

            switch (buttonText) {
                case "=":
                    try {
                        resultValue = eval(resultValue).toString();
                    } catch (error) {
                        resultValue = "Error";
                    }
                    break;
                case "C":
                    resultValue = "";
                    break;
                default:
                    resultValue += buttonText;
            }

            // Update the result field
            resultField.value = resultValue;
        });
    });
});
