
var store = require('../lib/store'),
    assert = require('assert');
    
// create store

var store1 = store.createStore();
assert.ok(store1);

// get unknown row

var result = store1.get(1);
assert.equal(result, null);

// put plain object with Id, and get it

store1.put({ Id: 1 , Name: 'Row 1' });
var result = store1.get(1);
assert.ok(result);
assert.equal(result.Id, 1);
assert.equal(result.Name, 'Row 1');

// put plain object with Id, get a copy

var row2 = { Id: 2, Name: 'Row 2' };
store1.put(row2);
row2.Name = 'A new Row 2';
var result = store1.get(2);
assert.ok(result);
assert.equal(result.Id, 2);
assert.equal(result.Name, 'Row 2');
