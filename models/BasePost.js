// models/BasePost.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

// Base Post Schema
const basePostSchema = new Schema(
  {
    user: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    type: { 
      type: String, 
      enum: ['workout', 'meal', 'general'], 
      required: true 
    },
    title: { 
      type: String, 
      required: true 
    },
    description: { 
      type: String 
    },
    media: [
      {
        url: { type: String },
        type: { type: String, enum: ['image', 'video'] }
      }
    ],
    tags: [String],
    likes: [{ 
      type: Schema.Types.ObjectId, 
      ref: 'User' 
    }],
    comments: [
      {
        user: { 
          type: Schema.Types.ObjectId, 
          ref: 'User' 
        },
        comment: { 
          type: String, 
          required: true 
        },
        createdAt: { 
          type: Date, 
          default: Date.now 
        }
      }
    ],
    privacy: { 
      type: String, 
      enum: ['public', 'friends', 'private'], 
      default: 'public' 
    }
  },
  { 
    discriminatorKey: 'type', 
    timestamps: true 
  }
);

const BasePost = mongoose.model('BasePost', basePostSchema);

export default BasePost;
