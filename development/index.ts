import express from 'express';
const app = express();
const PORT = 8000;
app.get('/', function (req,res) {
    res.send('Express + TypeScript Server')
});
app.listen(PORT, () => {
    console.log(`⚡️[SERVER]: Server is running at https://localhost:${PORT}`);
});