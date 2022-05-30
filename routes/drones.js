const express = require('express');
const DroneModel = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here


router.get('/drones', async (req, res, next) => {
  const drones = await DroneModel.find()
  try {
    res.render('drones/list', {drones})
  } catch(error){
    console.log('we have an error');
  }
});


// Iteration #3: Add a new drone
router.get('/drones/create',  (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', async (req, res, next) => {
  // Iteration #3: Add a new drone
  const newDrone = await DroneModel.create(req.body)
  res.redirect('/drones')
});

router.get('/drones/:droneId', async (req, res) => {
  const drone = await DroneModel.findById(req.params.droneId)
  const data = { drone }
  res.render(`list`, data)
})




 // Iteration #4 Edit drone

router.get('/drones/:id/edit', async (req, res, next) => {
  try {
    const drone = await DroneModel.findById(req.params.id)
    res.render('drones/update-form', { drone })
  
  } catch (error) {
    console.log('error on the get root editing',(error))
  }
  
});




router.post('/drones/:id/edit', async (req, res, next) => {
  console.log(req.body); 
  try {
  const { id } = req.params
  await DroneModel.findByIdAndUpdate(id, req.body)
  res.redirect('/drones')
  } catch (error) {
  console.log('error in the post root updating',(error))
  }

});



router.post('/drones/:id/delete', async (req, res, next) => {
  try {
    await DroneModel.findByIdAndDelete(req.params.id)
    res.redirect('/drones')  
  } catch (error) {
    console.log('error in deleting',(error))
  }
});

module.exports = router;
