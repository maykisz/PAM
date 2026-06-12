require('dotenv').config({ quiet: true });

const express = require('express');
const cors = require('cors');
const registerGetRoutes = require('./crud/get');
const registerPostRoutes = require('./crud/post');
const registerPutRoutes = require('./crud/put');
const registerDeleteRoutes = require('./crud/delete');
const registerAiRoutes = require('./crud/ai');

const app = express();

app.use(cors());
app.use(express.json());

registerGetRoutes(app);
registerPostRoutes(app);
registerPutRoutes(app);
registerDeleteRoutes(app);
registerAiRoutes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
