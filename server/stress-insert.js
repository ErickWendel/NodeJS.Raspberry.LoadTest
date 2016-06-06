'use strict';
const request = require('request');
const url = 'http://192.168.1.135:3000/register';

console.log('iniciando processamento.. ');
setObjs();

function setObjs(count) {
    var objs = [];
    var cont = count || 100;
    post(objs);
    for (var i = 0; i < count; i++) {
        var obj = { name: `teste: ${i}`, created: new Date() };
        objs.push(obj);
    }
    post(objs);
    return setObjs(count * count);

}
function get() {
    request.get(
        url,
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }
    );
}
function post(obj) {
    request.post(
        url,
        obj,
        (error, response, body) => {
            //console.log(`error: ${error} \n response: ${response} \n body: ${body} `);
            if (!error && response.statusCode == 200) {
                console.log('objetos inseridos..');
                get();
                //     console.log(body)
            }
        }
    );

}

