import { useState } from "react";

export default function BookingModal({ services, onClose }) {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = async () => {
    const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, date, services }),
    }); 
    const data = await res.json();
    if (data.success) {
        alert("Booking successful!");
        onClose();
    } 
};

return (
    <div className="modal" onClick={onClose}>
        <div className="modal-content"
        onClick={(e) => e.stopPropagation()}>
            <h3>{services}</h3>
            <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <button onClick={handleSubmit}>Book Now</button>
        </div>
    </div>
);
}