const Event = require('../models/Event');  // Your Event model
const schedule = require('node-schedule');
const uploadImageToS3 =require('../utils/uploadImages')

// Create Event
const createEvent = async (req, res) => {
    try {
        const { title, description, endDate, details,information, } = req.body;
        let imageUrl = null;


        if (req.file) {
            imageUrl = await uploadImageToS3(req.file.buffer, req.file.originalname);
        }

        // Create a new event
        const event = new Event({
            title,
            description,
            details,
            information,
            endDate,
            imageUrl,
            likes: 0,
        });

        await event.save();

        // Schedule deletion after event end date
        schedule.scheduleJob(new Date(endDate), async function () {
            await Event.findByIdAndDelete(event._id);
            console.log(`Event with ID ${event._id} has been deleted after its end date.`);
        });

        res.status(201).json({ success: true, event });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create event' });
    }
};

module.exports={
    createEvent
}