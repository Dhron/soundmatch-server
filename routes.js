var MidiConvert = require('midiconvert');
var LogRoutes = require('express-log-routes');
var logRoutes = new LogRoutes();
var freq = require('midi-freq');

const routes = require('express').Router();

var fs = require('fs');
var util = require('util')

var midiFileParser = require('midi-file-parser');
var MidiConvert = require('@pioug/MidiConvert');

var get_midi = function(req, res){

var processOutput = function(json){
    var parts = json.parts[0];
    for(let item in parts){
        parts[item].freq = freq(null, parts[item].midiNote);
    }
    json.parts[0] = parts;
    return json;
}

fs.readFile("happy.mid", "binary", function(err, midiBlob){
    if (!err){
        var midi = MidiConvert.parse(midiBlob)
        var output = JSON.parse(JSON.stringify(midi, null, 4));
        var modOutput = processOutput(output);
        res.send(modOutput);
    }
});

}


routes.get('/', get_midi);

logRoutes({
  router: routes,
  baseUri: 'localhost:3000' 
});

module.exports = routes;
