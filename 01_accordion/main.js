const data = [
  {
    id: '1',
    questions: "What are accordion components?",
    answer: "User interface elements used for showing and hiding content sections."
  },
  {
    id: '2',
    questions: "Why use an accordion?",
    answer: "To improve UI/UX by hiding unnecessary information until needed."
  },
  {
    id: '3',
    questions: "Is this accordion dynamic?",
    answer: "Yes! It’s rendered from a JavaScript array of data."
  },
];

const accordionWrapper = document.querySelector(".accordion");

function createAccordionData() {
  accordionWrapper.innerHTML = data.map((item) => `
    <div class="accordion_item">
      <div class="accordion_title">
        <h3>${item.questions}</h3>
        <h2>⬇️</h2>
      </div>
      <div class="accordion_content">
        <p>${item.answer}</p>
      </div>
    </div>
  `).join("");
}

createAccordionData();

// After DOM has new content
const getAccordionTitles = document.querySelectorAll(".accordion_title");

getAccordionTitles.forEach((item) => {
  item.addEventListener('click', () => {

    // If already active, just remove and return (toggle off)
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      return;
    }

    // Otherwise, remove active class from all
    getAccordionTitles.forEach((el) => el.classList.remove('active'));

    // Then add to clicked one
    item.classList.add('active');
  });
});
