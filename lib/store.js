

function Store() {
    var rows = { };
    var maxid = 0;
    
    this.get = function (id) {
        var row = rows[id];
        
        if (row)
            return cloneRow(row);
            
        return null;
    }
    
    this.put = function (row) {
        if (row.Id > maxid)
            maxid = row.Id;
            
        rows[row.Id] = cloneRow(row);
    }
    
    this.add = function (row) {
        row.Id = ++maxid;
        this.put(row);
        return row.Id;
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