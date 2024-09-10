import React from "react";
import "./About.css"; // Import the CSS file for styling

const individuals = [
    {
        name: "Batman",
        occupation: "Vigilante",
        interests: "Gadgets, Martial Arts, Crime Fighting, Justice",
        skills: "Hand-to-hand combat, Detective skills, Stealth, Leadership",
        image: "batman.png", 
    },
    {
        name: "Graham Fellows",
        occupation: "Superhero / Inventor",
        interests: "Technology, Innovation, Philanthropy",
        skills: "Genius-level intellect, Engineering, Combat Skills",
        image: "ironman.jpg", 
    },
    {
        name: "Superman",
        occupation: "Superhero",
        interests: "Truth, Justice, Protecting Humanity",
        skills: "Superhuman Strength, Flight, Heat Vision, X-ray Vision",
        image: "superman.jpg", // Example Superman image
    },
    {
        name: "The Hulk",
        occupation: "Superhero",
        interests: "Science, Strength, Advocacy for Peace",
        skills: "Incredible Strength, Durability, Healing Factor",
        image: "./assets/hulk.jpg", // Example Hulk image
    },
];

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-heading">Get to Know Us</h1> {/* Centered heading */}
            <h3>Wicked Interactive Storytelling aims to use innovative AR technology to improve the experience of users engaging with your product or service. Our team will cater the banner to your specific application allowing for the most engaging experience for users. We have experience developing banners for applications such as historical locations and art shows. Our Team consists of innovated people dedicated to providing the best AR banner for you: Team cards.
            </h3>
            <br></br>
            <h3>Our Team consists of innovated people dedicated to providing the most engaging AR banner for you:</h3>
            <div className="profiles-container"> {/* New wrapper for profiles */}
                {individuals.map((individual, index) => (
                    <div className="profile" key={index}>
                        <div className="profile-image">
                            <img src={individual.image} alt={individual.name} />
                        </div>
                        <div className="profile-info">
                            <h2>{individual.name}</h2>
                            <h3>Occupation: {individual.occupation}</h3>
                            <p><strong>Interests:</strong> {individual.interests}</p>
                            <p><strong>Skills:</strong> {individual.skills}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
