
const express = require('express')
const app = express()

var dir = __dirname;
app.use(express.static(dir+ '/dist'));

app.get('*', function (req, res) {
  res.sendFile(dir + '/dist/index.html')
})

app.listen(3003, function () {
  console.log('Example app listening on port 3003')
})