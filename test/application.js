
var ajforce = require('..'),
    assert = require('assert');
    
// create application

var app = ajforce.createApplication('Warehouse');
assert.ok(app);
assert.equal(app.Name, 'Warehouse');

