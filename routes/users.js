var express = require('express');
var router = express.Router();

const redis = require("redis");
const client = redis.createClient();
client.on("error", function(error) {
  console.error(error);
});

const USER = { F_NAME : "USER:F_NAME", L_NAME: "USER:L_NAME", AGE: "USER:AGE" }

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/* POST users create */
router.post('/', (req, res, next) => {
       
  const { fristName } = req.body
  client.set(USER.F_NAME , fristName, (data) => {
    res.status(200).json({ requestBody : req.body, redisData: data })
  });    
})

module.exports = router;
