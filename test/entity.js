
var ajforce = require('..'),
    assert = require('assert');
    
// create entity in application

var app = ajforce.createApplication('Warehouse');
var entity = app.createEntity('Product');
assert.ok(entity);
assert.equal(entity.Name, 'Product');
var entities = app.getEntities();
assert.ok(entities);
assert.equal(entities.length, 1);
assert.equal(entities[0].Name, 'Product');

// create entity in application with options

var app = ajforce.createApplication('Warehouse');
var entity = app.createEntity('Product', { Description: 'Product Entity' });
assert.ok(entity);
assert.equal(entity.Name, 'Product');
var entities = app.getEntities();
assert.ok(entities);
assert.equal(entities.length, 1);
assert.equal(entities[0].Name, 'Product');
assert.equal(entities[0].Description, 'Product Entity');