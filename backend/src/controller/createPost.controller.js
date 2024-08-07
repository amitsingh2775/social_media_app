import { Post } from "../models/post.model.js";
import { uploadCloudinary } from "../utils/cloudinary.js";

const Create_Post = async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ message: "All fields are required", success: false });
    }

    const profileImagePath = req.files?.profileImage[0]?.path;

    if (!profileImagePath) {
        return res.status(400).json({ message: "Please check your image", success: false });
    }

    const profileImage = await uploadCloudinary(profileImagePath);

   // console.log('Uploaded profile image: ', profileImage);

    if (!profileImage) {
        return res.status(400).json({ message: "Profile image upload failed", success: false });
    }

    try {
        const post = await Post.create({
            message,
            profileImage: profileImage.url,
            postBy: req.user
        });

        return res.status(200).json({ data: post, message: "Post created successfully", success: true });
    } catch (error) {
        console.error('Error creating post:', error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
};

export { Create_Post };
