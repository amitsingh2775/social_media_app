import { v2 as cloudinary } from 'cloudinary';

import dotenv from 'dotenv';
dotenv.config();

// console.log('Cloudinary Config:', {
//     cloud_name: process.env.CLOUDNARY_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });
import fs from 'fs';


// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDNARY_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const uploadCloudinary = async (localPath) => {
    try {
        if (!localPath) return null;

       // console.log('Uploading to Cloudinary: ', localPath);

        const res = await cloudinary.uploader.upload(localPath, {
            resource_type: "auto"
        });

       // console.log('Cloudinary response: ', res);

        // Delete the local file
        fs.unlink(localPath, (err) => {
            if (err) {
                console.error('Error deleting local file:', err);
            } else {
                console.log('Local file deleted successfully');
            }
        });

        return res;
    } catch (error) {
        // Delete the local file in case of error
        fs.unlink(localPath, (err) => {
            if (err) {
                console.error('Error deleting local file:', err);
            } else {
                console.log('Local file deleted successfully');
            }
        });
        console.error('Error uploading to Cloudinary:', error);
        return null;
    }
};

export { uploadCloudinary };
