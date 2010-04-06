exports.handleData = function(connection, data) {
    connection.write('\u0000' + data + '\uffff');
}

