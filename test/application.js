
var ajforce = require('..'),
    assert = require('assert');
    
// create application

var app = ajforce.createApplication('Warehouse');
assert.ok(app);
assert.equal(app.Name, 'Warehouse');

// create application with options

var app = ajforce.createApplication('Warehouse', { Description: 'Warehouse Application', Author: 'me' });
assert.ok(app);
assert.equal(app.Name, 'Warehouse');
assert.equal(app.Description, 'Warehouse Application');
assert.equal(app.Author, 'me');

