const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Array to store submitted data (replace this with a database in a real application)
let submittedData = [];

// Endpoint to receive form submissions
app.post('/api/submit-form', (req, res) => {
    const formData = req.body;
    submittedData.push(formData);
    res.status(201).send('Form data submitted successfully');
});

// Endpoint to retrieve all submitted data
app.get('/api/submitted-data', (req, res) => {
    res.json(submittedData);
});

// 处理根路径的请求
app.get('/', (req, res) => {
    res.send('Welcome to my Express server!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// 处理根路径的请求
app.get('/', (req, res) => {
    res.send('Welcome to my Express server!');
});