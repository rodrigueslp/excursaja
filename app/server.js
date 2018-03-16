const app = require('./config/express.js')();

require('./config/database.js')('localhost/excursaja');

app.listen(3000);
