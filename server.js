require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 5000;
const OMDB_API_KEY = process.env.OMDB_API_KEY

app.get("/", (req, res)=>{
    res.send("idk wtf im doing")
})

app.get("/search", async (req, res)=>{
    const movie = req.query.movie;
    if (!movie)
        return res.status(400).json({ error : "stupid fella forgot the movie query"});

    try{
        const response = await axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=${OMDB_API_KEY}`);
        res.status(200).json(response.data);
    } catch (err)
    {
        res.status(404).json({ error : "stupid feller forgot that this movie does NOT exist"})
    }
})

// curl -X "GET" "http://localhost:5000/details?movieId=tt1517268"
app.get("/details", async (req, res)=>{
    const movieId = req.query.movieId;
    if (!movieId)
        return res.status(400).json({ error : "fella, stop forgetting about the movie ID query"});

    // diisi dan dilanjutkan untuk request detail movie

})

app.listen(PORT, ()=>{
    console.log(`server is PROBABLY running(cant be so sure) on http://localhost:${PORT}`)
});
