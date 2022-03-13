const { dockStart } = require('@nlpjs/basic');
const PORT = process.env.PORT || 3000
const app = require('./app')
// express

(async () => {
  await dockStart();
  app.listen(PORT, () => console.log(`Mixing it up on port ${PORT}`))
})();
