
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

// then, add a second property with options

var property = entity.createProperty('Price', { Description: 'Product Price' });

assert.ok(property);
assert.equal(property.Name, 'Price');
assert.equal(property.Description, 'Product Price');

var properties = entity.getProperties();

assert.ok(properties);
assert.equal(properties.length, 2);
assert.equal(properties[0].Name, 'Name');
assert.equal(properties[1].Name, 'Price');
assert.equal(properties[1].Description, 'Product Price');
