

function Store() {
    var rows = { };
    var maxid = 0;
    
    this.get = function (id) {
        var row = rows[id];
        
        if (row)
            return cloneRow(row);
            
        return null;
    }
    
    this.query = function (obj) {
        var result = [];
        
        for (var n in rows) {
            var row = rows[n];
            
            if (sameFields(obj, row))
                result.push(cloneRow(row));
        }
        
        return result;
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
    
    this.delete = function (id) {
        delete rows[id];
    }
}

function cloneRow(row) {
    var clone = { };
    
    for (var n in row)
        clone[n] = row[n];
        
    return clone;
}

function sameFields(obj, row) {
    for (var n in obj)
        if (obj[n] != row[n])
            return false;
            
    return true;
}

function createStore() {
    return new Store();
}

module.exports = {
    createStore: createStore
};