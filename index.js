import express from "express";
import path from "path";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/api', (req, res, next) => {
    console.log('api middleware')
    if(req.body.name === "Jahid") next()
    else return res.send('You are not allowed');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve() + '/index.html')
})

app.post('/api/data', (req, res) => {
    console.log(req.body.name)
    res.send('You submitted: ' + req.body.name)
})

app.get('/api/products', (req, res) => {
    res.send([
        { name: 'Test1', price: 1000 },
        { name: 'Test2', price: 2000 },
        { name: 'Test3', price: 3000 },
        { name: 'Test4', price: 4000 },
        { name: 'Test5', price: 5000 },
        { name: 'Test6', price: 6000 },
    ])
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Running in http://localhost:${PORT}`));