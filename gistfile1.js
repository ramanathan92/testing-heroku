const express = require('express')
var bodyParser = require('body-parser')
const app = express();
const port = 3000;
app.use(bodyParser.json());



app.post('/paymentGateway', function (req, res) {
  console.log('here');
  // Here is the final URL
  console.log(req.body);
  res.send("success");
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
