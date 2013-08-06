
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

// put plain object, get it, modified result, and get it again

var row3 = { Id: 3, Name: 'Row 3' };
store1.put(row3);
var result = store1.get(3);
assert.ok(result);
assert.equal(result.Id, 3);
assert.equal(result.Name, 'Row 3');
result.Name = 'A new Row 3';
var result2 = store1.get(3);
assert.ok(result2);
assert.equal(result2.Id, 3);
assert.equal(result2.Name, 'Row 3');

// add a new row, obtaining the new id

var row4 = { Name: 'Row 4' };
var result = store1.add(row4);
assert.equal(result, 4);
assert.equal(row4.Id, 4);

// delete a row

store1.delete(3);
assert.equal(store1.get(3), null);



