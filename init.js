const {app} = require('./app');
const port = process.env.PORT || 5000;

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:${port}`);

app.listen(port, handleListening);