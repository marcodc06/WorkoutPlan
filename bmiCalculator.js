function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultContainer = document.getElementById("result");

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    // inputs valid || mot
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultContainer.textContent = "Please enter valid height and weight values.";
        return;
    }

    // cal bmi
    var bmi = weight / ((height / 100) * (height / 100));

    // display the bmi
    resultContainer.textContent = "Your BMI is: " + bmi.toFixed(2);
}
