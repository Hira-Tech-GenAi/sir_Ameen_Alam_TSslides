//BMI calculator:y

// Function to calculate BMI
function calculateBMI(weightKg: number, heightCm: number): number {
    // Convert height to meters
    const heightMeters = heightCm / 100;
    
    // Calculate BMI
    const bmi = weightKg / (heightMeters * heightMeters);
    
    return bmi;
}

// Example usage
const weight = 68; // Weight in kilograms
const height = 160; // Height in centimeters

const bmiResult = calculateBMI(weight, height);
console.log(`Your BMI is approximately ${bmiResult.toFixed(2)}`);

// Categorize BMI
if (bmiResult < 18.5) {
    console.log("You are underweight.");
} else if (bmiResult >= 18.5 && bmiResult < 24.9) {
    console.log("You are in the healthy weight range.");
} else if (bmiResult >= 25 && bmiResult < 29.9) {
    console.log("You are overweight.");
} else {
    console.log("You are obese.");
}

