const btn = document.querySelector(".hex-btn")

const hexColorValue=document.querySelector(".hex-color-value");

const bgRandomColor=document.querySelector(".hex-color-container")

const hexCopybtn=document.querySelector(".hex-copy-color")

// create random hex color
btn.addEventListener("click",(event)=>{
    let charset="0123456789ABCDEF"
    let hexColorOutput=""
    for(let i=0,charsetlength=charset.length;i<6;i++)
    {
        hexColorOutput=hexColorOutput+charset.charAt(Math.floor(Math.random()*charsetlength))
    }
    hexColorValue.textContent=`#${hexColorOutput}`
    bgRandomColor.style.backgroundColor=`#${hexColorOutput}`
    btn.style.backgroundColor=`#${hexColorOutput}`
    // console.log(hexColorOutput)
})

//rgb color generator
const rgbbtn=document.querySelector(".rgb-btn")

const rgbColorContainer=document.querySelector(".rgb-color-container")

const getRedInput=document.querySelector("#red")

const getBlueInput=document.querySelector("#blue")

const getGreenInput=document.querySelector("#green")

const rgbCopybtn=document.querySelector(".rgb-copy-color")

const rgbColorValue=document.querySelector(".rgb-color-value")

rgbbtn.addEventListener("click",(event)=>{
    const extractedRedValue=getRedInput.value
    const extractedGreenValue=getGreenInput.value
    const extractedBlueValue=getBlueInput.value

    rgbColorValue.textContent=`rgb(${extractedRedValue},${extractedGreenValue},${extractedBlueValue})`

    rgbColorContainer.style.backgroundColor=`rgb(${extractedRedValue},${extractedGreenValue},${extractedBlueValue})`

    rgbbtn.style.color=`rgb(${extractedRedValue},${extractedGreenValue},${extractedBlueValue})`

})


function CopyHexColortoClipBoard()
{
    navigator.clipboard.writeText(hexColorValue.textContent)
    hexCopybtn.textContent=`${hexColorValue.textContent}`
    alert("hex color copied")
}

hexCopybtn.addEventListener("click",CopyHexColortoClipBoard)

function CopyRgbColortoClipBoard()
{
    navigator.clipboard.writeText(rgbColorValue.textContent) 
    alert("rgb color copied")  
}

rgbCopybtn.addEventListener("click",CopyRgbColortoClipBoard)