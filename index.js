

const userInput = prompt("Enter a list of froyo flavors (comma-separated):");

// Ensure input is valid
if (userInput) {
    // Split input into an array and trim spaces
    const flavors = userInput.split(',').map(flavor => flavor.trim().toLowerCase());

    // Count occurrences of each flavor
    const flavorCounts = {};
    flavors.forEach(flavor => {
        flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
    });

    // Log the result as a table in the console
    console.table(flavorCounts);
} else {
    console.log("No input provided.");
}

        

