import mongoose from "mongoose";
import BasePost from "./BasePost.js";

const { Schema } = mongoose;

const generalSchema = new Schema({
  media: [
    {
      url: { type: String, required: true },
      type: { type: String, enum: ["image", "video"], required: true }
    }
  ],
  privacy: { type: String, enum: ["public", "friends", "private"], default: "public" }
});

const GeneralPost = BasePost.discriminator("general", generalSchema);

export default GeneralPost;
