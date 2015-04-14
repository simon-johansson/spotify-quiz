
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

require('./io').init({
   emitter: emitter
});

require('./view').init({
   emitter: emitter
});

require('./app').init({
   emitter: emitter
});

FastClick.attach(document.body);

// require('./original');
