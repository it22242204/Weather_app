const express = require ('express');
const dotenv = require ('dotenv');
const weatherRoute = require ('./routes/weatherRoute');
const cors = require('cors');

dotenv.config();
const PORT = process.env.port;

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use("/api/weather", weatherRoute);

app.listen(PORT,() => {
    console.log("Server is running on port " + PORT);
});
