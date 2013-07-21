
function Entity(name) {
    this.Name = name;
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

