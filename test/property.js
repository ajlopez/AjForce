
var ajforce = require('..'),
    assert = require('assert');
    
// create property in entity

var app = ajforce.createApplication('Warehouse');
var entity = app.createEntity('Product');
var property = entity.createProperty('Name');

assert.ok(property);
assert.ok(property.Name, 'Name');

var properties = entity.getProperties();

assert.ok(properties);
assert.equal(properties.length, 1);
assert.equal(properties[0].Name, 'Name');
