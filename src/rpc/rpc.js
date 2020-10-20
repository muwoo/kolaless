const net = require('net');

const protobuf = require('protocol-buffers');
const path = require('path');
const fs = require('fs');
const socket = new net.Socket({});
const messages = protobuf(fs.readFileSync(path.join(__dirname, './test.proto')));

const buf = messages.Test.encode({
  num: 42,
  payload: 'hello world',
  test: 'aaa'
});

socket.connect({
  host: '0.0.0.0',
  port: 4000
});
socket.write(buf);
socket.on('data', (buffer) => {
  // console.log(buffer.toString())
});
