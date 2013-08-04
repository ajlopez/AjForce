

function Store() {
    var rows = { };
    
    this.get = function (id) {
        var row = rows[id];
        
        if (row)
            return cloneRow(row);
            
        return null;
    }
    
    this.put = function (row) {
        rows[row.Id] = cloneRow(row);
    }
}

function cloneRow(row) {
    var clone = { };
    
    for (var n in row)
        clone[n] = row[n];
        
    return clone;
}

function createStore() {
    return new Store();
}

module.exports = {
    createStore: createStore
};