import PlaylistRequest from "../model/Playlist.js";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const LASTFM_API_KEY = process.env.LASTFM_API_KEY;

// Helper function to fetch songs
const fetchSongs = async ({ mood, artist, activity }) => {
  try {
    let url = "";

    if (artist) {
      url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${encodeURIComponent(
        artist
      )}&api_key=${LASTFM_API_KEY}&format=json`;
    } else if (mood) {
      url = `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${encodeURIComponent(
        mood
      )}&api_key=${LASTFM_API_KEY}&format=json`;
    } else if (activity) {
      url = `https://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${encodeURIComponent(
        activity
      )}&api_key=${LASTFM_API_KEY}&format=json`;
    } else {
      return [];
    }

    const res = await axios.get(url);

    // Check where the tracks are in the response
    let tracks = artist ? res.data.toptracks.track : res.data.tracks?.track || [];

    // Ensure exactly 10 songs (if less, just return what we have)
    return tracks.slice(0, 10).map((t) => ({
      name: t.name,
      artist: t.artist.name,
      url: t.url,
    }));
  } catch (err) {
    console.error("Error fetching songs from Last.fm:", err.message);
    return [];
  }
};

// Controller to handle playlist request
export const createPlaylistRequest = async (req, res) => {
  try {
    const { mood, artist, activity } = req.body;

    if (!mood && !artist && !activity) {
      return res.status(400).json({ message: "Please select at least one input" });
    }

    // Fetch 10 songs from Last.fm
    const songs = await fetchSongs({ mood, artist, activity });

    // Save input + songs in MongoDB
    const newRequest = new PlaylistRequest({
      mood,
      artist,
      activity,
      songs,
    });

    await newRequest.save();

    res.status(201).json({
      message: "Playlist generated and saved successfully",
      data: newRequest,
    });
  } catch (err) {
    console.error("Error generating playlist:", err);
    res.status(500).json({ message: "Error generating playlist" });
  }
};
