const tabContainer=document.querySelector('.container')

const tabButtons=document.querySelectorAll('.tab-button')

const tabContent=document.querySelectorAll('.content')


tabContainer.addEventListener("click",(event)=>{
    // console.log(event.target.dataset)
    const currentId=event.target.dataset.id
    if(currentId)
    {
        tabButtons.forEach((btn=>{
            btn.classList.remove('active')
        }))
        event.target.classList.add('active')

        tabContent.forEach((content)=>{
            content.classList.remove('active')
        })
        currentElement.classList.add('active')
        const currentElement=document.getElementById(currentId)
    }
})

// the above code is example of event delegation