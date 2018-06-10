const app = require('./config/express.js')();

require('./config/database.js')('localhost/excursaja');

console.log('teste');

app.listen(3000);
