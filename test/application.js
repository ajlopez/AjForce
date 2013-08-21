
var ajforce = require('..');
    
exports['create application'] = function (test) {
    var app = ajforce.createApplication('Warehouse');
    test.ok(app);
    test.equal(app.Name, 'Warehouse');
}

exports['create application with options'] = function (test) {
    var app = ajforce.createApplication('Warehouse', { Description: 'Warehouse Application', Author: 'me' });
    test.ok(app);
    test.equal(app.Name, 'Warehouse');
    test.equal(app.Description, 'Warehouse Application');
    test.equal(app.Author, 'me');
}

