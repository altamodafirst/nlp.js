# default

## main
nlp.train
console.say "Say something!"

## console.hear
// compiler=javascript
if (message === 'quit') {
  return console.exit();
}
nlp.process();
this.say();

## onIntent(cat.pic)
// compiler=javascript
const catDataArr = request.get('https://api.thecatapi.com/v1/images/search?api_key=ec576b62-3d91-4eca-9f6b-2181832ae054');
if (catDataArr) {
  input.answer = catDataArr[0].url ;
}
