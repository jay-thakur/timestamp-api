const express = require('express');
const moment = require('moment');

const app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/:dateString', function(req, res){
    const formats = [
        'X',
        'MMMM D, YYYY',
        'MMMM D YYYY',
        'MMM D, YYYY',
        'MMM D YYYY',
        'D MMMM YYYY',
        'D MMMM, YYYY',
        'D MMM YYYY',
    ];
    const date = moment(req.params.dateString, formats, true);
    if(date.isValid()) {
        res.json({
            unix: date.format("X"),
            natural: date.format("MMMM DD, YYYY")
        });
    } else {
        res.json({
            unix: null,
            natural: null
        });
    }
});

app.listen(8080, function () {
  console.log('timestamp app listening on port 8080!');
});