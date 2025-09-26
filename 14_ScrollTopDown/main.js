const usersList=document.querySelector('.user-list')

const loader=document.querySelector('.loader')

const scrollBottom=document.querySelector(".scrollToBottom")

const scrollToGoUp=document.querySelector('.scrollToGoUp')


function showLoader()
{
    loader.classList.add("show-loader")
    usersList.classList.add("hide-users-list")
}

function removeLoader()
{
    loader.classList.remove("show-loader")
    usersList.classList.remove("hide-users-list")

}


async function fetchUsersList() {
    showLoader()

    const response=await fetch("https://dummyjson.com/users?limit=100",{method:"GET"})

    const data=await response.json()

    if(data && data.users)
    {
        displayUserList(data.users)
    }
    removeLoader()
    
}

function displayUserList(userList)
{
    usersList.innerHTML=userList.map(
        userItem=>`
        <li>
        <p>${userItem.firstName} ${userItem.lastName}</p>
        </li>
        `).join(" ")
}

fetchUsersList()

scrollToGoUp.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

scrollBottom.addEventListener("click",()=>{
    window.scrollTo({
        top:document.body.scrollHeight,
        behavior:"smooth"
    })
})