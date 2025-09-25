const quotewrapper = document.querySelector('.quote-wrapper');

const refreshButton = document.querySelector(".refresh-btn");

const loaderText=document.querySelector(".loader")

function showLoader(){
loaderText.classList.add("show")
quotewrapper.classList.add("hide")
}

function removeLoader()
{
    loaderText.classList.remove("show")
    quotewrapper.classList.remove("hide")
}


function fetchRandomQuote() {
    showLoader()
    fetch('https://dummyjson.com/quotes')
        .then((response) => response.json())
        .then((data) => {if(data)
        {
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            displayQuote(data.quotes[randomIndex])
            removeLoader()
        } // correct: data is an array
        })
        .catch((err) => console.log("something bad happened"));
}

function displayQuote(result) {
    quotewrapper.innerHTML = `
        <div class='quote-item'>
            <p>${result.id}</p>
            <p>${result.quote}</p>   
            <p>${result.author}</p>    
        </div>
    `;
}

fetchRandomQuote();

refreshButton.addEventListener("click", () =>
    fetchRandomQuote()
);
