const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;
const cors = require('cors');

const Routes = require('./routers/router01');


app.use(express.json());

app.use(cors());





app.use('/', Routes);



app.listen(PORT, () => {
    console.log(`🚀 Serviço executando em: http://localhost:${PORT}`);
})