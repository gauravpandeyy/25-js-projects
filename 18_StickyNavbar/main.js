const navbar=document.querySelector('.navbar')

let navTop=navbar.offsetTop

window.onscroll=function()
{
    handleStickNavbarOnScroll()
}

function handleStickNavbarOnScroll()
{
    if(window.scrollY>=navTop) navbar.classList.add('fix-navbar')
    else navbar.classList.remove('fix-navbar')
}
handleStickNavbarOnScroll()