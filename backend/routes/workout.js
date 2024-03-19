
const express = require('express');
const { createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout } = require('../controllers/workoutController');

const router = express.Router();


//get all workouts

router.get('/', getWorkouts)

// get single workout

router.get('/:id', getWorkout)

//post single workout 
router.post('/', createWorkout)


//delete single workout

router.delete('/:id', deleteWorkout)

//update single workout

router.patch('/:id', updateWorkout)


module.exports = router