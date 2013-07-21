
function Application(name) {
    this.Name = name;
}

function createApplication(name) {
    return new Application(name);
}

module.exports = {
    createApplication: createApplication
};