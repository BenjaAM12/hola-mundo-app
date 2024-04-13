// tests/app.test.js
const assert = require('assert');
const http = require('http');

const PORT = process.env.PORT || 3000;
const URL = `http://localhost:${PORT}`;

describe('Prueba de Hola Mundo', () => {
  let server;

  before((done) => {
    server = http.createServer(require('../app'));
    server.listen(PORT, done);
  });

  after(() => {
    server.close();
  });

  it('Debería responder con "Hola, mundo"', (done) => {
    http.get(URL, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        assert.strictEqual(data, 'Hola, mundo\n');
        done();
      });
    });
  });
});
