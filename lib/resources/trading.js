'use strict';

var eBayResource = require('../eBayResource');
var eBayMethod = eBayResource.method;

module.exports = eBayResource.extend({

    addItem: eBayMethod({
        authorization: 'User',
        contentType: 'text/xml',
        api: 'trading',
        call: 'AddItem',
        variation: 'xml',
        method: 'POST',
        path: 'ws/api.dll'
    })

});