const postlist=document.querySelector(".post-list-container")




// fetch using XHr
function fetchUsingXHR()
{
    const xhr=new XMLHttpRequest()
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts')
    xhr.responseType='json'
    xhr.send()

    xhr.onload=()=>{
        if(xhr.status===200)
        {
            console.log(xhr.response)
            displayResults(xhr.response)
        }
        else{
            console.log("some error occured")
        }
    }
}

// fetch using fetch method

function fetchUsingFetchMethod()
{
    const data = fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"})

    data.
    then((response)=>response.json()).
    then((result)=>displayResults(result)).
    catch((err)=>console.log(err))
    

}

//fetch using async await

async function fetchUsingAsyncAwaitMethod()
{
    const data=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET"})

    const response=await data.json()

    displayResults(response)
}
//helper method
function helperMethod(method,url)
{
    const promise=new Promise((resolve,reject)=>{
        const xhr=new XMLHttpRequest()
        xhr.open(method,url)
        xhr.responseType='json'
        xhr.onload=()=>{
            if(xhr.status===200)
            {
                resolve(xhr.response)
            }
            else{
                reject("something went wrong")
            }
        }
        xhr.send()
    })
    return promise
}


//fetch using XHr and async await
async function fetchUsingXHRandAsyncAwait()
{
    const response=await helperMethod("GET","https://jsonplaceholder.typicode.com/posts")
    displayResults(response);
    
}


function displayResults(posts)
{
    console.log(posts[0].body)
    postlist.innerHTML= posts.map((post)=>`<div class="post-item">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        </div>
        `).join(" ")
}







// fetchUsingXHR();
// fetchUsingFetchMethod()

// fetchUsingAsyncAwaitMethod();
fetchUsingXHRandAsyncAwait()