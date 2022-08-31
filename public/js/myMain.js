const deleteBtn = document.querySelectorAll('.del')
const movieItem = document.querySelectorAll('span.not')
const movieWatched = document.querySelectorAll('span.watched')

//let movieList = []

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteMovie)
})

Array.from(movieItem).forEach((el)=>{
    el.addEventListener('click', markWatched)
})

Array.from(movieWatched).forEach((el)=>{
    el.addEventListener('click', markUnWatched)
})

async function deleteMovie(){
    const movieId = this.parentNode.dataset.id
    try{
        const response = await fetch('movies/deleteMovie', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'movieIdFromJSFile': movieId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markWatched(){
    const movieId = this.parentNode.dataset.id
    try{
        const response = await fetch('movies/markWatched', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'movieIdFromJSFile': movieId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markUnWatched(){
    const movieId = this.parentNode.dataset.id
    try{
        const response = await fetch('movies/markUnWatched', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'movieIdFromJSFile': movieId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}


//set up search by keyword        
let runSearch = function () {
    let matches = []
    let keyword = this.value
    let url = `https://api.themoviedb.org/3/search/movie?api_key=8833c81e6715de20a62fb3e2ddc97c58&query=${keyword}`
    fetch(url)
        .then(result => result.json())
        .then((data)=>{
            matches.push(...data.results)

            const html = matches.map(show => {
                return `
                    <li>
                        <span class='title'>${show.title}</span>
                    </li>
                `
                }).join('')
            suggestions.innerHTML = html                
        })
        .catch(function(err){
            alert(err);
        });
}

const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')

searchInput.addEventListener('change', runSearch)
searchInput.addEventListener('keyup', runSearch)

