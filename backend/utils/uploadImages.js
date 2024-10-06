const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

// Upload image to S3
const uploadImageToS3 = async (buffer, originalName) => {
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `${Date.now()}_${originalName}`,  // Unique filename
        Body: buffer,
        ContentType: 'image/jpeg',  // You can adjust this based on the file type
        ACL: 'public-read',         // Allow public read access
    };

    try {
        const data = await s3.upload(params).promise();
        return data.Location;  // Return the URL of the uploaded image
    } catch (err) {
        console.error('Error uploading file to S3:', err);
        throw err;
    }
};

module.exports=uploadImageToS3