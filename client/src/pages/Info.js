import React from "react";
import "./Info.css"; // Import the CSS file for styling

const Info = () => {
    return (
        <div className="info-page-container">
            <h1 className="info-page-heading">Information on AR Banners</h1>
            <div className="info-page-section">
                <img 
                    src="qrcode.jpg"
                    alt="AR Banner Example" 
                    className="info-image" 
                />
                <div className="info-text">
                    <p>
                        Augmented Reality (AR) Banners are a cutting-edge solution for engaging potential customers. By using AR technology, these banners bring traditional print advertising to life, allowing users to interact with the content through their smartphones. This innovative approach helps tour operators showcase their offerings in a dynamic and captivating manner, enhancing customer experience and driving sales.
                    </p>
                </div>
            </div>
            <div className="info-page-section">
                <div className="info-text">
                    <p>
                        AR Banners can feature 3D models, videos, and interactive elements that tell a story about your tours and destinations. With just a simple scan, travelers can access immersive experiences that highlight the unique aspects of your services. This not only captures attention but also encourages potential customers to engage with your brand in a meaningful way.
                    </p>
                </div>
                <img 
                    src="qrcode.jpg" // Replace with your actual image URL
                    alt="AR Banner Usage" 
                    className="info-image" 
                />
            </div>
        </div>
    );
};

export default Info;
