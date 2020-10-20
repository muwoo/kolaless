const path = require('path');
const fs = require('fs');
const net = require('net');
const protobuf = require('protocol-buffers');
const messages = protobuf(fs.readFileSync(path.join(__dirname, '../../src/rpc/test.proto')));

const server = net.createServer((socket) => {
  socket.on('data', (buffer) => {
    const obj = messages.Test.decode(buffer)
    console.log(obj)
  })
});
server.on('error', (err) => {
  throw err;
});
server.listen(4000, () => {
  console.log('server bound');
});

const data = {
  1: 'test',
  2: 'hello',
};
