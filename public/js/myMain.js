const deleteBtn = document.querySelectorAll('.del')
const movieItem = document.querySelectorAll('span.not')
const movieWatched = document.querySelectorAll('span.watched')

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