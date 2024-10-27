const quoteContainer = document.getElementById("quote_container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const tweetBtn = document.getElementById("twitter");
const nextBtn = document.getElementById("next");
const loader = document.getElementById("loader");
let quotes = [];

// Show loading
function loading() {
    loader.style.display = "block";
    quoteContainer.style.display = "none";
}

function complete() {
    quoteContainer.style.display = "block";
    loader.style.display = "none";
}


const newQuote = async () => {
    loading();
    // await getQuotes();
    // const quote = quotes[0];
    // quoteText.textContent = quote.quote;
    // quoteAuthor.textContent = quote.author;
    complete();
}

async function getQuotes() {
    const URL = "https://api.api-ninjas.com/v1/quotes?category=learning";
    try {
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                'X-Api-Key': API_KEY,
                'Content-Type': 'application/json'
            }
        });
        quotes = await response.json();
    } catch (error) {
        console.error("Error fetching quotes:", error);
    }
}

const tweetQuote = () => {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent}%0A-By ${quoteAuthor.textContent}`;
    window.open(twitterURL, '_blank');
};

tweetBtn.addEventListener('click', tweetQuote);
nextBtn.addEventListener('click', newQuote);

newQuote();
