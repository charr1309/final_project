const express = require ('express');
const apiRouter = require ("./routes");

const app = express();

app.use(express.json());

app.use(express.json());

app.use(apiRouter);

app.use((err,req,res,next) => {
    res.status(err.status || 500);
    res.json({errors: { err: err.message } });
});

app.listen(3000, () => console.log("Server listening on port 3000..."));