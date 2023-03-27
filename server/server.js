const express = require('express');
const app = express();
const port = 5000;
// DRUHY COMMIT SERVER


app.use(express.json({limit:"1mb"}));
app.listen(port, ()=> console.log(`Server is listening in port ${port}`));

const accountRouter = require('./routes/accounts');
app.use('/accounts',accountRouter);

