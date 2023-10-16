import express from 'express';
let router = express.Router();

router.get('/', (req, res) =>{
  res.send({
    'offer_count': 1
  });
});

export = router;