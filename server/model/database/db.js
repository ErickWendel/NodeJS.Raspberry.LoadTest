'use strict';

const mongoose = require('mongoose');
        
class Database {
    connect() {
        mongoose.connect('mongodb://localhost/pagforte');
        var db = mongoose.connection;
        db.on('error', console.error);
        
        db.once('open', () => {
            console.log('Conectado ao MongoDB.');
        });
        
    }
}
module.exports = Database;