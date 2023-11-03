// Variables
const quoteContainer = document.getElementById("quotecontainer");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const buttonNewQuote = document.getElementById("button-quote");
const buttonX = document.getElementById("buttonx");

let apiQuotes = [];

// Extract Quote
function newQuote(quotes) {
  const quoteRand = quotes[Math.floor(Math.random() * apiQuotes.length)];
  authorText.innerText = quoteRand.author;

  if (!quoteRand.author) {
    quoteText.innerText = "Unknown";
  } else {
    quoteText.innerText = quoteRand.text;
  }

  if (quoteRand.text.length > 100) {
    quoteText.classList.toggle("long-quote");
  }
}

// Get Quotes from API
async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const apiData = await fetch(apiUrl);
    apiQuotes = await apiData.json();
    newQuote(apiQuotes);
  } catch (Error) {
    alert("Oppps! Something went wrong");
    // catch posible errors
  }
}

// On Load
getQuotes();
