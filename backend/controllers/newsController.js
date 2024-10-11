const News = require('../models/News');  // Your News model
const schedule = require('node-schedule');
const cloudinary = require('../utils/uploadImages'); // Correct Cloudinary import
const fs = require('fs');  // To handle temporary file removal

// Create News
const createNews = async (req, res) => {
    try {
        const { title, description, endDate, details, information } = req.body;
        let imageUrl = null;

        // Handle image upload to Cloudinary
        if (req.file) {
            try {
                const result = await cloudinary.uploader.upload(req.file.path);
                imageUrl = result.secure_url;

                // Remove the file from the local server after upload
                fs.unlink(req.file.path, (err) => {
                    if (err) {
                        console.error('Error removing temporary file:', err);
                    }
                });
            } catch (uploadError) {
                console.error('Cloudinary upload error:', uploadError);
                return res.status(500).json({ success: false, message: 'Failed to upload image' });
            }
        }

        // Create a new News
        const news = new News({
            title,
            description,
            details,
            information,
            imageUrl,
        });

        await news.save();

        res.status(201).json({ success: true, news });
    } catch (err) {
        console.error('Error creating news:', err);
        res.status(500).json({ success: false, message: 'Failed to create news' });
    }
};

// Fetch News
const getNews = async (req, res) => {
    try {
        const news = await News.find();  // Fetch all news from the database
        res.status(200).json({ success: true, news });
    } catch (err) {
        console.error('Error fetching news:', err);
        res.status(500).json({ success: false, message: 'Failed to fetch news' });
    }
};

module.exports = {
    createNews,
    getNews
};
