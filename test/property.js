
var ajforce = require('..');
    
exports['create property in entity'] = function (test) {
    var app = ajforce.createApplication('Warehouse');
    var entity = app.createEntity('Product');
    var property = entity.createProperty('Name');

    test.ok(property);
    test.ok(property.Name, 'Name');

    var properties = entity.getProperties();

    test.ok(properties);
    test.equal(properties.length, 1);
    test.equal(properties[0].Name, 'Name');
}

exports['add a second property with options'] = function (test) {
    var app = ajforce.createApplication('Warehouse');
    var entity = app.createEntity('Product');
    entity.createProperty('Name');

    var property = entity.createProperty('Price', { Description: 'Product Price' });

    test.ok(property);
    test.equal(property.Name, 'Price');
    test.equal(property.Description, 'Product Price');

    var properties = entity.getProperties();

    test.ok(properties);
    test.equal(properties.length, 2);
    test.equal(properties[0].Name, 'Name');
    test.equal(properties[1].Name, 'Price');
    test.equal(properties[1].Description, 'Product Price');
}