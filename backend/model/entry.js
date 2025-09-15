import mongoose from "mongoose";

const { Schema } = mongoose;

const PlaylistSchema = new mongoose.Schema(
  {
    query: {
      type: String,
      required: true, // e.g. "happy", "Arijit Singh", "study"
    },
    type: {
      type: String,
      enum: ["mood", "artist", "activity"], // classify input
      required: true,
    },
    songs: [
      {
        name: { type: String, required: true },
        artist: { type: String, required: true },
        url: { type: String }, // optional - link to play song
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { collection: "playlists" }
);

export default mongoose.model("Playlist", PlaylistSchema);
