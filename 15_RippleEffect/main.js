const getAllButtons=document.querySelectorAll('.ripple-effect')

getAllButtons.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        console.log(e.clientX,e.target.offsetLeft);

        let xCordinatevalue=e.clientX-e.target.offsetLeft;
        let yCordinateValue=e.clientY-e.target.offsetTop;

        let ripplELement=document.createElement("span")
        ripplELement.style.left= `${xCordinatevalue}`
        ripplELement.style.top=`${yCordinateValue}`
        btn.appendChild(ripplELement)

        window.setTimeout(()=>{
            ripplELement.remove()
        },2000)
    })
})