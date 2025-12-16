const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", category: "Motivation" },
  { text: "Life is what happens when you're busy making other plans.", category: "Life" },
  { text: "Success is not final, failure is not fatal.", category: "Success" }
];

// DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteBtn = document.getElementById("newQuote");
const addQuoteBtn = document.getElementById("addQuoteBtn");

// Show a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  quoteDisplay.innerHTML = `
    <p>"${quote.text}"</p>
    <small>— ${quote.category}</small>
  `;
}

// Create & handle adding new quotes
function createAddQuoteForm() {
  const quoteText = document.getElementById("newQuoteText").value.trim();
  const quoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (quoteText === "" || quoteCategory === "") {
    alert("Please enter both quote text and category");
    return;
  }

  const newQuote = {
    text: quoteText,
    category: quoteCategory
  };

  quotes.push(newQuote);

  // Clear inputs
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";

  alert("Quote added successfully!");
}

// Event listeners
newQuoteBtn.addEventListener("click", showRandomQuote);
addQuoteBtn.addEventListener("click", addQuote);
