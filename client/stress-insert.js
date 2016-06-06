'use strict';

const loadtest = require('loadtest');
const async = require('async');

class Main {
    init() {
        this.startOneHandredObjects();
        // this.getAll();
        this.startOneHandredRequests();
    }
    getAll() {
        var options = this.optionsObjectGet();
        this.load(options);
    }
    startOneHandredObjects() {
        var objs = [];
        for (var i = 0; i < 100; i++) {
            var obj = {
                name: `erick-OneHandredObjects: ${i}`,
                create: new Date()
            }
            objs.push(obj);
        }
        
        var options = this.optionsObjectPost(objs);
        this.load(options);

    }
    startOneHandredRequests() {
        // var objs = [];
        for (var i = 0; i < 100; i++) {
            var obj = {
                name: `erick-OneHandredRequests+ ${i}`,
                create: new Date()
            }
            // objs.push(obj);
            var options = this.optionsObjectPost(obj);
            this.load(options);
        }

    }
    load(options) {
        loadtest.loadTest(options, (error, result) => {
            if (error) {
                console.log('Got an error: %s', error);
            } else {
                console.log(result);
            }
        });
    }
    optionsObjectPost(obj) {
        return {
            url: 'http://192.168.1.135:3000/register',
            maxRequests: 150,
            concurrency: 15,
            method: 'POST',
            contentType: 'application/json',
            body: obj
        }
    }
    optionsObjectGet(obj) {
        return {
            url: 'http://192.168.1.135:3000/register',
            maxRequests: 1,
            concurrency: 1,
            method: 'GET'
        }
    }

}

new Main().init();

