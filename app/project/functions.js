document.addEventListener('DOMContentLoaded', function () {
    var colorChangeButton = document.getElementById('colorChangeButton');
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    function changeBackgroundColor() {
        document.body.style.backgroundColor = getRandomColor();
    }
    colorChangeButton.addEventListener('click', changeBackgroundColor);
});

document.addEventListener('DOMContentLoaded', function () {
    var quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Strive not to be a success, but rather to be of value. - Albert Einstein",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt"
    ];

    var quoteContainer = document.getElementById('quote-container');
    var generateQuoteButton = document.getElementById('generateQuoteButton');

    generateQuoteButton.addEventListener('click', function () {
        var randomIndex = Math.floor(Math.random() * quotes.length);
        quoteContainer.textContent = quotes[randomIndex];
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var clickCount = 0;
    var clickCounterButton = document.getElementById('clickCounterButton');
    var clickCounterDisplay = document.getElementById('clickCounterDisplay');

    clickCounterButton.addEventListener('click', function () {
        clickCount++;
        clickCounterDisplay.textContent = 'Button Clicked: ' + clickCount + ' times';
    });
});

