const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(cors());
// for parsing application/json
app.use(express.json()) ;
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })) ;

app.post('/profile', function (req, res, next) {
  console.log(req.body)
  res.json(req.body);
});

app.get('/status', function (req,res,next){
  res.send({
    message: "the application is working!"
  });
  next();
});

app.post('/register', function (req,res,next){
  res.send({
    message: `Hello! ${req.body.email}! with the password ${req.body.password} is successfully registered!`
  });
  next();
});


app.listen(process.env.PORT || 8081);