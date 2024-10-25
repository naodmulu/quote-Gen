const quoteContainer = document.getElementById("quoteContainer")
const quoteText = document.getElementById("quote")
const quoteAuthor = document.getElementById("author")
const tweetBtn = document.getElementById("twitter")
const nextBtn = document.getElementById("next")
let quotes = [];
const newQuote = async () => {
    await getQuotes()
    const quote =  quotes[0]
    quoteText.textContent =  quote.quote 
    quoteAuthor.textContent =  quote.author 
    
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
        console.log("hello", typeof(quotes[0].quote));
    } catch (error) {
        console.error("Error fetching quotes:", error);
    }
}

const tweetQuote = () => {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent}%0A-By ${quoteAuthor.textContent}`;
    window.open(twitterURL, '_blank');
};


tweetBtn.addEventListener('click',tweetQuote)
nextBtn.addEventListener('click',newQuote);
// newQuote();
