import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function Homepage(){
    return(
        <>
        <HeroSection/>
        <div className="text-white pt-20 text-center px-9 sm:px-9 md:px-72">
            <h1 className="text-3xl  md:text-5xl pt-20 sm:pt-20 md:pt-28 font-bold mb-6 ">Find Your Perfect <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"> Vibe</span></h1>
            <p className="text-xl pb-10 md:text-xl sm:text-xl text-[#ccc9dc] mb-6 ">Turn your mood into music with smart playlists powered by real-time emotion detection and Last.fm recommendations. </p>
        </div>
        <div className="flex flex-wrap justify-center text-white pb-20" >
            <div className="box1">
            <img src="/lightbulb.png" alt="" />
            <h3>Mood Playlist</h3>
            <p>Tell us how you’re feeling, and we’ll create the perfect 10-song playlist that matches your vibe. 
              Whether happy, sad, or relaxed—music always understands</p>
            </div>
            <div className="box1">
            <img src="/book.png" alt="" />
             <h3>Artist-Based Playlist</h3>
            <p>Pick your favorite artist, and we’ll generate a curated playlist of similar tracks you’ll 
              love—fresh discoveries, but still in your style.</p>   
            </div>
            <div className="box1">
            <img src="/rise.png"  alt="" />
              <h3>Activity Playlist</h3>
            <p>Select your activity—studying, running, chilling, or working out—and we’ll 
              craft the ultimate soundtrack to boost your performance.</p>  
            </div>
            <div className="box1">
            <img src="/brain.png"   alt="" />
              <h3>Auto Playlists</h3>
            <p>Instantly get 3 playlists at once—Chill, Workout, and Study. No need to choose,
               we’ve got them ready for you!</p>  
            </div>
            <div className="box1">
            <img src="/flashlight.png"  alt="" />
              <h3>Relax & Unwind</h3>
            <p>Chill tunes to help you relax, focus, or wind down</p>  
            </div>
            <div className="box1">
            <img src="/group.png"  alt="" />
                <h3>Top Picks for You”</h3>
            <p>Your personalized playlist based on your listening history and favorites</p>
            </div>
        </div>

        
        <Footer/>
        </>
    )
}