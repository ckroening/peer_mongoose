var express = require('express');
var router = express.Router();
var Talent = require('../models/talent');

/* GET all talent. */
router.get('/', function(req, res, next) {
  // TODO: Find all talent documents and send them back as an array of objects
  //reading documents: read all talent documents.
  Talent.find({}, function(err, talents) {
    if(err) throw err;
    //res.json(talents);
    res.send(talents);
    console.log(talents);
  });
});
//"req.body is ", req.body);
var talent = new Talent(req.body)
talent.save(function err)

res.sendStatus

put = update


/* Add a talent record. */
router.post('/', function(req, res, next) {
  // TODO: Add a talent document that you've received from the client
  //Create a talent document.
  var talent = new Talent(req.body);
          talent.save(function(err){
            if (err) throw err;
          console.log(talent);
          res.sendStatus(200);
          });
});

///* Add a history object to a talent record by ID. */
router.put('/history/:id', function(req, res, next) {
  // TODO: Find the talent record and update its history
  //Read by ID & Update
  var ObjectId = mongoose.Types.ObjectId;
  var id =
    ObjectId.fromString('3234890wfsddfs90');
  var update = {current: 'Minneapolis'};
  Talent.findByIdAndUpdate(id, update,
    function(err, talent) {
      if(err) throw err;
      res.send(talent);
// updated talent object
      console.log(talent);
    });
});

/* Delete talent by ID. */
router.delete('/:id', function(req, res, next) {
  // TODO: Find one talent document by ID and remove it
  //Read by ID & Delete
  var ObjectId = mongoose.Types.ObjectId;
  var id =
    ObjectId.fromString('3234890wfsddfs90');
  Talent.findByIdAndRemove(id, function(err) {
    if(err) throw err;
    console.log('Deleted talent');
    res.sendStatus(200);
  });
});

module.exports = router;
