const router = require('express').Router();

// Driver Model
let Driver = require('../models/Driver');


//New READ Drivers
router.route('/').get((req, res) => {
  Driver.find()
    .then(drivers => res.json(drivers))
    .catch(err => res.status(400).json('Error: ' + err));
});

//New CREATE
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const driverNum = Number(req.body.driverNum);
 

  const newDriver = new Driver({
    name,
    email,
    driverNum,
  });

  newDriver.save()
  .then(() => res.json('Driver added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

/*
// Get Single Driver
router.route('/edit/:id').get((req, res) => {
  Driver.findById((req.params.id)
    
    .then(driver => res.json(driver))
    .catch(err => res.status(400).json('Error: ' + err))
    );
})
*/

// Get Single Player *updated from above*
router.route('/edit/:id').get((req, res) => {
  Driver.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Delete Driver
router.route('/:id').delete((req, res) => {
  Driver.findByIdAndDelete(req.params.id)
    .then(() => res.json('Driver deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

//Update Driver
router.route('/update/:id').put((req, res) => {
  Driver.findById(req.params.id)
    .then(driver => {
      driver.name = req.body.name;
      driver.email = req.body.email;
      driver.driverNum = Number(req.body.driverNum);

      driver.save()
        .then(() => res.json('Driver updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


//old code

/*
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
*/

/*
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
*/

/*
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
*/

/*
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
*/

/*
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
*/

module.exports = router;