import React, { useState } from "react";
import "./BookingForm.css"; // Import the CSS file for styling

const BookingForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [interest, setInterest] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you would typically handle the form submission (e.g., send data to your server)
        console.log({
            firstName,
            lastName,
            phone,
            email,
            interest,
        });
        // Reset the form
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setInterest("");
    };

    return (
        <div className="booking-form-container">
            <h2>Book a Consultation</h2>
            <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="interest">Area of Interest</label>
                    <textarea
                        id="interest"
                        value={interest}
                        onChange={(e) => setInterest(e.target.value)}
                        rows="4"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default BookingForm;
