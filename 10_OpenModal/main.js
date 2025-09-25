const openModal=document.querySelector('.openModal')

const modalBackground=document.querySelector('.modal-bg')

const closeBtn=document.querySelector('.close-btn')


const closeBtnModal=document.querySelector('.close')

const submitBtnModal=document.querySelector('.submit')

openModal.addEventListener("click",()=>{
    modalBackground.style.display="block"
})

closeBtn.addEventListener("click",()=>{
            modalBackground.style.display="none"
})

closeBtnModal.addEventListener("click",()=>{
            modalBackground.style.display="none"
})

window.addEventListener("click",()=>{
    // console.log(event.target);
    if(event.target===modalBackground)
        {
        modalBackground.style.display="none"

    }    
})