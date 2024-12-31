
const all_quotes = [
    "What if it all works out?",
    "This too shall pass",
    "Time is finite",
    "Oops we can try again tomorrow, as long as we try",
    "You might be the sweetest peach on the tree, but some people just don’t like peaches."
];

function getRandomQuote() {
    const lastQuoteIndex = localStorage.getItem('lastQuoteIndex');
    const lastQuoteTime = localStorage.getItem('lastQuoteTime');
    const currentTime = new Date().getTime();

    // Check if 24 hours have passed
    if (lastQuoteTime && (currentTime - lastQuoteTime < 24 * 60 * 60 * 1000)) {
        // If less than 24 hours, return the last quote
        return all_quotes[lastQuoteIndex];
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * all_quotes.length);
        } while (randomIndex == lastQuoteIndex); // Ensure it's a different quote

        // Store the new quote index and time
        localStorage.setItem('lastQuoteIndex', randomIndex);
        localStorage.setItem('lastQuoteTime', currentTime);
        return all_quotes[randomIndex];
    }
}
document.getElementById('quote').textContent = getRandomQuote();
