const router = require('express').Router();

// Driver Model
let Driver = require('../models/Driver');

// CREATE Driver
router.route('/create-driver').post((req, res, next) => {
  Driver.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

// READ Drivers
router.route('/').get((req, res) => {
  Driver.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Driver
router.route('/edit-driver/:id').get((req, res) => {
  Driver.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Driver
router.route('/update-driver/:id').put((req, res, next) => {
  Driver.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Driver updated successfully !')
    }
  })
})

// Delete Driver
router.route('/delete-driver/:id').delete((req, res, next) => {
  Driver.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = router;