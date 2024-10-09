const express = require('express');
const router = express.Router();
const {createEvent} = require('../controllers/eventController');
const upload =require('../config/Multer')

router.post('/addEvent',upload.single('image'),createEvent);

// // Get all events
// router.get('/events', eventController.getEvents);

// // Like an event
// router.post('/events/:eventId/like', eventController.likeEvent);

module.exports = router;
