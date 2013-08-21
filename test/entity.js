
var ajforce = require('..');
    
exports['create entity in application'] = function (test) {
    var app = ajforce.createApplication('Warehouse');
    var entity = app.createEntity('Product');
    test.ok(entity);
    test.equal(entity.Name, 'Product');
    var entities = app.getEntities();
    test.ok(entities);
    test.equal(entities.length, 1);
    test.equal(entities[0].Name, 'Product');
}

exports['create entity in application with options'] = function (test) {
    var app = ajforce.createApplication('Warehouse');
    var entity = app.createEntity('Product', { Description: 'Product Entity' });
    test.ok(entity);
    test.equal(entity.Name, 'Product');
    var entities = app.getEntities();
    test.ok(entities);
    test.equal(entities.length, 1);
    test.equal(entities[0].Name, 'Product');
    test.equal(entities[0].Description, 'Product Entity');
}