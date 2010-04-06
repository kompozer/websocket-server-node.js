var sys = require('sys');

exports.handleData = function(connection, data) {
    sys.exec(data).addCallback(function(stdout, stderr) {
        connection.write('\u0000' + stdout + '\uffff');
    });
}

