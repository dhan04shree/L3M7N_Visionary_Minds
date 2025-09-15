import { useState } from "react";
import axios from "axios";
import { Music, Smile, User, Activity } from "lucide-react";

export default function MoodBeatsForm() {
  const [mood, setMood] = useState("");
  const [artist, setArtist] = useState("");
  const [activity, setActivity] = useState("");
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSongs([]);

    try {
      // Send inputs to backend
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/playlists`, { mood, artist, activity });
      
      // res.data.data contains saved document including songs
      setSongs(res.data.data.songs || []);
      alert("🎶 Playlist Generated and Saved!");
    } catch (err) {
      console.error(err);
      alert("Failed to generate playlist");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full mb-6">
        <div className="flex flex-col items-center mb-6">
          <Music className="w-10 h-10 text-purple-600 mb-2" />
          <h1 className="text-2xl font-bold text-gray-800">MoodBeats</h1>
          <p className="text-gray-500 text-center mt-1">
            Choose your vibe, artist, or activity — or mix them together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Mood Dropdown */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-3">
            <Smile className="text-purple-500 w-5 h-5" />
            <select
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="bg-transparent w-full outline-none"
            >
              <option value="">Select Mood</option>
              <option value="happy">😊 Happy</option>
              <option value="sad">😢 Sad</option>
              <option value="energetic">⚡ Energetic</option>
              <option value="chill">🛋️ Chill</option>
            </select>
          </div>

          {/* Artist Dropdown */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-3">
            <User className="text-purple-500 w-5 h-5" />
            <select
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              className="bg-transparent w-full outline-none"
            >
              <option value="">Select Artist</option>
              <option value="arijit-singh">🎤 Arijit Singh</option>
              <option value="taylor-swift">🎸 Taylor Swift</option>
              <option value="weeknd">🎧 The Weeknd</option>
              <option value="edsheeran">🎸 Ed Sheeran</option>
            </select>
          </div>

          {/* Activity Dropdown */}
          <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-3">
            <Activity className="text-purple-500 w-5 h-5" />
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="bg-transparent w-full outline-none"
            >
              <option value="">Select Activity</option>
              <option value="study">📚 Studying</option>
              <option value="running">🏃 Running</option>
              <option value="workout">💪 Workout</option>
              <option value="relaxing">🧘 Relaxing</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-purple-600 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-purple-700 transition-all"
          >
            {loading ? "Generating..." : "🎶 Generate Playlist"}
          </button>
        </form>
      </div>

      {/* Display Suggested Songs */}
      {songs.length > 0 && (
        <div className="bg-white shadow-2xl rounded-2xl p-6 max-w-md w-full">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Your Playlist</h2>
          <div className="flex flex-col gap-3">
            {songs.map((song, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-3 bg-gray-100 rounded-xl"
              >
                <div>
                  <p className="font-semibold">{song.name}</p>
                  <p className="text-gray-500 text-sm">{song.artist}</p>
                </div>
                <a
                  href={song.url}
                  target="_blank"
                  className="text-purple-600 font-semibold hover:underline"
                >
                  Listen
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
