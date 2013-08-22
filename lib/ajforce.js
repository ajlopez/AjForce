
var applications = [];

function initializeObject(obj, name, options) {
    obj.Name = name;
    
    if (options)
        for (var n in options)
            obj[n] = options[n];
}

function Property(name, options) {
    initializeObject(this, name, options);
}

function Entity(name, options) {
    initializeObject(this, name, options);
    this.properties = [];
}

Entity.prototype.createProperty = function (name, options) {
    var property = new Property(name, options);
    this.properties.push(property);
    return property;
}

Entity.prototype.getProperties = function () {
    return this.properties;
}

function Application(name, options) {
    initializeObject(this, name, options);
    this.entities = [];
}

Application.prototype.createEntity = function (name, options) {
    var entity = new Entity(name, options);
    this.entities.push(entity);
    return entity;
};

Application.prototype.getEntities = function () {
    return this.entities;
};

function createApplication(name, options) {
    var app = new Application(name, options);
    applications.push(app);
    return app;
}

module.exports = {
    createApplication: createApplication,
    getApplications: function () { return applications; }
};

