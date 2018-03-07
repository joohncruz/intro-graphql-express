let express = require('express');
let router = express.Router();

let store = [
  { name: 'Felipe', age: '21' },
  { name: 'Shilton', age: '27'}
]

router.use(function timeLog(req, res, next){
  console.log('CLIENT - Time: ', Date.now());
  next();
})

router.get('/', function(req, res) {
  res.json(store)
})

module.exports = router;