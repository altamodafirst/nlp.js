const { dockStart } = require('@nlpjs/basic');

const express = require('express');

const app = express();
module.exports = app;

const PORT = process.env.PORT || 80;

(async () => {
  await dockStart();
  app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`));
})();
