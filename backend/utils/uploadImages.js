const cloudinary = require('cloudinary').v2;

// Configure Cloudinary with your credentials
cloudinary.config({
  cloud_name:"dqbsjxnsi", // Set this in your .env file
  api_key:964724497815283, // Set this in your .env file
  api_secret: "yVylfWTfJVidr_vSp7e-Hni1hvg", // Set this in your .env file
});

module.exports = cloudinary;