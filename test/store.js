
var store = require('../lib/store');
    
exports['create store'] = function (test) {
    var store1 = store.createStore();
    test.ok(store1);
}

exports['get unknown row'] = function (test) {
    var store1 = store.createStore();
    var result = store1.get(1);
    test.equal(result, null);
}

exports['put plain object with Id, and get it'] = function (test) {
    var store1 = store.createStore();
    store1.put({ Id: 1 , Name: 'Row 1' });
    var result = store1.get(1);
    test.ok(result);
    test.equal(result.Id, 1);
    test.equal(result.Name, 'Row 1');
}

exports['put plain object with Id, get a copy'] = function (test) {
    var store1 = store.createStore();
    var row2 = { Id: 2, Name: 'Row 2' };
    store1.put(row2);
    row2.Name = 'A new Row 2';
    var result = store1.get(2);
    test.ok(result);
    test.equal(result.Id, 2);
    test.equal(result.Name, 'Row 2');
}

exports['put plain object, get it, modified result, and get it again'] = function (test) {
    var store1 = store.createStore();
    var row3 = { Id: 3, Name: 'Row 3' };
    store1.put(row3);
    var result = store1.get(3);
    test.ok(result);
    test.equal(result.Id, 3);
    test.equal(result.Name, 'Row 3');
    result.Name = 'A new Row 3';
    var result2 = store1.get(3);
    test.ok(result2);
    test.equal(result2.Id, 3);
    test.equal(result2.Name, 'Row 3');
}

exports['add a new row, obtaining the new id'] = function (test) {
    var store1 = store.createStore();
    var row3 = { Id: 3, Name: 'Row 3' };
    store1.put(row3);
    var row4 = { Name: 'Row 4' };
    var result = store1.add(row4);
    test.equal(result, 4);
    test.equal(row4.Id, 4);
}

exports['delete a row'] = function (test) {
    var store1 = store.createStore();
    store1.delete(3);
    test.equal(store1.get(3), null);
}

exports['query by name'] = function (test) {
    var store1 = store.createStore();
    var row4 = { Id: 4, Name: 'Row 4' };
    store1.put(row4);
    var result = store1.query({ Name: 'Row 4' });
    test.ok(result);
    test.equal(result.length, 1);
    test.equal(result[0].Name, 'Row 4');
    test.equal(result[0].Id, 4);
}

