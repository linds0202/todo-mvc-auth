const Movie = require('../models/Movie')

module.exports = {
    getIndex: async (req,res)=>{
        console.log(req.user)
        try{
            const movieItems = await Movie.find()
            res.render('index.ejs', {movies: movieItems})
        }catch(err){
            console.log(err)
        }
    }
}