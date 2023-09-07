const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv/config")
const apiKey = process.env.API_KEY;
const armazenaExpress = express()
armazenaExpress.use(cors())

//funções
const getWeatherData = async(city) =>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiWeatherURL);
    const data = await res.json();

    return data;
};

armazenaExpress.get("/neymar/:city", async (req, res)=>{
    console.log(req.params.city)
    const city = req.params.city
    const callWeatherData = await getWeatherData(city)
    console.log(callWeatherData)
    res.json(callWeatherData)
})


armazenaExpress.listen(8080, ()=>{console.log("RODOU")})


