
function Application(name, options) {
    this.Name = name;
    
    if (options)
        for (var n in options)
            this[n] = options[n];
}

function createApplication(name, options) {
    return new Application(name, options);
}

module.exports = {
    createApplication: createApplication
};