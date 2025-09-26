const categories = ["All", "Men", "Women", "Kids"];

const contents = [
  {
    id: "Men",
    label: "Men Shirt 1",
  },
  {
    id: "Men",
    label: "Men Shirt 1",
  },
  {
    id: "Men",
    label: "Men Shirt 1",
  },
  {
    id: "Men",
    label: "Men Shirt 1",
  },
  {
    id: "Women",
    label: "woMen Shirt 1",
  },
  {
    id: "Women",
    label: "woMen Shirt 1",
  },
  {
    id: "Women",
    label: "Men Shirt 1",
  },
  {
    id: "Kids",
    label: "kids Shirt 1",
  },
];

const filterButtons=document.querySelector('.filter-buttons-wrapper')

const contentWrapper=document.querySelector('.content-wrapper')
    
function createCategory()
{
    categories.forEach((category,index)=>{
        const buttonElement=document.createElement('button')
        buttonElement.innerText=category
        buttonElement.classList.add('filter-button')
        buttonElement.setAttribute('data-filter',category)
        filterButtons.appendChild(buttonElement)
    })
}

function createContent()
{
    contents.forEach((content)=>
    {
    const singleItemContent=document.createElement('div')
    singleItemContent.classList.add('card',content.id)
    singleItemContent.textContent=content.label
    contentWrapper.appendChild(singleItemContent)
    }
    )
}

createCategory()
createContent()

const allFilterButtons=document.querySelectorAll('.filter-button')

const allCards=document.querySelectorAll('.card')

function filterCardsByCategory(currentCategory,allCards)
{
    allCards.forEach((cards)=>{
        const isShowAllCards=currentCategory.toLowerCase()==='all'
        const isItemFiltered=!cards.classList.contains(currentCategory)
        if(isItemFiltered && !isShowAllCards)
        {
            cards.classList.add("hide")
        }
        else{
            cards.classList.remove("hide")
        }
    })
}

allFilterButtons.forEach((singleButton)=>{
    singleButton.addEventListener("click",(e)=>{
        const extractCurrentCategory=singleButton.dataset.filter
        filterCardsByCategory(extractCurrentCategory,allCards)        
    })
})