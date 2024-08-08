const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/mydatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const DataSchema = new mongoose.Schema({
    name: String,
    transaction: String,
    amount: Number,
});

const Data = mongoose.model('Data', DataSchema);

app.post('/submit', async (req, res) => {
    const { name, transaction, amount } = req.body;
    const data = new Data({ name, transaction, amount });
    await data.save();
    res.json({ message: 'Data submitted successfully!' });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
