import React, { useState } from "react";
import './Home.css'; // Import the CSS file specific to Home page
import ChatbotComponent from "../components/ChatbotComponent";

const Home = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const youtubeUrl = "https://www.youtube.com/embed/qSCQTA-6mMk"; // Use the embedded URL

    const handlePlayButtonClick = () => {
        setIsPlaying(true);
    };

    return (
        <main>
            <ChatbotComponent/>
            <section className="hero">
                <div className="hero-content">
                    <img src="/tour-guide.png" alt="Tour Guide" className="hero-img" />
                    <h1>Revolutionize Your Business And Its Marketing with AR Banners</h1>
                    <p>
                        Are you a tour operator looking to stand out in a crowded market? Our innovative Augmented Reality (AR) Banner solution is here to help you captivate potential customers and showcase your unique travel experiences like never before.
                    </p>
                    <a href="/info" className="learn-more-btn">Learn More</a>
                </div>
            </section>

            <section className="video-section">
                <h2>Demonstation Video (Placeholder)</h2>
                <div className="video-wrapper">
                    {!isPlaying ? (
                        <>
                            <img src="tour-guide-video.png" className="video-thumbnail" />
                            <button className="play-button" onClick={handlePlayButtonClick}>Play</button>
                        </>
                    ) : (
                        <iframe
                            width="560" // Adjust width as necessary
                            height="315" // Adjust height as necessary
                            src={youtubeUrl}
                            title="YouTube Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    )}
                </div>
            </section>

            <section className="info-section">
                <h2>What are AR Banners?</h2>
                <p>AR Banners are traditional print banners or posters enhanced with AR technology. By scanning these banners with their smartphones, travelers unlock a world of immersive, interactive content that brings your tours and destinations to life.</p>
            </section>
            <section className="video-section">
                <h2>How can AR Banners benefit tour operators?</h2>
                <p>
                    <h3>Showcase your tours:</h3> Provide a sneak peek of your tours with captivating 360-degree videos, virtual tours, or 3D models of your destinations.
                    <h3>Highlight unique selling points:</h3> Emphasize what sets your tours apart, such as exclusive access, knowledgeable guides, or luxury accommodations.
                    <h3>Offer special promotions:</h3> Entice potential customers with limited-time discounts or bonus experiences accessible only through your AR Banner.
                    <h3>Facilitate easy booking:</h3> Allow travelers to book your tours directly through the AR experience, minimizing barriers to conversion.
                    <h3>Gather valuable insights:</h3> Capture data on user engagement and preferences to refine your marketing strategies and tour offerings.
                </p>
            </section>

            <section className="info-section">
                <h2>How do AR Banners work?</h2>
                <div className="video-wrapper">
                    <h3>Create:</h3> Design your banner with stunning imagery of your tours and destinations, along with a clear call-to-action.
                    <h3>Enhance:</h3> Our team integrates AR technology into your banner, linking it to your chosen tour content and booking platform.
                    <h3>Display:</h3> Place your AR Banner in strategic locations, such as travel agencies, airports, or tourist information centers.
                    <h3>Engage:</h3> Travelers scan your banner using their smartphone camera and are instantly immersed in your tour experience. 
                </div>
            </section>
        </main>
    );
};

export default Home;
