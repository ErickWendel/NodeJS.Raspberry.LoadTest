'use strict';
const RegisterSchema = require('./schemas/registerSchema');
const Promise = require('bluebird');
class RegisterModel {
    RegisterModel() {
        // Promise.promisifyAll(RegisterSchema);
    }
    getAll() {
        return new Promise.cast(RegisterSchema.find({}).exec());
    }
    create (obj) {
        return new Promise.cast(RegisterSchema.create(obj));
    }
}

module.exports = RegisterModel;