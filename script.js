// Function to convert miles to kilometers
function convertMilesToKilometers(miles) {
    return miles * 1.60934;
}

// Function to handle button click and perform conversion
function handleConversion() {
    const milesInput = document.getElementById('miles');
    const resultDisplay = document.getElementById('result');

    // Get value from input
    const miles = parseFloat(milesInput.value);

    // Check if input is valid (non-negative number)
    if (!isNaN(miles) && miles >= 0) {
        // Perform conversion
        const kilometers = convertMilesToKilometers(miles);

        // Display result
        resultDisplay.textContent = `${miles} miles is equal to ${kilometers.toFixed(2)} kilometers.`;

    } else {
        // If input is not valid
        resultDisplay.textContent = 'Please enter a valid non-negative number for miles.';
    }
}

// Event listener for button click
document.getElementById('convertBtn').addEventListener('click', handleConversion);
