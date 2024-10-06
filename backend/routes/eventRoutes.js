const express = require('express');
const router = express.Router();
const {createEvent} = require('../controllers/eventController');
const { uploadSingle } = require('../middleware/uploadMiddleware.js');

router.post('/addEvent', uploadSingle,createEvent);

// // Get all events
// router.get('/events', eventController.getEvents);

// // Like an event
// router.post('/events/:eventId/like', eventController.likeEvent);

module.exports = router;
