/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `Quotes - Here we save famous quotes, along with known features about them
***/
const quotes = [
  {
    quote: "The closer we are to danger, the farther we are from harm.",
    source: "H.G. Pippin",
    citation: "The Lord of the Rings: The Two Towers",
    year: "2002",
    theme: "Comedy"
  },
  {
    quote: "When the Lord closes a door, somewhere he opens a window.",
    source: "Maria",
    citation: "The Sound of Music",
    year: "1965",
    theme: "Hope"
  },
  {
    quote: "Polish and refine whatever talents the Lord has given you. Go forth in life with a twinkle in your eye and a smile on your face, but with great and strong purpose in your heart",
    source: "Gordan B. Hinckley",
    citation: "General Conference",
    year: "2001",
    theme: "Wisdom"
  },
  {
    quote: "Turn your wounds into Wisdom.",
    source: "Oprah Winfrey",
    citation: "Wellesley College, Commencement Address",
    year: "1997",
    theme: "Comfort"
  },
  {
    quote: "This is not the end; It is not even the beginning of the end, But it may be the end of the beginning.",
    source: "Winston Churchill",
    citation: "Mansion House",
    year: "1942",
    theme: "Wisdom"
  },
  {
    quote: "Do, or do not… there is no try.",
    source: "Yoda",
    citation: null,
    year: null,
    theme: "Wisdom"
  } 
];

//lastQuote - is used to remember what quote was last presented to the use
var lastQuote = 0;

/***
 * `getRandomQuote` - This function randomly decides what quote to present to the user, also checking double-checking so no quote is presented 2 times in a row.
***/
function getRandomQuote(){
  var randomNumber = 0;
  
  do {
    randomNumber = Math.floor(Math.random() * (quotes.length) );
  } while(randomNumber == lastQuote);

  //Saving the location of the quote now being returned for future use.
  lastQuote = randomNumber;
  
  return quotes[randomNumber];
}

function getRandomNumber(max) {
  return Math.floor( Math.random() * max ) + 1;
}

function generateNewBackgroundColor(){
  const a = getRandomNumber(255);
  const b = getRandomNumber(255);
  const c = getRandomNumber(255);
  
  document.body.style.backgroundColor = `rgb(`+ a + `, ` + b + `, ` + c + `)`;
}

//Timer - used to reset the quote wait time if the "Load Quote" button is clicked
let timer;

/***
 * `printQuote` - This function sets up the HTML of the quote, including the year and citation if any are known to exist for that quote. That and chooses a new background color.
***/
function printQuote(){
  clearInterval(timer);
  timer = setInterval(printQuote, 10000);

  generateNewBackgroundColor();

  const randomQuote = getRandomQuote();
  let htmlString = 
  `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`;
  
  if(randomQuote["citation"] !== null){
    htmlString += `<span class="citation">${randomQuote.citation}</span>`;
  }
 
  if(randomQuote["year"] !== null){
    htmlString += `<span class="year">${randomQuote.year}</span>`;
  }
  
  if(randomQuote["theme"] !== null){
    htmlString += `<span class="year">${randomQuote.theme}</span>`;
  }
  
  htmlString += `</p>`;

  document.getElementById('quote-box').innerHTML = htmlString;   
}

printQuote();

/***
 * This step finally clicks the print quote button click for the user to view a new quote
***/
 document.getElementById('load-quote').addEventListener("click", printQuote, false);