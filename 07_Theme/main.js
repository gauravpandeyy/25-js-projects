const ChangeThemeButton=document.querySelector('.change-theme-btn')

const body=document.querySelector('body')

ChangeThemeButton.addEventListener("click",()=>{
    if(body.classList.contains('light'))
    {
        body.classList.remove("light")
        body.classList.add('dark')
    }
    else{
        body.classList.remove("dark")
        body.classList.add('light')   
    }
     if(ChangeThemeButton.classList.contains('light'))
    {
        ChangeThemeButton.classList.remove("light")
        ChangeThemeButton.classList.add('dark')
    }
    else{
        ChangeThemeButton.classList.remove("dark")
        ChangeThemeButton.classList.add('light')   
    }
})