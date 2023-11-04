// Variables
const quoteContainer = document.getElementById("quotecontainer");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const buttonNewQuote = document.getElementById("nbuttonquote");
const buttonX = document.getElementById("buttonx");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show loading
function loadingData() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Completed search and hide loading

function completedLoading() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// Extract Quote
function newQuote() {
  loadingData();
  const quoteRand = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  quoteText.innerText = quoteRand.text;

  if (!quoteRand.author) {
    authorText.innerText = "Unknown";
  } else {
    authorText.innerText = quoteRand.author;
  }

  if (quoteRand.text.length > 100) {
    quoteText.classList.toggle("long-quote");
  }
  completedLoading();
}

// Get Quotes from API
async function getQuotes() {
  loadingData();
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const apiData = await fetch(apiUrl);
    apiQuotes = await apiData.json();
    newQuote(apiQuotes);
    completedLoading();
  } catch (Error) {
    alert("Oppps! Something went wrong");
    // catch posible errors
  }
}

// Send Tweet
function newTweet() {
  const xUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(xUrl, "_blank");
}

//Event listeners
buttonNewQuote.addEventListener("click", newQuote);
buttonX.addEventListener("click", newTweet);

// On Load
getQuotes();
