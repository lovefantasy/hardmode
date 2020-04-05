var SOCKET_LIST = new Map();

module.exports.startSocket = function(server) {
  var io = require('socket.io')(server, {});

  io.sockets.on('connection', function(socket) {
    socket.id = Math.random();
    SOCKET_LIST.set(socket.id, socket);
    io.emit('online', SOCKET_LIST.size);

    socket.on('sendMsg', function(data) {
      io.emit('chatMsg', data);
    });

    socket.on('disconnect', function() {
      SOCKET_LIST.delete(socket.id);
      io.emit("online", SOCKET_LIST.size);
    });
  });
};
