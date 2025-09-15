import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";

export default function Homepage(){
    return(
        <>
        <HeroSection/>
        <div className="text-white pt-20 text-center px-9 sm:px-9 md:px-72">
            <h1 className="text-3xl  md:text-5xl pt-20 sm:pt-20 md:pt-28 font-bold mb-6 ">Capture Every <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Breakthrough</span></h1>
            <p className="text-xl pb-10 md:text-xl sm:text-xl text-[#ccc9dc] mb-6 ">Transform scattered thoughts into structured insights with our intelligent recording system</p>
        </div>
        <div className="flex flex-wrap justify-center text-white pb-20" >
            <div className="box1">
            <img src="/lightbulb.png" alt="" />
            <h3>Idea Capture</h3>
            <p>Instantly record fleeting thoughts and breakthrough moments before they disappear</p>
            </div>
            <div className="box1">
            <img src="/book.png" alt="" />
             <h3>Logic Tracking</h3>
            <p>Document your reasoning process and decision-making patterns over time</p>   
            </div>
            <div className="box1">
            <img src="/rise.png"  alt="" />
              <h3>Progress Visualization</h3>
            <p>See how your thinking evolves and identify patterns in your breakthrough moments</p>  
            </div>
            <div className="box1">
            <img src="/brain.png"   alt="" />
              <h3>Smart Connections</h3>
            <p>AI-powered linking between related ideas and concepts across your entries</p>  
            </div>
            <div className="box1">
            <img src="/flashlight.png"  alt="" />
              <h3>Quick Access</h3>
            <p>Lightning-fast search and retrieval of your past insights when you need them most</p>  
            </div>
            <div className="box1">
            <img src="/group.png"  alt="" />
                <h3>Collaborative Thinking</h3>
            <p>Share selected insights with team members and build on collective knowledge</p>
            </div>
        </div>

        
        <Footer/>
        </>
    )
}