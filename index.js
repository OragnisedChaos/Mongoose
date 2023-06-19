const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movieApp ')
    .then(()=>{
        console.log('Connection Open');
    })
    .catch(err=>{
        console.log("ERROR!!");
        console.log(err);
    })    
const movieSchema = new mongoose.Schema({
    title:String,
    year:Number,
    score:Number,
    rating:String
})
const Movie = mongoose.model('Movie',movieSchema);
// const amadues = new Movie({
//     title :'Amadeus',
//     year:1986,
//     score:9.2,
//     rating:'R'
// });
// amadues.save();
// Movie.bulkSave();
// Movie.insertMany([
//     {title:'Alien',year:1979,score:8.3,rating:'R'},
//     {title:'Amelie',year:2001,score:8.3,rating:'R'},
//     {title:'Stand By Me',year:1999,score:8.6,rating:'PG'}
// ])
//     .then(data=>{
//         console.log('IT WORKED');
//         console.log(data);
//     })