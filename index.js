const express = require ('express');
const bodyParser = require ('body-parser');
const usersRoute = require ('./routes/user');
const respondenRoute = require ('./routes/responden');
const surveyRoute = require ('./routes/survey');
const respondRoute = require ('./routes/respond');
const {connection} = require('./db');

connection()

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoute);

app.use('/responden', respondenRoute);

app.use('/survey', surveyRoute);

app.use('/respond', respondRoute);

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));