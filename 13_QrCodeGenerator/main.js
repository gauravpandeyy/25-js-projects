const QrConatiner=document.querySelector(".qr-container")

const qrText=document.querySelector('.qrtext')

const BtnGenerate=document.querySelector('.Generate')

const ErrorCon=document.querySelector('.error')

BtnGenerate.addEventListener("click",()=>{
    validateInputFeild()
})

function validateInputFeild()
{
    console.log(qrText.value);

    if(qrText.value.trim().length>0)
    {
        generateQrCode()
    }
    else{
        const element=document.createElement('p')
        element.innerText="Something Went wrong"
        ErrorCon.appendChild(element)
    }
}

function generateQrCode()
{
    QrConatiner.innerHTML=""
    new QRCode(QrConatiner,{
        text:qrText.value,
        height:400,
        width:400,
        colorLight:"#fff",
        colorDark:"#000"
    })
    qrText.value=""
    ErrorCon.textContent=""

}