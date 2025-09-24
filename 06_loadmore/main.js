const prodContainer=document.querySelector('.products-container')

const loadbtn=document.querySelector('.load-btn')

let currentStep=0

async function fetchListOfproducts(getCurrentStep) {
    try {
        const data=await fetch(`https://dummyjson.com/products?limit=10&skip=${getCurrentStep===0?0:getCurrentStep*10}`,{method:"GET"})
        const response=await data.json()
        console.log(response)
        
        if(response && response.products){
            displayProducts(response.products)
        }
    } catch (error) {
        console.log(error)
    }
}

function displayProducts(productsList) {
    productsList.forEach((element, index) => {
        const productItemWrapper = document.createElement('div');
        const productTitle = document.createElement('p');
        const productThumbNail = document.createElement('img'); // Change here
        const productDescription = document.createElement('p');
        const productPrice = document.createElement('p');

        productTitle.textContent = element.brand;
        productThumbNail.src = element.images[0]; // Use the first image
        productThumbNail.alt = element.title || 'Product Image'; // Optional
        productThumbNail.style.width = '100px'; // Optional styling
        productDescription.textContent = element.description;
        productPrice.textContent = `$${element.price.toFixed(2)}`;

        productItemWrapper.appendChild(productThumbNail);
        productItemWrapper.appendChild(productTitle);
        productItemWrapper.appendChild(productPrice);
        productItemWrapper.appendChild(productDescription);

        prodContainer.appendChild(productItemWrapper);
    });
    if(prodContainer.children.length===100)
    {
        loadbtn.setAttribute('disabled','true')
    }
}

fetchListOfproducts(currentStep)

loadbtn.addEventListener('click',()=>{
    fetchListOfproducts(currentStep+=1)
})