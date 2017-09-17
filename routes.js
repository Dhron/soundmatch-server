var MidiConvert = require('midiconvert');
var LogRoutes = require('express-log-routes');
var logRoutes = new LogRoutes();

const routes = require('express').Router();

var fs = require('fs');
var util = require('util')

var midiFileParser = require('midi-file-parser');
var MidiConvert = require('@pioug/MidiConvert');

var get_midi = function(req, res){

fs.readFile("happy.mid", "binary", function(err, midiBlob){
    if (!err){
        var midi = MidiConvert.parse(midiBlob)
        var output = JSON.stringify(midi, null, 4);
        res.send(output);
    }
});

}


routes.get('/', get_midi);

logRoutes({
  router: routes,
  baseUri: 'localhost:3000' 
});

module.exports = routes;
