function calculateBMI() {
    var heightInput = document.getElementById("height");
    var weightInput = document.getElementById("weight");
    var resultContainer = document.getElementById("result");

    var height = parseFloat(heightInput.value);
    var weight = parseFloat(weightInput.value);

    // inputs valid numbers or not
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultContainer.textContent = "Please enter valid height and weight values.";
        return;
    }

    var bmi;

    // Calculate bmi based on selected system
    if (document.getElementById("metric-toggle").checked) {
        // metric system -height in centimeters weight in kilograms
        bmi = weight / ((height / 100) * (height / 100));
    } else {
        // imperial system- height in inches weight in pounds
        bmi = (weight / (height * height)) * 703;
    }

    // hopefully displays
    resultContainer.textContent = "Your BMI is: " + bmi.toFixed(2);
}
