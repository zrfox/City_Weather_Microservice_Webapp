require('dotenv').config();
const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());


const port = process.env.PORT || 3000;
const apiKey = process.env.OPEN_WEATHER_API_KEY;

app.get('/weather', async (req, res) => {
    console.log("Received request...")
    const city = req.query.city;

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const apiData = await fetch(URL);

    if (!apiData.ok) return res.status(400).json({ error: "City not found" });
    
    const data = await apiData.json();
    res.json(data); 
}) 

app.listen(port, () => {
    console.log(`server.js listening on port ${port}`);
})


    

