const { dockStart } = require('@nlpjs/basic');
const cool = require('cool-ascii-faces');
const express = require('express');
const app = require('./app');

const PORT = process.env.PORT || 5000;

// express

(async () => {
  await dockStart();
  app.get('/cool', (req, res) => res.send(cool()));
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
})();
