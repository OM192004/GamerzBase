const express = require('express');
const router = express.Router();
const { createNews, getNews } = require('../controllers/newsController');
const upload = require('../config/Multer');

// Route to add news
router.post('/addNews', upload.single('image'), createNews);

// Route to fetch news
router.get('/fetchNews', getNews);

module.exports = router;
