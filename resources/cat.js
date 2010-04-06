var posix = require('posix');

exports.handleData = function(connection, data) {
    posix.cat(data, encoding='utf8').addCallback(function(content) {
        connection.write('\u0000' + content + '\uffff');
    });
}

