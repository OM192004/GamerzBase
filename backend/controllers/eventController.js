const Event = require('../models/Event'); 
const schedule = require('node-schedule');
const cloudinary = require('../utils/uploadImages');
const fs = require('fs');  // To handle temporary file removal

const createEvent = async (req, res) => {
    try {
        const { title, description, endDate, details, information } = req.body;
        let imageUrl = null;

        
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

        
        const parsedEndDate = new Date(endDate);

        
        const event = new Event({
            title,
            description,
            details,
            information,
            endDate: parsedEndDate,
            imageUrl,
            likes: 0,
        });

        await event.save();

        // Schedule deletion after event end date
        schedule.scheduleJob(parsedEndDate, async function () {
            try {
                await Event.findByIdAndDelete(event._id);
                console.log(`Event with ID ${event._id} has been deleted after its end date.`);
            } catch (deleteError) {
                console.error('Error deleting event:', deleteError);
            }
        });

        res.status(201).json({ success: true, event });
    } catch (err) {
        console.error('Error creating event:', err);
        res.status(500).json({ success: false, message: 'Failed to create event' });
    }
};

module.exports = {
    createEvent
};
