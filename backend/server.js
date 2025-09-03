const express = require ('express');
const dotenv = require ('dotenv');
const weatherRoute = require ('./routes/weatherRoute');

dotenv.config();
const PORT = process.env.port;

const app = express();

app.use(express.json());

app.use("/api/weather", weatherRoute);

app.listen(PORT,() => {
    console.log("Server is running on port " + PORT);
});
