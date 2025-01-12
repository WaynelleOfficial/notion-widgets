
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
