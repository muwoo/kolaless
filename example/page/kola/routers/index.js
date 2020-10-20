const ReactDOMServer = require('react-dom/server');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

const { router } = require('../../../../src/index');
const App = require('../../dist/server.entry');

module.exports = () => {
  router.get('/', (ctx) => {
    const str = ReactDOMServer.renderToString(App.default());
    const html = ejs.render(fs.readFileSync(path.join(__dirname, '../../dist/index.html'), 'utf-8'), {
      serverHtml: str
    });
    ctx.body = html;
  });
};
