import React, { useState, useEffect } from "react";

const Profile = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user"));
        if (userData) setName(userData.name);
    }, []);

    const handleUpdate = async () => {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:5000/update-profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ name, password }),
        });

        const data = await response.json();
        if (response.ok) {
            setMessage("Profile updated successfully!");
            localStorage.setItem("user", JSON.stringify({ ...JSON.parse(localStorage.getItem("user")), name }));
        } else {
            setMessage(data.error);
        }
    };

    return (
        <div>
            <h2>Update Profile</h2>
            {message && <p>{message}</p>}
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter new name" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter new password (optional)" />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default Profile;
