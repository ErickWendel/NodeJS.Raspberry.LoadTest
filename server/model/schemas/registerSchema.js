'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
class RegisterSchema {
    getSchema() {
        const registerSchema = new Schema({
            name: String,
            created: Date,
            updated: Date
        });

        var User = mongoose.model('Register', registerSchema);
        return User;
    }
}
module.exports = new RegisterSchema().getSchema();
