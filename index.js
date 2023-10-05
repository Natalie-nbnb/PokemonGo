const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));


var userRoutes = require('./routes/user.route');

app.use('/',userRoutes);
app.use('/api' , userRoutes);


const PORT = 8080;
app.listen(PORT);

console.log(`Server is running on ${PORT}`);

