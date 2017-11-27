
var express = require('express');
var multer  = require('multer')
var upload = multer({ 
                    dest: 'uploads/',
                    limits:{fileSize: 1000000},
                    })

var app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.post('/go', upload.single('img'), function (req, res, next) {
  console.log(JSON.stringify(req.file))
  
  res.send(JSON.stringify(req.file.size))

})

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
