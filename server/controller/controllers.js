'use strict';

const express = require('express');
const router = express.Router();
const RegisterModel = require('./../model/register');
const _registerModel = new RegisterModel();;
class controllers {
    init() {
        router.post('/register/', (req, res) => {
            var registerObj = req.body;
            console.log('registerObj', registerObj);
            _registerModel.create(registerObj)
                .then(function (params) {
                    res.json({ 'success': 'created with success' });

                });
        });

        router.get('/register', (req, res) => {

            _registerModel.getAll().then(function (params) {
                res.json(params);

            });

        });


        return router;
    }
}
module.exports = controllers;

