
function Property(name) {
    this.Name = name;
}

function Entity(name) {
    this.Name = name;
    this.properties = [];
}

Entity.prototype.createProperty = function (name) {
    var property = new Property(name);
    this.properties.push(property);
    return property;
}

Entity.prototype.getProperties = function () {
    return this.properties;
}

function Application(name, options) {
    this.Name = name;
    this.entities = [];

    if (options)
        for (var n in options)
            this[n] = options[n];
}

Application.prototype.createEntity = function (name) {
    var entity = new Entity(name);
    this.entities.push(entity);
    return entity;
};

Application.prototype.getEntities = function () {
    return this.entities;
};

function createApplication(name, options) {
    return new Application(name, options);
}

module.exports = {
    createApplication: createApplication
};

