const stars = document.querySelectorAll(".star");
const selectedRatingValueText = document.querySelector(".selected-rating-value");

let currentTotalSelectedStars = -1;

stars.forEach((starItem, index) => {
    starItem.dataset.rating = index + 1;
    starItem.addEventListener("mouseover", handleMouseOver);
    starItem.addEventListener("click", handleClick);
    starItem.addEventListener("mouseleave", handleMouseLeave);
});

function handleMouseOver(event) {
    const rating = parseInt(event.target.dataset.rating);
    highlightStars(rating);
}

function handleClick(event) {
    const rating = parseInt(event.target.dataset.rating);
    currentTotalSelectedStars = rating;
    selectedRatingValueText.textContent = rating;
    highlightStars(rating);
}

function handleMouseLeave() {
    highlightStars(currentTotalSelectedStars);
}

function highlightStars(rating)
{
    for(let i=0;i<5;i++)
    {
        if(i<rating)
        {
            stars[i].textContent="★";
            stars[i].classList.add("active");
        }
        else{
            stars[i].textContent="☆";
            stars[i].classList.remove("active")
        }
    }
}
