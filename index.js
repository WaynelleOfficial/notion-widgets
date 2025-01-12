
function runQuotePageCode() {
const all_quotes = [
    "What if it all works out?",
    "This too shall pass",
    "Time is finite",
    "Oops we can try again tomorrow, as long as we try",
    "You might be the sweetest peach on the tree, but some people just don’t like peaches."
];

function getRandomQuote() {
    const lastQuoteIndex = localStorage.getItem('lastQuoteIndex');
    const lastQuoteDate = localStorage.getItem('lastQuoteDate');
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const currentDay = currentDate.toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

    // Check if it's past 6 AM and if the date has changed
    if (lastQuoteDate === currentDay && currentHour >= 6) {
        // If it's the same day and past 6 AM, return the last quote
        return all_quotes[lastQuoteIndex];
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * all_quotes.length);
        } while (randomIndex == lastQuoteIndex); // Ensure it's a different quote

        // Store the new quote index and date
        localStorage.setItem('lastQuoteIndex', randomIndex);
        localStorage.setItem('lastQuoteDate', currentDay);
        return all_quotes[randomIndex];
    }
}

document.getElementById('quote').textContent = getRandomQuote();
}




function runClockPageCode() {
// CLOCK

const clock = document.getElementById('clock');
const cityDropdown = document.getElementById('city');

// Function to update the clock
function updateClock() {
    const selectedCity = cityDropdown.value;
    console.log(selectedCity);
    const now = new Date();
    console.log(now);

    // Get the time in the selected city's timezone in 12-hour format
    const options = { 
        timeZone: selectedCity, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: undefined, // Remove seconds
        hour12: true // Enable 12-hour format
    };

    const cityTime = new Intl.DateTimeFormat("en-US", options).format(now);
    console.log(cityTime);

    // Convert "AM" and "PM" to lowercase for consistency
    const formattedTime = cityTime.replace(/AM|PM/, match => match.toLowerCase());

    // Display the formatted time
    clock.textContent = formattedTime;
}

// Event listener for dropdown change
cityDropdown.addEventListener('change', updateClock);

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize clock on page load
updateClock();
}

if (window.location.pathname.includes("clock.html")) {
    runClockPageCode();
} else if (window.location.pathname.includes("quotes.html")) {
    runQuotePageCode();
} 
