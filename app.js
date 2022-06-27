let quoteEl = document.getElementById('quote-text')
let citeEl = document.getElementById('cite')
let quotes = [
{quote:`The purpose of our lives is to be happy.`,
    name:  `Dalai Lama`},
{quote:`Life is what happens when you’re busy making other plans.`,
    name:`John Lennon`},
{quote:"You only live once, but if you do it right, once is enough.",
    name:"Mae West"},
{quote:"Get busy living or get busy dying.",
    name:"Stephen King"},
{quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    name:"Thomas A. Edison"},
{quote:"If you want to live a happy life, tie it to a goal, not to people or things.",
    name:"Albert Einstein"},
{quote:"Never let the fear of striking out keep you from playing the game.",
    name:"Babe Ruth"},
{quote:"Money and success don’t change people; they merely amplify what is already there.",
    name:"Will Smith"},
{quote:"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    name: "Steve Jobs"},
{quote:"Not how long, but how well you have lived is the main thing.",
    name: "Seneca"},
]
    
function generate(){
    let randomNum = Math.floor(Math.random() * quotes.length)
    quoteEl.textContent = quotes[randomNum].quote

    citeEl.textContent =quotes[randomNum].name
}