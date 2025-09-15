import mongoose from "mongoose";

const playlistRequestSchema = new mongoose.Schema({
  mood: { type: String, trim: true },
  artist: { type: String, trim: true },
  activity: { type: String, trim: true },
  songs: [
    {
      name: String,
      artist: String,
      url: String,
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("PlaylistRequest", playlistRequestSchema);
